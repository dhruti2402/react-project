import React from 'react'
import './Table.css'
import {BsFillTrashFill , BsFillPencilFill} from 'react-icons/bs'

const Table = ({rows,deleteRow,editRow,search,setSearch}) => {
  return (
    <div className='main-container'>

       <div className='search'>
         <input type="text" placeholder="Search by page or description..."
           value={search} name='search'
           onChange={(e) => setSearch(e.target.value)}
           className='search-bar'
          />
       </div>
       

          <table className='table'>
                 <thead>
                         <tr>
                            <th>Page</th>
                            <th className='desc'>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                         </tr>
                 </thead>

                 <tbody>

                    {
                        rows.map((row,idx) => {
                            return <tr key={idx}>
                                <td>{row.page}</td>

                                <td className='desc'>{row.description}</td>

                                <td>
                                    <span className={`label label-${row.status}`}>{row.status}</span>
                                 </td>

                                 <td>
                                <span className='actions'>
                                    <BsFillTrashFill className='dlt-btn' onClick={()=>deleteRow(idx)}/>
                                    <BsFillPencilFill onClick={() => editRow(idx)}/>
                                </span>
                            </td>
                            </tr>
                        })
                    }
                 </tbody>
          </table>
    </div>
  )
}

export default Table
