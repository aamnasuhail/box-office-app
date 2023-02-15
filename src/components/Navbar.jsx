import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "Starred" },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {LINKS.map((item) => (
          <li>
            <Link key={item.to} to={item.to}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
