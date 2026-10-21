import './App.css'
import Add from './components/Add'
import Table from "./components/Table"
import { useState } from 'react'


function App() {

  const [modalOpen, setmodalOpen] = useState(false)

  const [rows, setRows] = useState( [
    {page: "page1" , description: "this is first page" , status: "live"},
    {page: "page2" , description: "this is second page" , status: "draft"},
    {page: "page3" , description: "this is third page" , status: "error"}
  ])

   const [rowToEdit, setRowToEdit] = useState("")

  const handleDelete = (targetIndex) => {
      setRows(rows.filter((_, idx) => idx !== targetIndex));
  }

  const handleSubmit = (newRow) => {

      rowToEdit === null 
            ?  setRows ([...rows,newRow ]) 
            :  setRows (
              rows.map((currRow , idx) => {
                  if (idx !== rowToEdit) return currRow;

                  return newRow;
              })
            )
  }

   const handleEdit = (idx) =>{
          setRowToEdit(idx);

          setmodalOpen(true);
     }

  return (
    <>
      <div>
             <Table rows={rows} deleteRow={handleDelete} editRow={handleEdit}/>

             <button className='add-btn' onClick={() => setmodalOpen(true)}>Add</button>

             {modalOpen && (
              
                 <Add closeModal = {() => {
                    setmodalOpen(false);
                    setRowToEdit(null)
             }}
                onSubmit = {handleSubmit}

                //edit
                defaultValue = {rowToEdit !== null && rows[rowToEdit]}
             />
             ) }
      </div>
    </>
  )
}

export default App
