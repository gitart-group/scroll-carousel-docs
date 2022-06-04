export default (amount: number): Array<number> => {
  return new Array(amount).fill(null).map((_, i) => i)
}
