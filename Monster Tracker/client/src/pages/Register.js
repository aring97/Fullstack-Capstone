import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import "./Login.css";

const Register = () => {
    const { register } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [userName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirm) {
            toast.error("Passwords do not match");
            return;
        }
        setLoading(true);
        const profile = {
            userName,
            email
        };
        register(profile, password).then((user) => {
            setLoading(false);
            toast.info(`Welcom ${user.displayName}`);
            history.push("/");
        })
            .catch((err) => {
                setLoading(false);
                toast.error("Invalid email");
            });
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center text-light">User Register</h2>
                <div className="form-group">
                </div>
                <div className="center-div">
                <div className="form-group small-div">
                    <Input
                        onChange={(e) => setDisplayName(e.target.value)}
                        type="text"
                        className="form-control"
                        name="displayName"
                        placeholder="Display Name"
                        required="required"
                    />
                </div>
                    <div className="form-group small-div">
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required="required"
                    />
                </div>
                    <div className="form-group small-div">
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required="required"
                    />
                </div>
                    <div className="form-group small-div">
                    <Input
                        onChange={(e) => setConfirm(e.target.value)}
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required="required"
                    />
                </div>
                    <div className="form-group small-div">
                    <Button type="submit" block color="danger" disabled={loading}>
                            Sign Up
          </Button>
                    </div>
                </div>
                <div className="text-center small text-light">
                    Already have an account?
          <div>
                        <Link to="/login" className="text-light">Log in here</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;