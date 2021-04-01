import moment from 'moment'

export const errorMessage =
  'Your data could not be load. Please check fields "Full Name", "Phone", "Email" are not empty and file extansion is ".csv"'

export const isValidData = (data) => {
  const validValues = data.map((item) => {
    return [item['Full Name'], item['Phone'], item['Email']]
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

export const isEmailValid = (value) => {
  const re = /[^@]+@[^\.]+\..+/g

  return re.test(value)
}

export const isAgeValid = (value) => +value >= 21 && Number.isInteger(+value)

export const isExperienceValid = (exp, age) => {
  return +exp > 0 && +exp <= age - 21
}

export const isIncomeValid = (value) => {
  if (value >= 0 && value <= 1000000) {
    return (+value).toFixed(2)
  }

  return false
}

export const isHasChildren = (value) => {
  if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
    return value.toUpperCase()
  }
  if (!value) return 'FALSE'

  return false
}

export const isStatesValid = (value) => {
  return value
    .split('|')
    .map((el) => el.trim())
    .join(', ')
}

export const isExpDateValid = (value) => {
  if (
    (moment(value, 'YYYY-MM-DD').isValid() ||
      moment(value, 'MM/DD/YYYY').isValid()) &&
    moment(value).isAfter(moment())
  )
    return true

  return false
}

export const isLicenseValid = (value) => {
  const re = /^\w*\d*$/g
  if (value.length !== 6) return false

  return re.test(value)
}

export const isMatch = (data, item) =>
  data.map((el) => {
    if (
      (el['Phone'] === item['Phone'] && el.id != item.id) ||
      (el['Email'].toLowerCase() === item['Email'].toLowerCase() &&
        el.id != item.id)
    ) {
      return el.id
    }
  })
