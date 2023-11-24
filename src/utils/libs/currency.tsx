export const currency = (money: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(money)
}

export const thousandFormat = (number: string) => {
  try {
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
  } catch (error) {
    console.log(error)
  }
}
