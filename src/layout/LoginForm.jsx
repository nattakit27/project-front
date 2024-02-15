import axios from "axios";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post("http://localhost:8889/auth/login", input);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token);
      const rs1 = await axios.get("http://localhost:8889/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      console.log(rs1.data);
      setUser(rs1.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://media.discordapp.net/attachments/1112599338401673279/1207750929026261132/40c3ef24bdda600b.png?ex=65e0c8b4&is=65ce53b4&hm=7d9280ad7550b8cd45a7e9153d141d8325fbe0496f72f4e29d8a01cc8a27b327&=&format=webp&quality=lossless&width=371&height=262")',
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="block rounded-lg bg-white shadow-md dark:bg-neutral-700 text-center mx-auto p-20">
          <div className="flex items-center justify-center mb-2">
            <a href="#!">
              <img
                className="outline rounded-full w-32 h-32 object-cover mb-5"
                src="https://media.discordapp.net/attachments/1112599338401673279/1207268774445715456/YINDEE-Home.png?ex=65df07a9&is=65cc92a9&hm=d1293eff45d57f812375d3298e2b2f5bd06d2ba40a6197656987156766a20612&=&format=webp&quality=lossless&width=494&height=494"
                alt=""
              />
            </a>
          </div>

          <h5 className="mb-5 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
            Yindee Dental Clinic
          </h5>
          <form className="flex flex-col gap-3" onSubmit={hdlSubmit}>
            <label className="form-control w-full max-w-xs ">
              <div className="label">
                <span className="label-text">Username</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs h-10"
                name="username"
                value={input.username}
                onChange={hdlChange}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs h-10"
                name="password"
                value={input.password}
                onChange={hdlChange}
              />
            </label>

            <div className="flex mt-6">
              <button
                type="submit"
                className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] inline-block w-full rounded-full bg-rose-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Login
              </button>
            </div>

            <Link
              to="/register" // Update the path to match your Route
              className="text-red-600 font-bold transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-red-700 dark:text-red-400 dark:hover:text-red-500 dark:focus:text-red-500 dark:active:text-red-600"
            >
              Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
