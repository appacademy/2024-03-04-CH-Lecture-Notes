import { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);

    const validate = () => {
        let validationErrors = [];

        if (firstName.length === 0) {
            validationErrors.push("First Name cannot be blank.");
        }

        if (password.length < 6) {
            validationErrors.push("Password must be at least 6 characters.");
        }

        return validationErrors;
    }

    const handleChange = field => {
        return (e) => {
            switch (field) {
                case "firstName":
                    setFirstName(e.target.value);
                    break;
                case "email":
                    setEmail(e.target.value);
                    break;
                case "password":
                    setPassword(e.target.value);
                    break;
                default:
                    break;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validate();

        if (errors.length) {
            setErrorMessages(errors);
        } else {
            let newUser = {
                firstName,
                email,
                password
            };
            console.log(newUser);
            setErrorMessages([]);
        }

    }

    const renderErrors = () => {
        if (!errorMessages.length) {
            return null;
        } else {
            return (
                <ul>
                    {errorMessages.map(error => <li key={error}>{error}</li>)}
                </ul>
            )
        }
    }

    return (
        <>
            {renderErrors()}
            <form onSubmit={handleSubmit} className="form">
                <h1>Sign Up</h1>

                <input type="text" placeholder="First Name" value={firstName} onChange={handleChange("firstName")} />
                <br />

                <input type="text" placeholder="Email" value={email} onChange={handleChange("email")} />
                <br />

                <input type="password" placeholder="Password" value={password} onChange={handleChange("password")} />
                <br />

                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;