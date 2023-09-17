import React from 'react'
import edal from "../About/About.module.css"



export default function About() {
  return (
    <>
      <div className={`posision-relative   vh-100 d-flex flex-column justify-content-center align-items-center ${edal.color}`} >
            <div >
              <h2 className='fw-bolder fs-1 mb-4 text-white text-uppercase '>about component</h2>
              <div className={edal.icons}>
                <i className="fa-solid fa-star mb-3 d-flex justify-content-center align-items-center "></i>
              </div>
            </div>
            <div className="container">
              <div className='row'>
                <div className="col-md-6 ps-md-5">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 pe-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
            </div>

      </>
  )
}
