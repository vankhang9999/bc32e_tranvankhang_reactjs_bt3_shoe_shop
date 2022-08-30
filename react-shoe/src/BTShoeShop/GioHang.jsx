import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang, Xoa, ThemSP } = this.props;
    const renderShoes = () => {
      return gioHang.map((value, index) => {
        return (
          <tr key={index}>
            <td>{value.id}</td>
            <td>
              <img
                className="img-fluid"
                style={{ height: "250px" }}
                src={value.image}
                alt={value.name}
              />
            </td>
            <td>{value.name}</td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => {
                  ThemSP(value.id, -1);
                }}
              >
                -
              </button>
              <span className="mx-2">{value.soLuong}</span>
              <button
                className="btn btn-warning"
                onClick={() => {
                  ThemSP(value.id, 1);
                }}
              >
                +
              </button>
            </td>
            <td>{value.price.toLocaleString()}</td>
            <td>{(value.price * value.soLuong).toLocaleString()}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  Xoa(value.id);
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
        );
      });
    };
    return (
      <div
        className="modal fade"
        id="modelIdcart"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-center">{renderShoes()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
