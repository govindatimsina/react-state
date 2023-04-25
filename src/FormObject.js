import { useState } from 'react'
import React from 'react'

export default function FormObject() {
    const [personName, setpersonName] = useState({
        firstName: 'dummy',
        lastName: 'random'
    })
    function handleFirstName(e){
       setpersonName({
        ...personName,
        firstName: e.target.value
       })
    }
    function handleLastName(e){
        setpersonName({
         ...personName,
         lastName: e.target.value
        })
     }
  return (
    <div>
        <br/><br/>
        <h1>Email Generator</h1>
        <label htmlFor="FirstName">First Name: </label>
        <input type="text" id='FirstName' onChange={handleFirstName} place='{${personName.firstName}}'/><br/>
        <label htmlFor="LastName">Last Name: </label>
        <input type="text" id='LastName' onChange={handleLastName}/>
        <p><b>Email:</b>{personName.lastName+personName.firstName}@gmail.com</p>
    </div>
  )
}
