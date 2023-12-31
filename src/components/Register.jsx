import React, { useContext } from 'react'
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
  import { useState } from 'react';
import {Link, Navigate} from "react-router-dom"
import { stateContext } from '../contexts/ContextProvider';
import { useFormik } from 'formik';
import { registerSchema } from '../schemas';
import axios from 'axios';

const Register = () => {
const onSubmit=(values,action)=>{

  const name = values.name
  const email = values.email
  const password = values.password
  const payLoad={name,email,password}
  console.log(payLoad);
  
//   axios.post("/",payLoad).then(({data})=>{
//     setToken(data.token)
//     setUser(data.token)

//   })
 }

const {values,handleSubmit,handleChange,handleBlur,touched,errors}=useFormik({
  initialValues:{name:"",email:"",password:""},
  validationSchema:registerSchema,
onSubmit})

  const{token,setToken,setUser}=useContext(stateContext)
  
//   console.log(token);
//   const [name, setName] = useState()
// console.log(name);
// const [email, setEmail] = useState()
// console.log(email)
// const [password, setPassword] = useState()
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

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
        <form onSubmit={handleSubmit}>
        <MDBInput name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} wrapperClass='mb-4' label='name ' id='formControlLg' type='text' size="lg"/>
        {errors.name? <p className='inputerror'>{errors.name}</p>:null}
          <MDBInput name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          {errors.email? <p className='inputerror'>{errors.email}</p>:null}  
          <MDBInput name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
          {errors.password? <p className='inputerror'>{errors.password}</p>:null}
        <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
        </form>
        <a className="small text-muted" href="#!">Forgot password?</a>
        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>already have an account? <Link to="/login">login here</Link></p>

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

export default Register