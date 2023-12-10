import React from 'react';
import logo from '../image_pages/mbeedecor_logo2_transparent.png'

const About = () => {
  return (
    <div className='container' style={{marginTop: '90px'}}>
      <div>
        <h1>Mbee Decor</h1>
        <p>- Cung cấp dịch vụ decor trọn gói giá cả phải hợp lý</p>
        <p>- Cung cấp các sản phẩm trang trí chất lượng, giá cả hợp lý dành cho tất cả các bạn</p>
        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, odio inventore minus quas fugiat suscipit amet, reiciendis debitis repudiandae tempore nulla molestias eaque quae vitae nam magni ratione, delectus totam.</p>
        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, odio inventore minus quas fugiat suscipit amet, reiciendis debitis repudiandae tempore nulla molestias eaque quae vitae nam magni ratione, delectus totam.</p>
        <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, odio inventore minus quas fugiat suscipit amet, reiciendis debitis repudiandae tempore nulla molestias eaque quae vitae nam magni ratione, delectus totam.</p>
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <h2>Một số mẫu của nhà MBEE đã Decor cho khách hàng</h2>
      </div>
      <div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img style={{width: 'auto', height: 'auto'}} src={logo} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={logo} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img style={{width: 'auto', height: 'auto'}} src={logo} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={logo} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img style={{width: 'auto', height: 'auto'}} src={logo} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={logo} />
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default About