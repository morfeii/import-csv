export const isValidData = (data) => {
  const validValues = data.map(({ data }) => {
    return [data['Full Name'], data['Phone'], data['Email']]
  })
  for (let values of validValues) {
    return values.every((value) => !!value)
  }
}

export const isCSV = (file) => {
  return file.name.toLowerCase().split('.')[1] === 'csv'
}

export const isPhoneValid = (value) => {
  if (value.length < 10 || value.length > 12) return false
  if (value.length === 10 && Number.isInteger(+value)) return `+1${value}`
  if (value.length === 11 && Number.isInteger(+value) && value[0] === '1')
    return `+${value}`
  if (
    value.length === 12 &&
    value.slice(0, 2) === '+1' &&
    Number.isInteger(+value.slice(-10))
  )
    return value
  return false
}
