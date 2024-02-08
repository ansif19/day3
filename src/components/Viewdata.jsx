import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewdata = () => {
    var[users,setUsers]=useState([])
    var[loading,setloading] = useState(false)



    useEffect(()=>{
        setloading(true)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res)
        setUsers(res.data)
        setloading(false)
    })
    .catch(err=>console.log(err))
},[])
// const loaddata = () =>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{
//         console.log(res)
//         setUsers(res.data)
//     })

// }
  return (
    <div>
        {loading?<CircularProgress color='primary'/>:
        
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>name</TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>email</TableCell>
                </TableHead>
                <TableBody>
                    {users.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.username}</TableCell>
                                <TableCell>{val.email}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        )

                    })}
                </TableBody>
            </Table>
        </TableContainer>}
        {/* <Button variant='contained' onClick={loaddata}>loaddata</Button> */}
    </div>
  )
}

export default Viewdata