import React, { Component } from "react";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
import data from "./data.json";
import Modal from "./Modal";
import GioHang from "./GioHang";

export default class ShoeStore extends Component {
  state = {
    Shoes: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    cart: [
      {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        soLuong: 1,
      },
    ],
  };
  handleCart = (GH) => {
    let value = { ...GH, soLuong: 1 };
    let data = [...this.state.cart];
    const index = data.findIndex((shoes) => shoes.id === value.id);
    if (index !== -1) {
      data[index].soLuong += 1;
    } else {
      data.push(value);
    }
    //setState lai
    this.setState({
      cart: data,
    });
  };
  XoaGioHang = (spClick) => {
    console.log(spClick);
    let data = [...this.state.cart];
    let index = data.findIndex((sp) => sp.id === spClick);
    if (index !== -1) {
      data.splice(index, 1);
    }
    this.setState({
      cart: data,
    });
  };
  ThemSP = (sp, value) => {
    let data = [...this.state.cart];
    let index = data.findIndex((shoes) => shoes.id === sp);
    if (data[index].soLuong > 1 || value > 0) {
      data[index].soLuong += value;
    } else {
      window.confirm("Bạn có muốn xóa sản phẩm này không??");
      data.splice(index, 1);
    }
    this.setState({
      cart: data,
    });
  };
  ModalXemChiTiet = (shoesClick) => {
    console.log(shoesClick);
    this.setState({
      Shoes: shoesClick,
    });
  };
  render() {
    let tongsoluong = this.state.cart.reduce((value, index) => {
      return (value += index.soLuong);
    }, 0);
    return (
      <div className="container">
        <div className="text-right">
          <GioHang
            gioHang={this.state.cart}
            Xoa={this.XoaGioHang}
            ThemSP={this.ThemSP}
          />
          <span
            className="text-info"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelIdcart"
          >
            <i className="fa-solid fa-cart-arrow-down mr-1"></i>
            Giỏ hàng({tongsoluong})
          </span>
        </div>
        <h1 className="text-center my-5">Shoes Shop</h1>
        <ProductList
          mangSanPham={data}
          xemChiTiet={this.ModalXemChiTiet}
          themGioHang={this.handleCart}
        ></ProductList>
        <Modal xemchitiet={this.state.Shoes} />
      </div>
    );
  }
}
