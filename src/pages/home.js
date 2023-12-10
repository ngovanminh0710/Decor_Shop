import React from 'react'
import product from '../listProduct/products'

const Home = () => {
  const renderProduct = (data, index) => {
    return <div className="card border-0 rounded-0 shadow mb-2 " style={{ width: "16rem" }} key={index}  >
      <img src={data.filename} className="card-img-top rounded-2 border border-5" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>

      </div>
      <div className="d-flex justify-content-around m-2">
        <p>{data.price}₫ </p>
        <span className="text-white rounded-circle d-flex bg-danger p-2"><b>-{data.discount}%</b></span>
      </div>
      <div className="row align-items-center text-center g-0">
        <div className='col-4'>
          {(data.price - (data.price * (data.discount / 100))).toFixed(0)}₫
        </div>
        <div className="col-8">
          <a href="/shop" className="btn btn-dark w-100 rounded-0 text-warning">Mua Ngay</a>
        </div>
      </div>
    </div>
  }
  return (
    <div >
      <header >

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/img/decor_img1.jpg" className="d-block w-100 h-80" alt="..." />
              <div className="carousel-caption d-none d-md-block text-info bg-dark">
                <h5>Mbee Decor - đồ Decor đẹp xịn giá sinh viên</h5>
                <p>Lịch sự - đơn giản - sang trọng</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/img/decor_img.jpg" className="d-block w-100 " alt="..." />
              <div className="carousel-caption d-none d-md-block text-info bg-dark ">
                <h5>Mbee Decor - đồ Decor đẹp xịn giá sinh viên</h5>
                <p>Lịch sự - đơn giản - sang trọng</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/img/decor_img3.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block text-info bg-dark">
                <h5>Mbee Decor - đồ Decor đẹp xịn giá sinh viên</h5>
                <p>Lịch sự - đơn giản - sang trọng</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      <main className='container mt-2 mb-4 '>
        <div className='row body-1 '>
          <div className='bg-info-subtle col-sm-12 col-md-8 '>
            <h2 className='bg-info text-center mt-2 m-4 border border-warning p-2 fs-5 text '>
              Danh sách sản phẩm
            </h2>
            <div className='row gy-4 mb-2'>
              <div className='col-sm-6 col-md-4 m'>
                <div className="card">
                  <img src="/images/img/giaydantuong.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Giấy dán tường</h5>
                    <p className="card-text">Giấy dán tường siêu xinh, siêu xịn, giá cực rẻ các bạn có thể tham khảo thêm nhiều mẫu...</p>
                    <a href="/shop" className="btn btn-primary">Xem thêm...</a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className="card">
                  <img src="/images/img/dogom_decor.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Đồ Gốm Trưng Bày</h5>
                    <p className="card-text">Một số sản phẩm đồ gốm với hoa văn thiết kế độc đáo để trưng bày cực xịn...</p>
                    <a href="/shop" className="btn btn-primary">Xem thêm...</a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className="card">
                  <img src="/images/img/den_decor.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Đèn Trang Trí</h5>
                    <p className="card-text">Tổng hợp các loại đèn trang trí phòng độc đáo, cực đẹp mời các bạn xem thêm sản phẩm...</p>
                    <a href="/shop" className="btn btn-primary">Xem Thêm...</a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className="card">
                  <img src="/images/img/mirror_decor.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Gương</h5>
                    <p className="card-text">Một số mẫu gương với thiết kế độc đáo, phù hợp để làm đẹp cho căn phòng của bạn...</p>
                    <a href="/shop" className="btn btn-primary">Xem Thêm...</a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className="card">
                  <img src="/images/img/tudo_decor.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Kệ - Tủ Đồ</h5>
                    <p className="card-text">Một số mẫu kệ tủ đồ trang trí xinh xắn, đủ các thể loại từ cổ điển đến hiện đại...</p>
                    <a href="/shop" className="btn btn-primary">Xem Thêm...</a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className="card">
                  <img src="/images/img/decor_img5.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Sản Phẩm Khác</h5>
                    <p className="card-text">Bao gồm các sản phẩm chi tiết nhỏ trang trí phòng mà chúng ta không thể bỏ qua</p>
                    <a href="/shop" className="btn btn-primary">Xem Thêm...</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='bg-primary-subtle col-12 col-md-4'>
            <div>
              <h2 className='bg-warning-subtle text-center mt-2 border border-warning p-2 fs-5 text'>
                Bán chạy gần đây
              </h2>
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
              {
                product.slice(0, 2).map((item, index) => renderProduct(item, index))
              }
            </div>


          </div>
        </div>
      </main>

    </div>
  )
}

export default Home