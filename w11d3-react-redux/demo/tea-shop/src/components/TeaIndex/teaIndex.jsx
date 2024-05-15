import { useSelector } from "react-redux";

import './teaIndex.css';

const TeaIndex = () => {
    const teas = useSelector(state => Object.values(state.teas));

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