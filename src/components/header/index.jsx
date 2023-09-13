import React, { useRef } from "react";
import { Dropdown, Space, Input, Badge } from "antd";

import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const { Search } = Input;
// Item of Language Select
const items = [
  {
    label: "English",
    key: "0",
  },
  {
    label: "Tiếng Việt",
    key: "1",
  },
  {
    type: "divider",
  },
];
// Function Search
const onSearch = (value, _e, info) => console.log(info?.source, value);

function Header(props) {
  const userRef = useRef();
  const showUser = () => {
    userRef.current.classList.toggle(styles.active_user_dropdown);
  };
  return (
    <>
      {/* Top Header */}
      <header className={styles.top_header}>
        <div className={styles.container}>
          {/* Content Sale */}
          <div className={styles.center_content}>
            <div className={styles.bounce}>
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%! <Link>ShopNow</Link>
              </p>
            </div>
            {/* Language Select */}
            <div className={styles.right_content}>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Link onClick={(e) => e.preventDefault()}>
                  <Space>
                    Ngôn ngữ
                    <span>
                      <img
                        src={require("assets/images/icon/header/DropDown.png")}
                        alt=""
                      />
                    </span>
                  </Space>
                </Link>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
      <hr className={styles.hr_header} />
      {/* Main Header */}
      <div className={styles.main_header}>
        <div className={styles.container}>
          <div className={styles.content_header}>
            <div className={styles.left_header}>
              {/* Logo */}
              <div className={styles.logo_header}>
                <h2>E-Shop</h2>
              </div>
              {/* Navbar */}
              <nav className={styles.navbar_header}>
                <ul>
                  <li>Home</li>
                  <li>Contact</li>
                  <li>About</li>
                  <li>Sign Up</li>
                </ul>
              </nav>
            </div>
            {/* Right Content */}
            <div className={styles.right_header}>
              {/* Search bar */}
              <Search
                placeholder="What are you looking for?"
                allowClear
                onSearch={onSearch}
                style={{
                  width: 200,
                }}
              />
              {/* Wishlist icon*/}
              <img
                src={require("assets/images/icon/header/Wishlist.png")}
                alt="Whishlist"
              />
              {/* Cart icon */}
              <Badge count={0} showZero>
                <img
                  src={require("assets/images/icon/header/Cart1.png")}
                  alt="Whishlist"
                />
              </Badge>
              {/* User icon */}
              <div onClick={showUser} className={styles.user}>
                <img
                  src={require("assets/images/icon/header/User=Off.png")}
                  alt="Whishlist"
                />
                <div ref={userRef} className={styles.user_dropdown}>
                  <ul>
                    <li>
                      <Link>Manage My Account</Link>
                    </li>
                    <li>
                      <Link>My Order</Link>
                    </li>
                    <li>
                      <Link>My Review</Link>
                    </li>
                    <li>
                      <Link>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
