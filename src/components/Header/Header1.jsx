import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Header1 = () => {
  const authStatus = useSelector((state) => {
    console.log(state);
    return state?.status;
  });
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      //slug -> path it goes to
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "User Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <nav className="bg-gray-400 p-4">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="text-white text-2xl font-bold">
          {" "}
          <Link to="/">
            <Logo width="70px" />
          </Link>
        </div>

        <div className="md:hidden text-2xl text-white" onClick={toggleMenu}>
          <HiMenu />
        </div>

        <ul className="hidden md:flex">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  className="inline-block  px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-semibold"
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen ? (
        <ul
          className="md:hidden flex flex-col items-center justify-center py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  className="inline-block  px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-semibold"
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      ) : null}
    </nav>
  );
};

export default Header1;
