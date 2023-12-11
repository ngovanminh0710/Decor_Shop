import React, {useState} from 'react'
import product from "../listProduct/products";
import {CartModel} from "../context/CartModel";

const Checkout = () => {
    const cartModel = new CartModel();
    const [cartItems, setCartItems] = React.useState(JSON.parse(localStorage.getItem('cart') || '[]'));
    const onClickAddToCart = (item, qty) => {
        item.qty = qty
        cartModel.addItem(item)
        setCartItems(JSON.parse(localStorage.getItem('cart')))
    }
    const removeItem = (item) => {
        const index = cartItems.indexOf(item);
        if (index > -1) {
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
        setCartItems(JSON.parse(localStorage.getItem('cart')))
    }
    const RenderProduct = ({data, index}) => {
        const [numberProduct, setNumberProduct] = useState(1)
        return <div className="card border-0 rounded-0 shadow mb-2 " style={{width: "16rem"}} key={index}>
            <img src={data.filename} className="card-img-top rounded-2 border border-5" alt="..."/>
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
                <div className='d-flex justify-content-around m-2'>
                    <button
                        onClick={() => setNumberProduct((curNumberProduct) => curNumberProduct > 1 ? curNumberProduct - 1 : numberProduct)}
                        type="button" className="btn btn-light bg-success-subtle">-
                    </button>
                    <div>{numberProduct}</div>
                    <button onClick={() => setNumberProduct((curNumberProduct) => curNumberProduct + 1)}
                            type="button"
                            className="btn btn-light bg-success-subtle">+
                    </button>
                </div>
                <div className="row align-items-center text-center g-0">
                    <div className='px-2 d-flex '>
                        <button onClick={() => onClickAddToCart(data, numberProduct)}
                                className="btn btn-dark w-100 rounded-0 me-2 text-warning">Thêm vào giỏ hàng
                        </button>
                        <a href={"/checkout"} onClick={() => onClickAddToCart(data, numberProduct)}
                           className="btn btn-dark w-100 rounded-0 text-warning">Mua Ngay</a>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div style={{marginTop: '100px'}}>
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
                                                <input type="text" name='firstname' className='form-control'/>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label> Last Name</label>
                                                <input type="text" name='firstname' className='form-control'/>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label> Phone Number</label>
                                                <input type="number" name='firstname' className='form-control'/>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label> Email Address</label>
                                                <input type="email" name='firstname' className='form-control'/>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group mb-3'>
                                                <label> Full Address</label>
                                                <textarea rows='3' className='form-control'></textarea>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label> City</label>
                                                <input type="text" name='city' className='form-control'/>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label> State</label>
                                                <input type="text" name='stage' className='form-control'/>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group mb-3'>
                                                <label> Zip code</label>
                                                <input type="text" name='zipcode' className='form-control'/>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group text-end'>

                                                <button type='button' className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">
                                                    Hoàn Thành
                                                </button>
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
                                {
                                    cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td className={"d-flex align-items-center "}>
                                                <button type='button'
                                                        className='btn btn-outline-secondary btn-sm me-2'
                                                        onClick={() => {
                                                            item.qty -= 1;
                                                            setCartItems([...cartItems])
                                                        }} disabled={item.qty <= 1}>
                                                    -
                                                </button>
                                                {item.qty}
                                                <button type='button'
                                                        className='btn btn-outline-secondary btn-sm ms-2'
                                                        onClick={() => {
                                                            item.qty += 1;
                                                            setCartItems([...cartItems])
                                                        }}>
                                                    +
                                                </button>
                                            </td>
                                            <td>{item.price * item.qty}</td>
                                            <td>
                                                <button type='button' className='btn btn-danger'
                                                        onClick={() => removeItem(item)}>Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan={3}>Tổng tiền</td>
                                    <td colSpan={2}>
                                        {
                                            cartItems.reduce((total, item) => total + item.price * item.qty, 0)
                                        } VND
                                    </td>
                                </tr>
                                </tfoot>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thông bao </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3>Đặt hàng thành công</h3>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='border d-flex justify-content-center'>
                    <h3>Sản Phẩm:</h3>
                </div>
                <div className='d-flex justify-content-center gap-4 '>
                    {
                        product.slice(0, 5).map((item, index) => <RenderProduct data={item} index={index}
                                                                                key={item.id}/>)
                    }
                </div>
            </div>

        </div>
    )
}
export default Checkout