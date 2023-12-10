import React from 'react'

const background = {
  backgroundImage: "url('/images/img/decor_img3.jpg')",
  marginTop: "100px",
  height: "100vh"
}
const register = {
  backgroundImage: "url('/images/img/mbeedecor_logo2_transparent.png')",
  backgroundRepeat: "no-repeat",
  height: "50%",
  width: "50%"
}
const Register = () => {
  return (
    <div style={background}>
      <div className='container d-flex justify-content-end align-items-center h-100'>
        <div style={register}>
        </div>
        <form className='card w-50 m-4' style={{height:"auto"}}>
            <h2 className='mx-5 mt-4'>Đăng ký</h2>
          <div className="mb-3 px-5 mt-4">
            <input type="text" className="form-control" id="username" placeholder='Họ và tên...' />
          </div>
          <div className="mb-3 px-5 mt-4">
            <input type="text" className="form-control" id="username_acount" placeholder='Tên đăng nhập...' />
          </div>
          <div className="mb-3 px-5 mt-4">
            <input type="password" className="form-control" id="password" placeholder='Mật khẩu...' />
          </div>
          <div className="mb-3 px-5 mt-4">
            <input type="email" className="form-control" id="email" placeholder='Email của bạn...' />
          </div>
          <div className='d-flex justify-content-center'>
            <button className="btn mt-3 mx-5 mb-3 bg-warning-subtle border border-primary w-50" type="submit">Đăng ký</button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default Register