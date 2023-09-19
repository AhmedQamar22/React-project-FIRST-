import React from "react";
import por from "../Portfolio/portfolio.module.css";
import img1 from "../imgs/poert1.png";
import img2 from "../imgs/port2.png";
import img3 from "../imgs/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="porfolio vh-100 bg-info d-flex justify-content-center align-items-center flex-column  mb-3  ">
        <div
          className={`headers bg-warning d-flex justify-content-center align-items-center flex-column position-absolute top-0 ${por.margin}`}
        >
          <h1 className="fw-bold text-uppercase">Portfolio component</h1>
          <div className={por.ions}>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="container  h-50 w-50">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <img
                src={img1}
                className=" img-thumbnail rounded-3 overflow-hidden "
                alt="pic"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src={img2}
                className="img-thumbnail rounded-3 overflow-hidden "
                alt="pic"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src={img3}
                className=" img-thumbnail rounded-3 overflow-hidden "
                alt="pic"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src={img1}
                className=" img-thumbnail rounded-3 overflow-hidden "
                alt="pic"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src={img2}
                className=" img-thumbnail rounded-3 overflow-hidden"
                alt="pic"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src={img3}
                className=" img-thumbnail rounded-3  overflow-hidden"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
