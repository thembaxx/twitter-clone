import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Outlet, Link } from "react-router-dom";
import NavItem from "./NavItem";

import { navItems } from "./helpers";

function Nav() {
  const [items, setItems] = useState(navItems);

  function handleClick(text) {
    const _items = [...items];
    const match = _items.find((item) => item.text === text);
    if (match) {
      _items.forEach((item) => {
        item.active = item.text === text;
      });

      setItems(_items);
    }
  }

  function generateNavItem({ path, Icon, text, active, badge }, index) {
    if (text === "More") {
      return (
        <NavItem
          key={index}
          Icon={Icon}
          text={text}
          active={active}
          badge={badge}
        />
      );
    } else {
      return (
        <Link
          key={index}
          className={styles.link}
          to={path}
          onClick={() => handleClick(text)}
          draggable="false"
        >
          <NavItem Icon={Icon} text={text} active={active} badge={badge} />
        </Link>
      );
    }
  }

  return (
    <div className={styles.nav}>
      {items.map((navItem, index) => generateNavItem(navItem, index))}
      <Outlet />
    </div>
  );
}

export default Nav;
