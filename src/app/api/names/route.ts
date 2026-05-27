import { getNames } from "@/lib/names";

export async function GET() {
  const names = await getNames();

  return Response.json({ names });
}
