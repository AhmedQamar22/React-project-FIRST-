import React from 'react'
import "../Home/Home.css"
import myimgs from"../imgs/avataaars.svg"



export default function Home() {
  return (
      <div>
        <div className="container">
        <div className="home d-flex align-items-center justify-content-center ">
          <div className="text-center">
          <img src={myimgs} alt="pic" />
        <h1 className='fw-bold text-uppercase  fs-1 mb-3'>START FRAMEWORK</h1>
        <div className="icon">
          <i className="fa-solid fa-star  text-center"></i>
        </div>
        <p className='mt-4'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
        </div>
      </div>
  )
}
