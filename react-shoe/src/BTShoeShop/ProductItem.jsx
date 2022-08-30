import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { productShoes, xemChiTiet, themGioHangitem } = this.props;
    return (
      <div className="col-4 mb-4">
        <div className="card">
          <img
            className="card-img-top "
            src={productShoes.image}
            alt={productShoes.name}
          />
          <div className="card-body">
            <h5 className="card-title">{productShoes.name}</h5>
            <p className="card-text text-danger font-weight-bold">
              {productShoes.price}$
            </p>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() => {
                  xemChiTiet(productShoes);
                }}
              >
                Xem Chi Tiết
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  themGioHangitem(productShoes);
                }}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
