// TODO main == sub の場合
export const isAfterTime = (main: string, sub: string) => {
  return (
    Date.parse(main) - Date.parse(sub) >= 0
  )
}
