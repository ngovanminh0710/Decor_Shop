import React from "react";

const Account = () => {
    const [account, setAccount] = React.useState(JSON.parse(localStorage.getItem('account')) || {})

    const logout = () => {
        localStorage.removeItem("account")
        window.location.href = "/"
    }

    return (
        <div className="container py-5 w-100 h-100" style={{width: "100%", marginTop: "90px"}}>
            <div className="row d-flex justify-content-center align-items-center h-100 w-100">
                <div className="col col-lg-6 mb-4 mb-lg-0 w-100">
                    <div className="card mb-3" style={{borderRadius: .5 + "rem"}}>
                        <div className="row g-0">
                            <div className="col-md-4 gradient-custom text-center ">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="Avatar" className="img-fluid my-5" style={{width: 80 + "px"}}/>
                                <h5>{account.fullName}</h5>
                                <p>Web Designer</p>
                                <button className="btn btn-outline-primary btn-sm px-3" type="button"
                                        onClick={logout}> Đăng xuất
                                </button>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h6>Information</h6>
                                    <hr className="mt-0 mb-4"/>
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Email</h6>
                                            <p className="text-muted">{account.email}</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Phone</h6>
                                            <p className='text-muted' >{account.phone} </p>
                                        </div>
                                    </div>
                                    <hr className="mt-0 mb-4"/>
                                    <div className="row pt-1">
                                        <div className='form-group mb-3'>
                                            <label> Full Address</label>
                                            <textarea rows='3' className='form-control'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Account