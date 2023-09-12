import React from "react";
import { Dropdown, Space } from "antd";

import styles from "./header.module.scss";
import "components/common/container.scss";
import { Link } from "react-router-dom";

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
function Header(props) {
  return (
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
  );
}

export default Header;
