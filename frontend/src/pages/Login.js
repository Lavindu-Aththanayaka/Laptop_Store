import React, { useState } from "react";
import LoginIcon from "../New folder/lock_9164513.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPasswors] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("data", data);
  return (
    <section id="login">
      <div className="mx-auto container pt-12">
        <div className="bg-custom-dark-or p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={LoginIcon} alt="login icons" />
          </div>

          <form className="pt-6 flex flex-col gap-2 " onSubmit={handleSubmit}>
            <div className="grid">
              <label className="text-custom-dark-orange">Email : </label>
              <div className="bg-custom-dark-ora p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-custom-dark-orange">Password : </label>
              <div className="bg-custom-dark-ora p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPasswors((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-orange-700  text-orange-500"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-custom-dark-orange hover:bg-orange-700 text-black px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>

          <p className="my-5 text-custom-dark-orange">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className="  text-orange-500 hover:text-orange-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
