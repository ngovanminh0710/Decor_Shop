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

  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')) || [])

  const [fullName, setfullname] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const submit = (event) => {
    event.preventDefault();
    if (fullName === '' || username === '' || password === '' || email === '') {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
    }
    if (user.find(item => item.username === username)) {
      alert('Tên đăng nhập đã tồn tại')
      return
    }
    const data = {
      fullName: fullName,
      username: username,
      password: password,
      email: email,
      phone: phone,
    }
    setUser([...user, data])
    localStorage.setItem('user', JSON.stringify([...user, data]))
    alert('Đăng ký thành công')
    window.location.href = '/login'
  }


  return (
    <div style={background}>
      <div className='container d-flex justify-content-end align-items-center h-100'>
        <div style={register}>
        </div>
        <form className='card w-50 m-4' style={{height: "auto"}} onSubmit={submit}>
            <h2 className='mx-5 mt-4'>Đăng ký</h2>
          <div className="mb-3 px-5 mt-4">
            <input type="text" className="form-control" id="fullname"
                   onChange={(e) => setfullname(e.target.value)} placeholder='Họ và tên...'/>
          </div>
          <div className="mb-3 px-5 mt-4">
            <input type="email" className="form-control" id="email" placeholder='Email của bạn...'
                   onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3 px-5 mt-4">
            <input type="number" className="form-control" id="phone" placeholder='Phone của bạn...'
                   onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="mb-3 px-5 mt-4">
            <input type="text" className="form-control" id="username"
                   onChange={(e) => setUsername(e.target.value)} placeholder='Tên đăng nhập...'/>
          </div>
          <div className="mb-3 px-5 mt-4">
            <input type="password" className="form-control" id="password"
                   onChange={(e) => setPassword(e.target.value)} placeholder='Mật khẩu...'/>
          </div>
          <div className='d-flex justify-content-center'>
            <button className="btn mt-3 mx-5 mb-3 bg-warning-subtle border border-primary w-50">Đăng ký
            </button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default Register