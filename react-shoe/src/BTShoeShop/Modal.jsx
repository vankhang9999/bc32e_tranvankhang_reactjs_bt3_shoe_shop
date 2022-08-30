import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { xemchitiet } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
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
                <div className="card">
                  <img
                    className="card-img-top"
                    src={xemchitiet.image}
                    alt={xemchitiet.name}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{xemchitiet.name}</h4>
                    <p className="card-text">{xemchitiet.description}</p>
                  </div>
                </div>
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
      </div>
    );
  }
}
