import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer-top">
          <div className="container">
            <div className="footer-day-time">
              <div className="row">
                <div className="col-md-8">
                  <ul>
                    <li>Opening Hours: Mon - Friday: 8AM - 5PM</li>
                    <li>Sunday: 8:00 AM - 12:00 PM</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img src="/images/img/mbeedecor_logo2.png" className="rounded float-left img_footer mb-2" alt="..." />
                <p>MBEE DECOR - Chuyên cung cấp những mặt hàng thiết bị cần thiết và đa dạng cho các bạn thoải mái lựa chọn để trang trí cho mình 1 căn phòng thật đẹp và ưng ý.</p>

              </div>

              <div className="col-md-4 ">
                <h4>Contact</h4>
                <ul className="address1">
                  <li><i className="fa fa-map-marker"></i>123/123 - HCM - VN</li>
                  <li><i className="fa fa-envelope"></i><a href="mailto:#">mbeedecor_cskh@mbee.com</a></li>
                  <li><i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">0365.470.112</a></li>
                </ul>
              </div>

              <div className="col-md-4">
                <h4>Follow us</h4>
                <ul className="social-icon">
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div>
                <p className="copyright text-uppercase text-center">Copyright © MBEE DECOR!
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

  )
}

export default Footer