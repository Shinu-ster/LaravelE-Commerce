import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    let item = { name, password, email };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      //headers describe what type of datas are being send
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("userInfo", JSON.stringify(result));
    navigate("/add");
  };

  return (
    <>
      <NavBar />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <button className="btn btn-primary" onClick={signUp}>
          Sign up
        </button>
      </div>
    </>
  );
}
