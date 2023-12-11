import React, { useState } from 'react'
import product from '../listProduct/products'
import { CartModel } from "../context/CartModel";

const Shop = () => {
  const [searchname, setSearchName] = useState("");
  const [productList, setproductList] = useState(product)
  const search = (e, searchnames) => {
    e.preventDefault()
    if (searchname) {
      const productLists = product.filter(item => {
        if (item.title.toLowerCase().search(searchnames.toLowerCase()) == -1) {
          return false
        }
        return true
      })
      return setproductList(productLists)
    }
    return setproductList(product)
  };
  const cartModel = new CartModel();

  const onClickAddToCart = (item, qty) => {
    item.qty = qty
    cartModel.addItem(item)
  }


  const ProductItem = ({ data, index }) => {
    const [numberProduct, setNumberProduct] = useState(1);
    return (
      <div className="card border-0 rounded-0 shadow" style={{ width: "14rem" }}>

        <img src={data.filename} className="card-img-top rounded-2 border border-5" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{data.title}</h4>

        </div>
        <div className="d-flex justify-content-around">
          <p className='text-decoration-line-through' >Giá: {data.price}₫ </p>
          <span className="text-white rounded-circle d-flex bg-danger p-2 "><b>-{data.discount}%</b></span>
        </div>
        <div className=' d-flex justify-content-around'>
          <p>Giảm giá còn:</p>
          {((data.price) - (data.price * (data.discount / 100))).toFixed(0)}₫

        </div>
        <div className='d-flex justify-content-around m-2'>
          <button onClick={() => setNumberProduct((curNumberProduct) => curNumberProduct > 1 ? curNumberProduct - 1 : numberProduct)} type="button" className="btn btn-light bg-success-subtle">-</button>
          <div>{numberProduct}</div>
          <button onClick={() => setNumberProduct((curNumberProduct) => curNumberProduct + 1)} type="button" className="btn btn-light bg-success-subtle">+</button>
        </div>
        <div className="row align-items-center text-center g-0">
          <div className='px-2 d-flex '>
            <button onClick={() => onClickAddToCart(data, numberProduct)} className="btn btn-dark w-100 rounded-0 me-2 text-warning">Thêm vào giỏ hàng</button>
            <a href={"/checkout"} onClick={() => onClickAddToCart(data, numberProduct)} className="btn btn-dark w-100 rounded-0 text-warning">Mua Ngay</a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>

      <div className='m-2'>
        <img src="/images/img/banner_sale.jpg" style={{ width: "100%", marginTop: "90px" }} />
      </div>
      <div className='m-3'>
      </div>
      <div className='container mb-3' style={{ marginTop: "10px" }}>
        <div className=' d-flex  justify-content-center w-100'>
          <div className="input-group mb-3" style={{ width: "20rem" }}>
            <input type="text" className="form-control" placeholder='Tìm kiếm sản phẩm'
              onChange={e => setSearchName(e.target.value)} />
            <button className="btn btn-outline-secondary bg-success-subtle"
              onClick={(e) => search(e, searchname)}>Tìm kiếm
            </button>
          </div>
        </div>
        <div className='d-flex mx-auto gap-5 flex-wrap justify-content-center'>
          {productList.map((item, index) => <ProductItem data={item} index={index} key={index} />)}
        </div>
      </div>
    </div>
  )
}
export default Shop