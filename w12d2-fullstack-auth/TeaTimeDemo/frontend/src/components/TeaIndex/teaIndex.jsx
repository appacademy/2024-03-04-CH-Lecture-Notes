import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllTeas } from "../../store/teaReducer";

import './teaIndex.css';

const TeaIndex = () => {
    const teas = useSelector(state => Object.values(state.teas));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTeas());
    }, [dispatch]);

    return (
        <div className="tea-index">
            <h2>Hi from the TeaIndex!</h2>
            {teas.map(tea => (
                <div className="tea-index-item" key={tea.id}>
                    <ul>
                        <li>
                            <h4>Flavor: {tea.flavor}</h4>
                        </li>
                        <li>
                            <p>Price: {tea.price}</p>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
};

export default TeaIndex;