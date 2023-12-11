import React from 'react'
import {CartModel} from "../context/CartModel";

const Checkout = () => {

    const cartModel = new CartModel();
    const cartItems = cartModel.getItems()
    console.log(cartItems)
    const removeItem = (item) => {
        cartModel.removeItem(item);
    }
    return (
        <div style={{ marginTop: '100px' }}>
            <div className='py-2 bg-warning'>
                <div className='container'>
                    <h6>Home/ Cart</h6>
                </div>
            </div>

            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Thông tin địa chỉ người nhận hàng</h4>
                                </div>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label> First Name</label>
                                                <input type="text" name='firstname' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label> Last Name</label>
                                                <input type="text" name='firstname' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label> Phone Number</label>
                                                <input type="number" name='firstname' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label> Email Address</label>
                                                <input type="email" name='firstname' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group mb-3'>
                                                <label> Full Adress</label>
                                                <textarea rows='3' className='form-control'></textarea>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label> City</label>
                                                <input type="text" name='city' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label> State</label>
                                                <input type="text" name='stage' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label> Zip code</label>
                                                <input type="text" name='zipcode' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group text-end'>
                                               
                                                <button type='button' className='btn btn-primary'>Hoàn Thành</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-md-5'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Tổng tiền</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {/*{*/}
                                {/*    cartItems.map((item, index) => (*/}
                                {/*        <tr key={index}>*/}
                                {/*            <td>{item.title}</td>*/}
                                {/*            <td>{item.price}</td>*/}
                                {/*            <td>{item.qty}</td>*/}
                                {/*            <td>{item.price * item.qty}</td>*/}
                                {/*            <td>*/}
                                {/*                <button type='button' className='btn btn-danger'*/}
                                {/*                        onClick={removeItem(item)}>Xóa*/}
                                {/*                </button>*/}
                                {/*            </td>*/}
                                {/*        </tr>*/}
                                {/*    ))*/}
                                {/*}*/}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Checkout