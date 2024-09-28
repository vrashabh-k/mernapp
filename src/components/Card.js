import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmRAwbyTnYrMiIDbeTxE8njVeZHl6Wio2sFX1zIwM0m_xvgtu7fbIUzDQuhUtm_aziBY&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pancake</h5>
          <p className="card-text">Its a food card</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              <option value="">Quantity</option>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success">
              <option value={""}>Size</option>
              <option value={"half"}>Half</option>
              <option value={"full"}>Full</option>
            </select>
          </div>
          <div className="d-inline h-100 fs-5">Total price</div>
        </div>
      </div>
    </div>
  );
}
