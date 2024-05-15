import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSessionContext } from '../context/sessionContext';

const PostIndex = () => {
    console.log("Rendering...");

    const { familyName } = useParams();

    const [data, setData] = useState([]);

    const title = familyName.slice(0, familyName.length - 1);

    // const {loggedIn} = useContext(SessionContext);
    const {loggedIn} = useSessionContext();

    useEffect(() => {
        console.log("fetching");
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const fetchedData = await res.json();
            // console.log(fetchedData);
            setData(fetchedData);

        }
        fetchData();
    }, [familyName])

    if (!loggedIn) return <h1>You need to login!</h1>

    return (
        <>
            {/* <SessionContext.Consumer>
                {(value) => <h1>{value.fruit} is my favorite fruit</h1>}
            </SessionContext.Consumer> */}
            <h1>hello from post index</h1>
            <p>Fun {title[0].toUpperCase() + title.slice(1, title.length)} Posts</p>
            {data.map((ele, i) => (
                <div key={i}>
                    <p>{ele.title}</p>
                    <p>{ele.body}</p>
                </div>
            ))}
        </>
    )
};

export default PostIndex;