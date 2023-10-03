import React, { useCallback, useRef, useState } from "react";
import { Dropdown, Space, Input, Badge, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import styles from "./header.module.scss";
import{LOCATIONS} from "constants/index";
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
  const [isShowMenu, setIsShowMenu] = useState(false);
  const userRef = useRef();
  const showUser = () => {
    userRef.current.classList.toggle(styles.active_user_dropdown);
  };
  const showMenu = useCallback(() => {
    setIsShowMenu((prev) => !prev);
  }, []);
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
      {/* Main Header */}
      <div className={styles.main_header}>
        <div className={styles.container}>
          <div className={styles.content_header}>
            {/* Logo */}
            <div className={styles.logo_header}>
              <h2>E-Shop</h2>
            </div>
            {/* Navbar */}
            <nav
              className={
                isShowMenu
                  ? `${styles.navbar_header} ${styles.navbar_active}`
                  : styles.navbar_header
              }
            >
              <ul>
              <li><Link to={LOCATIONS.HOME_PAGE}>Home</Link></li>
              <li><Link to={LOCATIONS.CONTRACT_PAGE}>Contract</Link></li>
              <li><Link to={LOCATIONS.ABOUT_PAGE}>About</Link></li>
              <li><Link to={LOCATIONS.SINGUP_PAGE}>Sign Up</Link></li>
              </ul>
              
            </nav>
            <Search
                placeholder="What are you looking for?"
                allowClear
                onSearch={onSearch}
                className={styles.search_bar}
              />
            {/* Right Content */}
            <div className={styles.right_header}>
              {/* Search bar */}
             
              <div className={styles.box_icon}>
                {/* Wishlist icon*/}
                <Link className={styles.wishlist}><img
                  src={require("assets/images/icon/header/Wishlist.png")}
                  alt="Wishlist"
                /></Link>
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
              <Button className={styles.button_menu} onClick={showMenu}>
                <MenuOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
