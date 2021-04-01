import React from 'react'
import classnames from 'classnames'
import {
  errorMessage,
  isValidData,
  isCSV,
  isPhoneValid,
  isEmailValid,
  isAgeValid,
  isExperienceValid,
  isIncomeValid,
  isHasChildren,
  isStatesValid,
  isExpDateValid,
  isLicenseValid,
  isMatch,
} from '../validators'

export const DataTable = ({ data, file }) => {
  return !isValidData(data) || !isCSV(file) ? (
    <div className='error'>{errorMessage}</div>
  ) : (
    <table className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Age</th>
          <th>Experience</th>
          <th>Yearly Income</th>
          <th>Has children</th>
          <th>License states</th>
          <th>Expiration date</th>
          <th>License number</th>
          <th>Dublicate with</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item['Full Name']}</td>
            <td
              className={classnames({ invalid: !isPhoneValid(item['Phone']) })}
            >
              {isPhoneValid(item['Phone'])
                ? isPhoneValid(item['Phone'])
                : item['Phone']}
            </td>
            <td
              className={classnames({ invalid: !isEmailValid(item['Email']) })}
            >
              {item['Email']}
            </td>
            <td className={classnames({ invalid: !isAgeValid(item['Age']) })}>
              {item['Age']}
            </td>
            <td
              className={classnames({
                invalid: !isExperienceValid(item['Experience'], item['Age']),
              })}
            >
              {item['Experience']}
            </td>
            <td
              className={classnames({
                invalid: !isIncomeValid(item['Yearly Income']),
              })}
            >
              {isIncomeValid(item['Yearly Income'])
                ? isIncomeValid(item['Yearly Income'])
                : item['Yearly Income']}
            </td>
            <td
              className={classnames({
                invalid: !isHasChildren(item['Has children']),
              })}
            >
              {isHasChildren(item['Has children'])
                ? isHasChildren(item['Has children'])
                : item['Has children']}
            </td>
            <td
              className={classnames({
                invalid: !isStatesValid(item['License states']),
              })}
            >
              {isStatesValid(item['License states'])}
            </td>
            <td
              className={classnames({
                invalid: !isExpDateValid(item['Expiration date']),
              })}
            >
              {item['Expiration date']}
            </td>
            <td
              className={classnames({
                invalid: !isLicenseValid(item['License number']),
              })}
            >
              {item['License number']}
            </td>
            <td>{isMatch(data, item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
