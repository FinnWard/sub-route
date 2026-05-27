const NAMES = ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Linus Torvalds"];

export async function getNames(): Promise<string[]> {
  return NAMES;
}
