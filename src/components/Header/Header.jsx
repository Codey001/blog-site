import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

function Header() {
  const authStatus = useSelector((state) => {
    console.log(state);
    return state?.status;
  });
  const navigate = useNavigate();


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
    <header className="py-3 shadow bg-gray-400 p-5">
      {/* <Container> */}
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="inline-block  px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-semibold"
                    onClick={() => navigate(item.slug)}
                  >
                  {console.log(item.name)}
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
        </nav>
      {/* </Container> */}
    </header>
  );
}

export default Header;







// import React, { useState } from 'react'
// import { HiMenu } from "react-icons/hi";



// const Header = () => {


//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }


//   return (
//     <nav className='bg-blue-500 p-4'>
//       <div className='flex items-center justify-between'>
//         {/* logo */}
//         <div className='text-white text-2xl font-bold'>LOGO</div>

//         <div className="md:hidden text-2xl text-white" onClick={toggleMenu}> 
//         <HiMenu />
//         </div>

//         <ul className='hidden md:flex space-x-4'>
//           <li><a href="#" className='text-white'>Home</a></li>
//           <li><a href="#" className='text-white'>About</a></li>
//           <li><a href="#" className='text-white'>Services</a></li>
//           <li><a href="#" className='text-white'>Contact</a></li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen ? (
//         <ul className='md:hidden flex flex-col items-center justify-center py-2'>
//           <li className='text-white py-2'><a href="#" >Home</a></li>
//           <li className='text-white py-2'><a href="#" >About</a></li>
//           <li className='text-white py-2'><a href="#" >Services</a></li>
//           <li className='text-white py-2'><a href="#" >Contact</a></li>
//         </ul>
//       ): null}
//     </nav>
//   )
// }

// export default Header