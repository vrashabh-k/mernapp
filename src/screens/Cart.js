import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import trash from './trash.svg';

export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
            <div className="container text-center text-white mt-5">
                <h3>Your Cart is Empty!</h3>
            </div>
        );
    }

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });

        console.log("Order Response", response);
        if (response.status === 200) {
            dispatch({ type: "DROP" });
        }
    };

    let totalPrice = data.reduce((total, food) => total + food.price, 0);

    return (
        <div className="container mt-5">
            <h2 className="text-white mb-4">Your Cart</h2>
            <div className="table-responsive">
            <table className="table table-hover table-bordered text-white">
    <thead className="text-success fs-4 bg-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Option</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody className="bg-dark">
        {data.map((food, index) => (
            <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                    <button
                        type="button"
                        className="btn p-0"
                        onClick={() => { dispatch({ type: "REMOVE", index }) }}
                    >
                        <img
                            src={trash}
                            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            alt="delete"
                        />
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>

            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <h3 className="fs-3 text-white">Total Price: ₹{totalPrice}/-</h3>
                <button
                    className="btn btn-success btn-lg"
                    onClick={handleCheckOut}
                    style={{ fontSize: '1.2rem', padding: '10px 20px' }}
                >
                    Check Out
                </button>
            </div>
        </div>
    );
}
