﻿import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import "./Login.css"

const Login = () => {
    const { logIn } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        logIn(email, password)
            .then((user) => {
                setLoading(false);
                toast.info(`Welcome back ${user.userName}`);
                history.push("/");
            })
            .catch((err) => {
                setLoading(false);
                toast.error("Invalid email or password");
            });
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center text-light">User Login</h2>
                <div className="center-div">
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
                    <Button type="submit" block color="danger" disabled={loading}>
                        Sign in
          </Button>
                    </div>
    </div>
                <div className="text-center small text-light">
                    Don't have an account?
          <div>
                        <Link to="/register" className="text-info">Sign up here</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;