'use server';

import { getNames } from "@/lib/names";

export async function getNamesAction(): Promise<string[]> {
  return getNames();
}
