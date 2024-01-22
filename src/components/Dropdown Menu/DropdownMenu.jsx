import React, { useState, useEffect, useRef } from "react";
import user from "./img/user.png";
import edit from "./img/edit.png";
import inbox from "./img/envelope.png";
import settings from "./img/settings.png";
import help from "./img/question.png";
import logout from "./img/log-out.png";
import "./DropdownMenu.css";

const items = [
  { img: user, text: "My Profile" },
  { img: edit, text: "Edit Profile" },
  { img: inbox, text: "Inbox" },
  { img: settings, text: "Settings" },
  { img: help, text: "Help" },
  { img: logout, text: "Logout" },
];

function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="menu-container" ref={menuRef}>
      <h3>Dropdown Menu</h3>
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={user} alt="User" />
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3>
          Vibhour
          <br />
          <span>Frontend developer</span>
        </h3>
        <ul>
          {items.map((item, index) => (
            <DropdownItem key={index} img={item.img} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function DropdownItem({ img, text }) {
  return (
    <li className="dropdownItem">
      <img src={img} alt={text} />
      <a> {text} </a>
    </li>
  );
}

export default DropdownMenu;
