import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className={`mt-5 ${style.footer}`}>
          <div className={`${style.row} row`}>
            <div className= "col-lg-4">
              <div className={`${style.card} card`}>
                <div className= "card-body">
                  <h3 className="card-title">LOCATION</h3>

                  <p className="card-text">2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`${style.card} card `}>
                <div className="card-body">
                  <h3>AROUND THE WEB</h3>
                  <div className={`${style.icons} `}   >
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`${style.card} card`}>
                <div className="card-body">
                  <h3 className="card-title">ABOUT FREELANCER</h3>
                  <p className="card-text">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
