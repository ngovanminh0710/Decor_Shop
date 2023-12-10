import React from "react";


const CartItem = ({ data }) => {
    return (
        <div>
            <div>
                <div className="d-flex m-2">
                    <div style={{ width: '200px' }}>
                        <img src={data.filename} className="card-img-top rounded-2 border border-5" alt="..." />
                    </div>
                    <div className="m-2">

                        <div className="card-body">
                            <h4 className="card-title">{data.title}</h4>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <p className='text-decoration-line-through' > Giá gốc: {data.price}₫ </p>
                            <span className="text-white rounded-circle d-flex bg-danger p-2 "><b>-{data.discount}%</b></span>
                        </div>
                        <div className=' d-flex justify-content-start'>
                            <p>Giảm giá còn:</p>
                            {((data.price) - (data.price * (data.discount / 100))).toFixed(0)}₫

                        </div>
                        <div>
                            <span>Số lượng sản phẩm: {data.numberProduct}</span>
                        </div>
                        <div className="mt-2">
                            <span>Tiền thanh toán: {((data.numberProduct) * ((data.price) - (data.price * (data.discount / 100))).toFixed(0))}₫</span>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <button><a href="/checkout" style={{textDecoration: "none", color:"black"}}>Thanh Toán Ngay</a></button>
            </div>
        </div>
    );
};

export default CartItem;