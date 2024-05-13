import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StudentIndex() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const data = await fetch("../data.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (data.ok) {
                const parsedData = await data.json();
                setStudents(parsedData);
            } else {
                alert("Something went wrong!");
            }
        };
        fetchStudents();
    }, [])

    return (
        <>
            {students.map((student, idx) => {
                return <Link key={idx} to={`students/${student.name}`}>{student.name}</Link>
            })}
        </>
    )
}

export default StudentIndex;