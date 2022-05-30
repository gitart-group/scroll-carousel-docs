export const createItems = (about: number): Array<number> => {
  return new Array(about).fill(null).map((_, i) => i)
}
