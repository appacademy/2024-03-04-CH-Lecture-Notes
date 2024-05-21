import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTea } from "../../store/teaReducer";

import './teaForm.css';

const TeaForm = () => {
    const dispatch = useDispatch();

    const [flavor, setFlavor] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = e => {
        // debugger
        e.preventDefault();

        // let id = Math.floor(Math.random()*1000);

        const tea = {
            // id: id,
            flavor: flavor,
            price: price
        };

        // dispatch(receiveTea(tea));
        dispatch(createTea(tea));

        setFlavor("");
        setPrice("");
    }

    return (
        <div className="tea-form">
            <h2>Hi from the TeaForm</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="flavor">Flavor:</label>
                <input id="flavor" value={flavor} onChange={e => setFlavor(e.target.value)} />

                <label htmlFor="price">Price:</label>
                <input id="price" value={price} onChange={e => setPrice(e.target.value)} />

                <input type="submit" value="Add Tea" />
            </form>
        </div>
    )
};

export default TeaForm;