import React, { useCallback, useRef, useState } from "react";

import styles from "./slidebar.module.scss";
import { Link } from "react-router-dom";
const Category = [
  {
    id: 1,
    name: "Women's Fashion",
    sub: [
      {
        id: 1,
        name: "Clothing",
      },
      {
        id: 2,
        name: "Shoes",
      },
      {
        id: 3,
        name: "Bags",
      },
      {
        id: 4,
        name: "Watches",
      },
    ],
  },
  {
    id: 2,
    name: "Men's Fashion",
    sub: [
      {
        id: 1,
        name: "Clothing",
      },
      {
        id: 2,
        name: "Shoes",
      },
      {
        id: 3,
        name: "Bags",
      },
      {
        id: 4,
        name: "Watches",
      },
    ],
  },
  {
    id: 3,
    name: "Electronics",
  },
  {
    id: 4,
    name: "Home & Lifestyle",
  },
  {
    id: 5,
    name: "Medicine",
  },
];
function SlideBar(props) {
  const [isActive, setActive] = useState([
    {
      drop: false,
    },
  ]);
  const dropdown = useRef();
  const showMenu = useCallback(
    (id) => {
      return () => {
        const ul = document.getElementById(id);
        dropdown.current = ul;
        dropdown.current.classList.toggle(styles.active_dropdown);
        setActive({
          ...isActive,
          id: id,
          drop: (isActive.drop = !isActive.drop),
        });
      };
    },
    [isActive]
  );
  return (
    <section className={styles.container}>
      <div className={styles.slide_bar}>
        <ul>
          {Category.map((item) => {
            if (item.sub && item.sub.length > 0) {
              return (
                <li key={item.id}>
                  <Link>{item.name}</Link>
                  <i onClick={showMenu(item.id)}>
                    {isActive.id === item.id && isActive.drop === true ? (
                      <img
                        src={require("assets/images/icon/slidebar/DropDown_Actived.png")}
                        alt="Dropdown_Active"
                      />
                    ) : (
                      <img
                        src={require("assets/images/icon/slidebar/DropDown.png")}
                        alt="Dropdown"
                      />
                    )}
                  </i>
                  <ul id={item.id} ref={dropdown} className={styles.dropdown}>
                    {item.sub.map((item) => {
                      return (
                        <li key={item.id}>
                          <Link>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
              //    return <li key={index}>{item.name}<i><img src={require('assets/images/icon/slidebar/DropDown.png')} alt="Dropdown" /></i></li>
            }
            return (
              <li key={item.id}>
                <Link>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SlideBar;
