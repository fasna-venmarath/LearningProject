import React, { useContext, useState,useEffect  } from 'react'
import { stateContext } from '../contexts/ContextProvider'

import { Navigate } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import { api } from '../Url'
import axios from 'axios'




const Dashboard = () => {

const [data, setData] = useState([]);

useEffect(() => {

axios.get(api).then((response)=>setData(response.data.products))
  
}, [])


console.log(data);
  const{token}= useContext(stateContext)
  if(!token){
    return <Navigate to="/login"/>
  }
console.log(api)

  return (
    <>
    {data.map((dataObj,index)=>{
      
      return(

        <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dataObj.thumbnail} />
      <Card.Body>
        <Card.Title>{dataObj.brand}</Card.Title>
        <Card.Text>
          {dataObj.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </>
        
      )
    })}
   
   </>
   )
}

export default Dashboard