import React from 'react'
import classnames from 'classnames'
import { isValidData, isCSV, isPhoneValid } from '../validators'

export const DataTable = ({ data, file }) => {
  return !isValidData(data) || !isCSV(file) ? (
    <div className='no-data'>file format is not correct</div>
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
        </tr>
      </thead>
      <tbody>
        {data.map(({ data }, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data['Full Name']}</td>
            <td className={classnames({ error: !isPhoneValid(data['Phone']) })}>
              {isPhoneValid(data['Phone'])
                ? isPhoneValid(data['Phone'])
                : data['Phone']}
            </td>
            <td>{data['Email']}</td>
            <td>{data['Age']}</td>
            <td>{data['Experience']}</td>
            <td>{data['Yearly Income']}</td>
            <td>{data['Has children']}</td>
            <td>{data['License states']}</td>
            <td>{data['Expiration date']}</td>
            <td>{data['License number']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
