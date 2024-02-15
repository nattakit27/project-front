import axios from "axios";
import { useState } from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    idcard: "",
    phone: "",
    email: "",
    birthdate: "",
    age: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      if (input.password !== input.confirmPassword) {
        return alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      }
      const rs = await axios.post("http://localhost:8889/auth/register", input);
      console.log(rs);
      if (rs.status === 200) {
        alert("ลงทะเบียนสำเร็จ");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const hdlReset = () => {
    setInput({
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      idcard: "",
      phone: "",
      email: "",
      birthdate: "",
      age: "",
    });
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
        <div className="block rounded-lg bg-white shadow-md dark:bg-neutral-700 text-center mx-auto p-10">
          <h5 className="mb-6 text-3xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
            Register
          </h5>
          <form
            className="grid grid-cols-2 gap-4"
            onSubmit={hdlSubmit}
            onReset={hdlReset}
          >
            <div className="form-control">
              <label>
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full h-10"
                name="username"
                value={input.username}
                onChange={hdlChange}
              />
            </div>

            <div className="form-control">
              <label>
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full h-10"
                name="password"
                value={input.password}
                onChange={hdlChange}
              />
            </div>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Firstname</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs h-10"
                name="firstname"
                value={input.firstname}
                onChange={hdlChange}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Lastname</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs h-10"
                name="lastname"
                value={input.lastname}
                onChange={hdlChange}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">IDcard</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs h-10"
                name="idcard"
                value={input.idcard}
                onChange={hdlChange}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs h-10"
                name="phone"
                value={input.phone}
                onChange={hdlChange}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">E-mail</span>
              </div>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs h-10"
                name="email"
                value={input.email}
                onChange={hdlChange}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Birthdate</span>
              </div>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs h-10"
                name="birthdate"
                value={input.birthdate}
                onChange={hdlChange}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Age</span>
              </div>
              <input
                type="number"
                className="input input-bordered w-40 max-w-xs h-10"
                name="age"
                value={input.age}
                onChange={(e) => {
                  const newAge = parseInt(e.target.value, 10);
                  if (!isNaN(newAge) && newAge >= 0) {
                    // Update the state only if the new age is a valid non-negative number
                    hdlChange({
                      target: {
                        name: e.target.name,
                        value: newAge.toString(),
                      },
                    });
                  }
                }}
              />
            </label>

            <div className="flex flex-col gap-5 mt-4">
              <button
                type="submit"
                className="inline-block rounded-full bg-purple-500 text-white shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-purple-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-purple-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-purple-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] h-8 px-8 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
              >
                ตกลง
              </button>
              <button
                type="reset"
                className="inline-block rounded-full bg-white border border-purple-500 text-purple-500 hover:text-white hover:bg-purple-500 hover:border-purple-600 h-8 px-8 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
              >
                ยกเลิก
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
