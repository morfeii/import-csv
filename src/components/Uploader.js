import React from 'react'
import { CSVReader } from 'react-papaparse'

export const Uploader = ({ setData, setFile }) => {
  const handleOnDrop = (data, file) => {
    console.log(data)
    console.log(file)
    setData(data)
    setFile(file)
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const handleOnRemoveFile = (data) => {
    console.log(data)
    setData(null)
  }

  return (
    <>
      <h5>Click and Drag Upload</h5>
      <CSVReader
        config={{ header: true, skipEmptyLines: true }}
        style={{ dropArea: { width: '50vw', margin: '0 auto' } }}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
        onDrop={handleOnDrop}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </>
  )
}
