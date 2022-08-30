import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    let { mangSanPham, xemChiTiet, themGioHang } = this.props;
    return (
      <div className="row">
        {mangSanPham.map((shoes, index) => {
          return (
            <ProductItem
              themGioHangitem={themGioHang}
              xemChiTiet={xemChiTiet}
              productShoes={shoes}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
