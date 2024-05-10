import React, { useState } from "react";
import GoogleLogin from "../GoogleOauth";
import Button from "../../../component/atoms/Button";
import { useLogin } from "../../../hooks/useAuth";
import { Link } from "react-router-dom/cjs/react-router-dom";
import AuthLayout from "..";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, action } = useLogin();

  return (
    <AuthLayout>
      <div className="flex flex-col gap-5">
        <h1 className="text-white">Login</h1>
        <input
          className="px-4 py-2 rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(fejs) => setEmail(fejs.target.value)}
        />
        <input
          className="px-4 py-2 rounded-lg"
          placeholder="password"
          type="Password"
          value={password}
          onChange={(fejs) => setPassword(fejs.target.value)}
        />
        <Button
          className="py-2"
          variant="primary"
          loading={loading}
          onClick={() => {
            action(email, password);
          }}
        >
          Sign In
        </Button>
        <hr />
        <GoogleLogin buttonText="Sign in with Google" />
        <span className="text-center text-white">
          or not have account?{" "}
          <Link to="/register" className="text-blue-500">
            Register Now
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
}
