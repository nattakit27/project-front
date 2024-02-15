import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const guestNav = [
  { to: "/", text: "Login" },
  { to: "/register", text: "Register" },
];

const userNav = [
  { to: "/", text: "Home" },
  { to: "/new", text: "New Todo" },
];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : guestNav;

  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 h-1">
      <div className="relative flex w-full items-center justify-between bg-white py-0 text-neutral-600 shadow-md hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start">
        <Link to="/">
          <img
            className="h-36 ml-3"
            src={
              "https://media.discordapp.net/attachments/1112599338401673279/1207268774164701224/YINDEE-Logo.png?ex=65df07a9&is=65cc92a9&hm=143c9d96b23c0927319d045d8daa2e4736d2c4c7cc6320df6049346a216b7993&=&format=webp&quality=lossless&width=494&height=494"
            }
            alt="Logo"
          />
        </Link>

        <div className="flex-none ml-auto">
          <ul className="menu-horizontal px-5">
            {finalNav.map((el, index) => (
              <li key={el.to}>
                {el.text === "Login" || el.text === "Register" ? (
                  <Link
                    to={el.to}
                    className={`btn ${
                      el.text === "Login"
                        ? "bg-rose-500 text-white"
                        : "bg-purple-600 text-white"
                    } text-sm rounded-full transition duration-150 ease-in-out focus:outline-none focus:border-${
                      el.text === "Login" ? "rose-700" : "purple-700"
                    } focus:ring focus:border-${
                      el.text === "Login" ? "rose-700" : "purple-700"
                    }`}
                    style={{
                      width: "120px", // Set your desired width
                      height: "20px", // Adjusted height
                      marginRight: index < finalNav.length - 1 ? "15px" : "0",
                    }}
                  >
                    {el.text}
                  </Link>
                ) : (
                  <Link to={el.to}>{el.text}</Link>
                )}
              </li>
            ))}
            {user?.id && (
              <li>
                <Link to="#" onClick={hdlLogout} className="btn btn-secondary">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
