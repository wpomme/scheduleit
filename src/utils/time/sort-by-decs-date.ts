export const sortByDecsDate = (a: string, b: string) => {
  return (
    Date.parse(a) - Date.parse(b)
  )
}
