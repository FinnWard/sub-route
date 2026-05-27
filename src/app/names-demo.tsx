"use client";

import { useState } from "react";

import { getNamesAction } from "@/app/actions";

type LoadState = {
  names: string[];
  error: string | null;
};

const initialState: LoadState = {
  names: [],
  error: null,
};

export function NamesDemo() {
  const [restState, setRestState] = useState<LoadState>(initialState);
  const [actionState, setActionState] = useState<LoadState>(initialState);
  const [loadingRest, setLoadingRest] = useState(false);
  const [loadingAction, setLoadingAction] = useState(false);

  async function loadWithRest() {
    setLoadingRest(true);
    setRestState(initialState);

    try {
      const response = await fetch("/docs/api/names");

      if (!response.ok) {
        throw new Error(`REST request failed with status ${response.status}`);
      }

      const data = (await response.json()) as { names: string[] };
      setRestState({ names: data.names, error: null });
    } catch (error) {
      setRestState({
        names: [],
        error: error instanceof Error ? error.message : "REST request failed.",
      });
    } finally {
      setLoadingRest(false);
    }
  }

  async function loadWithServerAction() {
    setLoadingAction(true);
    setActionState(initialState);

    try {
      const names = await getNamesAction();
      setActionState({ names, error: null });
    } catch (error) {
      setActionState({
        names: [],
        error:
          error instanceof Error
            ? error.message
            : "Server action request failed.",
      });
    } finally {
      setLoadingAction(false);
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          REST endpoint
        </p>
        <h2 className="mt-2 text-xl font-semibold">GET /api/names</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Calls a standard route handler and returns the names as JSON.
        </p>
        <button
          type="button"
          onClick={loadWithRest}
          className="mt-4 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          disabled={loadingRest}
        >
          {loadingRest ? "Loading..." : "Call REST endpoint"}
        </button>
        <ResultPanel state={restState} />
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Server action
        </p>
        <h2 className="mt-2 text-xl font-semibold">getNamesAction()</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Calls a Next.js server action and returns the same names list.
        </p>
        <button
          type="button"
          onClick={loadWithServerAction}
          className="mt-4 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          disabled={loadingAction}
        >
          {loadingAction ? "Loading..." : "Call server action"}
        </button>
        <ResultPanel state={actionState} />
      </section>
    </div>
  );
}

function ResultPanel({ state }: { state: LoadState }) {
  return (
    <div className="mt-4 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
      {state.error ? (
        <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>
      ) : state.names.length > 0 ? (
        <ul className="space-y-2 text-sm">
          {state.names.map((name) => (
            <li
              key={name}
              className="rounded-lg bg-white px-3 py-2 dark:bg-black"
            >
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No data loaded yet.
        </p>
      )}
    </div>
  );
}
