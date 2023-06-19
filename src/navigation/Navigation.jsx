// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar flex gap-5 ">
//       <div className="navbar-logo">Logo</div>
//       <ul className={`flex flex-col list-none sm:absolute top-full w-full bg-[#f5f5f5] overflow-hidden  left-0  ${isMenuOpen ? "active " : ""}`}>
//         <li className="navbar-item">
//           <a href="#home">Home</a>
//         </li>
//         <li className="navbar-item">
//           <a href="#about">About</a>
//         </li>
//         <li className="navbar-item">
//           <a href="#portfolio">Portfolio</a>
//         </li>
//         <li className="navbar-item">
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       <div className="navbar-toggle cursor-pointer" onClick={handleMenuToggle}>
//         {/* <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} /> */}
//         {isMenuOpen ? "" : <FaBars></FaBars>}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
