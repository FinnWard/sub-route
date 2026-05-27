This is a small [Next.js](https://nextjs.org) demo for testing whether an App Router app can be served from the `/docs` subpath behind an nginx reverse proxy.

## Local app

Run the app directly with Next.js:

```bash
pnpm dev
```

Open [http://localhost:3000/docs](http://localhost:3000/docs) because the app is configured with `basePath: "/docs"`.

## Compose nginx proxy test

This repository includes a two-container stack:

- `app`: the production Next.js server
- `nginx`: a reverse proxy that forwards `/docs` to the app without stripping the prefix

Start it with Docker or Podman:

```bash
docker compose up --build
# or
podman-compose up --build
```

Then test:

1. App UI through nginx: [http://localhost:8080/docs](http://localhost:8080/docs)
2. Names route through nginx: [http://localhost:8080/docs/api/names](http://localhost:8080/docs/api/names)
3. Direct app container is only exposed to the compose network, not the host

Useful smoke tests:

```bash
curl -i http://localhost:8080/docs
curl -i http://localhost:8080/docs/api/names
```

`/docs/` redirects to `/docs`, which is expected for this Next.js setup.

The server action can be tested from the page UI at `/docs`. It should return the same names list as the route handler.
