import React from 'react'
import './css.css'
export default function header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="nav">
          <div className="nav-logo">
            <img src="https://inbazar.uz/images/inbazar_new.jpg" alt=""/>
          </div>
          <div className="nav-info">
            <div>
              <p>Ish vaqti</p>
              <p>
                <img src="https://inbazar.uz/template/assets/icons/oclock.svg" alt=""/>
                <span className="working-time"></span><span>09:00-22:30</span>
              </p>
            </div>
            <div>
              <p>
                <img src="https://inbazar.uz/template/assets/icons/phone.svg" alt=""/>
                <a href="tel:998909469494">+998 (90) 946 94 94</a>
              </p>
              <p>
                <img src="https://inbazar.uz/template/assets/icons/phone.svg" alt=""/>
                <a href="tel:998970138888">+998 (97) 013 88 88</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
