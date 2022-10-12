export function StringCapitalize(word: string): string {
  const fistcharacter = word.charAt(0)
  const rest = word.slice(1)
  return fistcharacter.toUpperCase() + rest;
}
