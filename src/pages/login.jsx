import React, {useState} from 'react'


const background = {
  backgroundImage: "url('/images/img/decor_img3.jpg')",
  marginTop: "100px",
  height: "100vh"
}
const logo_login = {
  backgroundImage: "url('/images/img/mbeedecor_logo2_transparent.png')",
  backgroundRepeat: "no-repeat",
  height: "50%",
  width: "50%"
}

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')) || [])
  const [account, setAccount] = React.useState(JSON.parse(localStorage.getItem('account')) || {})
  console.log(account)
  const [error, setError] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    if (user.find((item) => item.username === username && item.password === password)) {
      localStorage.setItem('account', JSON.stringify(
          {
            username: username,
            password: password,
            email: user.find((item) => item.username === username && item.password === password).email,
            fullName: user.find((item) => item.username === username && item.password === password).fullName,
            phone: user.find((item) => item.username === username && item.password === password).phone,
          }
      ))
      window.location.href = "/account"
    } else {
      setError("Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại.")
    }

  }
  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  return (
      <div style={background}>
        {
          account.username ? (
              window.location.href = "/shop"
          ) : (
              <div className='container w-100 d-flex justify-content-end align-items-center h-100'>
                <div style={logo_login}>
                </div>
                <form onSubmit={handleSubmit} className='card w-50 h-50 '>
                  <div className="mb-3 px-3 mt-4">
                    <h2>Đăng Nhập</h2>
                    <div className={"text-danger"}> {error} </div>

                    <input id="username" value={username} onChange={(e) => onChangeUsername(e)} type="text"
                           className="form-control" placeholder='Email, Số điện thoại, Tên đăng nhập' required/>
                  </div>
                  <div className="mb-3 px-3">
                    <input type="password" className="form-control" id="password" value={password}
                           placeholder='Mật khẩu' onChange={(e) => onChangePassword(e)} required/>
                  </div>
                  <button type="submit" className="btn mx-5 bg-warning-subtle border border-primary ">Đăng Nhập</button>
                  <div className='d-flex justify-content-center mt-2'>
                    <a href="">Quên mật khẩu?</a>
                  </div>
                  <div className='mt-3 d-flex justify-content-center'>
                    <p>Chưa có tài khoản.</p>
                    <a className='mx-3' href="/register">Đăng ký ngay</a>
                  </div>
                </form>
              </div>
          )
        }
      </div>
  )
}
export default Login
