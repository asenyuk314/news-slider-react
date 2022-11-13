export const dateParser = (timeStamp: number): string =>
  new Date(timeStamp * 1000).toLocaleDateString('en-GB', { month: 'short', day: '2-digit' })
