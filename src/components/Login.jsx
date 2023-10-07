import React, { useContext } from 'react'
import { useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

import {Link, Navigate} from "react-router-dom"
import { stateContext } from '../contexts/ContextProvider';
import {useFormik} from "formik"
import { loginSchema } from '../schemas';




const Login = () => {
  const onSubmit=(values,action)=>{
    // console.log(values.email)
    const email= values.email
    const password= values.password
    const payload={email, password}
    console.log(payload);
    axios.post("/login",payload).then(({data})=>{
      setToken(data.token)
      setUser(data.user)
    })
  }
  const {values,handleChange,handleSubmit,handleBlur,errors}= useFormik({
    initialValues:{email:"",password:""},
    validationSchema:loginSchema,
    onSubmit})
  
  const {token,setToken,setUser}=useContext(stateContext)

  // console.log(values)


  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // console.log(email)
  // console.log(password)
  if(token){
    return <Navigate to={"/dashboard"}/>
  }
  return (
    
  <>
   <MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">Logo</span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login into your account</h5>
        <form onSubmit={handleSubmit}>
          <MDBInput name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          {errors.email?<p className='inputerror'>{errors.email}</p>:null}
          <MDBInput name='password' value={values.password
          }  onChange={handleChange} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
          {errors.password ? <p className='inputerror'>{errors.password}</p>:null}
        <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
        </form>
        <a className="small text-muted" href="#!">Forgot password?</a>
        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>new here ? <Link to="/">Register here</Link></p>

        <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Terms of use.</a>
          <a href="#!" className="small text-muted">Privacy policy</a>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
  </>
  )
}


export default Login