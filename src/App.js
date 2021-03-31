import { useState } from 'react'
import { Uploader } from './components/Uploader'
import { DataTable } from './components/DataTable'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [file, setFile] = useState(null)

  return (
    <div className='App'>
      <Uploader setData={setData} setFile={setFile} />
      {data && file && <DataTable data={data} file={file} />}
    </div>
  )
}

export default App
