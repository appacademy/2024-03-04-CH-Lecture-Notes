// TODO: write a clock component
import { useState, useEffect } from "react";

import React from 'react';

class ClassTime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeData: {}
        }
    }

    componentDidMount() {
        console.log("Time component just mounted.");

        const getDate = async () => {
            console.log("firing off async fetch request");
            try {
                let res = await fetch("http://worldtimeapi.org/api/ip");
                if (res.ok) {
                    let data = await res.json();
                    this.setState({ timeData: data });
                } else {
                    throw res;
                }
            } catch {
                console.error("Something went wrong!");
            }
        }

        this.timeRequest = setInterval(getDate, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("The Time Component updated, likely a state change.");

        if (prevState.timeData.day_of_week !== this.state.timeData.day_of_week) {
            console.log("The day changed!");
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeRequest);
        console.log("The Time Component has unmounted.");
    }

    render() {
        return (
            <p>It is currently: {this.state.timeData.datetime}</p>
        )
    }
}

export default ClassTime;

// function FunctionalTime(props) {
//     const [timeData, setTimeData] = useState({});

//     useEffect(() => {
//         const getTime = async () => {
//             console.log("firing off async fetch request");

//             try {
//                 let res = await fetch('http://worldtimeapi.org/api/ip');
//                 if (res.ok) {
//                     let data = await res.json();
//                     setTimeData(data);
//                 } else {
//                     throw res;
//                 }
//             } catch {
//                 console.error("Something went wrong!");
//             }
//         }

//         const timeRequest = setInterval(getTime, 1000);

//         return () => {
//             clearInterval(timeRequest);
//         }
//     }, [])

//     return (
//         <p>It is currently: {timeData.datetime}</p>
//     )
// }

// export default FunctionalTime;