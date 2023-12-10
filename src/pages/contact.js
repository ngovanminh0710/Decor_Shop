import React, { useState } from 'react'

const Contact = () => {
    const [yourname, setYourName] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [youremail, setYourEmail] = useState("")
    const [youraddress, setYourAddress] = useState("")
    const [yourmessage, setYourMassage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("yourname:", yourname);
        console.log("phonenumer:", phonenumber);
        console.log("youremail:", youremail);
        console.log("youraddress:", youraddress);
        console.log("yourmessage:", yourmessage);
    }
    const onChangeYourname = (event) => {
        setYourName(event.target.value)
    }
    const onChangePhonenumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    const onChangeYouremail = (event) => {
        setYourEmail(event.target.value)
    }
    const onChangeYouraddress = (event) => {
        setYourAddress(event.target.value)
    }
    const onChangeYourmessage = (event) => {
        setYourMassage(event.target.value)
    }
    const bg_contact = {
        backgroundImage: "url('/images/img/decor_img3.jpg')",
    }
    return (
        <div style={{marginTop: "100px",}}>
            <div className='text-black container'>
                <h2>MBEE Decor</h2>
                <p>
                    <strong>Office &amp; Showroom : </strong>
                    123/123 - HCM - VN
                </p>
                <p>
                    <strong>Hotline: </strong>
                    0365.470.112
                </p>
                <p>
                    <strong>Email: </strong>
                    mbeedecor_cskh@mbee.com
                </p>
            </div>
            <div style={bg_contact}>
                < div className='container'>
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <form onSubmit={handleSubmit} className='m-3 bg-light rounded-4 p-4 '>
                                    <h1 className="mb-3">Contact Us</h1>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Họ và tên</label>
                                            <input type="text" className="form-control" id="yourname" required value={yourname} onChange={(e) => onChangeYourname(e)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Số điện thoại</label>
                                            <input type="number" className="form-control" id="phonenumber" required value={phonenumber} onChange={(e) => onChangePhonenumber(e)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" id="youremail" required value={youremail} onChange={(e) => onChangeYouremail(e)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Địa Chỉ</label>
                                            <input type="text" className="form-control" id="youraddress" value={youraddress} onChange={(e) => onChangeYouraddress(e)} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Lời Nhắn</label>
                                            <textarea className="form-control" id="yourmessage" rows="5" required value={yourmessage} onChange={(e) => onChangeYourmessage(e)}></textarea>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button type="submit" className="btn btn-dark w-100 fw-bold" >Gửi</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Contact