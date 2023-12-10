import React from 'react'

const Header = () => {
  return (
    <nav className=" navbar navbar-expand-lg bg-body-tertiary fixed-top flex-nowrap">
      <div className="container-fluid  ">
        <img src="/images/img/mbeedecor_logo2_transparent.png" className="rounded float-left img_header" alt="..." />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around" id="navbarTogglerDemo02">
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Trang Chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">Mbee Decor</a>
            </li>
            <li className="nav-item">
              <div className="dropdown-center">
                <a href="/shop" className=" nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mặt Hàng
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/shop">Sản Phẩm Trang Trí</a></li>
                  <li><a className="dropdown-item" href="/shop">Sản Phẩm Thi Công</a></li>
                  <li><a className="dropdown-item" href="/shop">Sản Phẩm Độc Đáo </a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a href='/contact' className="nav-link " >Liên Hệ</a>
            </li>
          </ul>
          <ul className="social-icon ms-4 mx-5">
            <li><a href="/checkout"><i className="fa fa-shopping-cart border border-black " aria-hidden="true"></i></a></li>
            <li><a href="/login"><i className="fa fa-user-o border border-black" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header