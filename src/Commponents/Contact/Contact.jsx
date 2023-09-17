/* eslint-disable react/style-prop-object */
import React from 'react'
import cons from "../Contact/Contact.module.css"

export default function Contact() {
  return (
    <>
      <div className=' p-5 vh-100 d-flex justify-content-center align-items-center flex-column p-5'>
          <div className="header d-flex justify-content-center align-items-center flex-column">
            <h1 className={cons.head}>Contact section</h1>
            <div className={cons.iconsss}>
              <i className='fa-solid fa-star'></i>
            </div>
            </div>
            <form className='  text-center w-50 d-flex align-items-center justify-content-center flex-column ' >
              <label htmlFor="userName"></label>
              <input type="text" placeholder='username' className='form-control'/>
              <label htmlFor="userAge"></label>
              <input type="number" placeholder='userage' className='form-control'/>
              <label htmlFor="userEmail"></label>
              <input type="email" placeholder='useremail' className='form-control'/>
              <label htmlFor="Password"></label>
              <input type="password" placeholder='password' className='form-control'/>
            </form>
          </div>
    </>
  )
}


