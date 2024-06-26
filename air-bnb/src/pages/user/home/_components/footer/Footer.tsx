import React from 'react';

export default function Footer() {
  return (
    <footer id='footer' className="text-center text-lg-start bg-body-tertiary text-muted" style={{ backgroundColor: '#f7f7f7' }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div className=''>
          <a href='https://www.facebook.com/nhatanhbb' className="mx-3 me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href='https://www.instagram.com/__nhatanhbb_/' className="mx-3 me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href='https://github.com/NgHuuNhat' className="mx-3 me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className=''>
        <div className="container text-left text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-6 col-lg-6 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4 d-flex">
                <img id='logo-img' className='w-5 h-5' src="https://demo4.cybersoft.edu.vn/static/media/airbnb-1.aabeefedaf30b8c7011a022cdb5a6425.svg" alt="logo" />
                {/* <i className="fas fa-gem me-3" /> */}
                AirBnb
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-6 col-lg-6 col-xl-3 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-6 col-lg-6 col-xl-3 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-6 col-lg-6 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3" /> Ho Chi Minh City, VN</p>
              <p><i className="fas fa-envelope me-3" /> nhat200901@gmail.com</p>
              <p><i className="fas fa-phone me-3" /> 0985 62 70 61</p>
              <p><i className="fas fa-print me-3" /> 0985 62 70 61</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Footer */}
      <div className="text-center p-4 border-top">
        Nguyen Huu Nhat © 2024 Company, Inc.
      </div>
      {/* Footer */}
    </footer>
  )
}
