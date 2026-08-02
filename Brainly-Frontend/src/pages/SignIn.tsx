import { useRef } from "react";
import Button from "../components/ui/button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const UsernameRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()

  async function signIn() {
    const username = UsernameRef.current?.value;
    const password = PasswordRef.current?.value;
    console.log(UsernameRef.current);
    console.log(username, password);
    const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
    });
    console.log(response);
    const jwt = response.data.token;
    localStorage.setItem('token',jwt)
    navigate("/Dashboard")
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center bg-gray-200 items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-8">
          <div>
            <Input placeholder="Username" />
          </div>
          <div>
            <Input placeholder="Password" />
          </div>
          <div className="flex justify-center pt-4">
            <Button text="Submit" variant="primary" onClick={signIn} />
          </div>
        </div>
      </div>
    </>
  );
}
