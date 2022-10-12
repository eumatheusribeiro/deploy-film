export function formatPercentage(value: number) {
  const calc = ((value / 10) * 100).toFixed()
  return calc + '%'
}

export function formatTime(value: number) {
  const hour = Math.trunc(value / 60)
  const minutes = value % 60

  return hour + 'h ' + minutes + 'm'
}
