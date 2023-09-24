import React, { memo } from "react";

import styles from "./arrowButtonCarousel.module.css";

function ArrowButtonGroup({ next, previous }) {
  return (
    <div className={styles.cover_next_back_in}>
      <div className={styles.cover_back} onClick={() => previous()}>
        <img
          src={require("assets/cardList/back.png")}
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className={styles.cover_next} onClick={() => next()}>
        <img
          src={require("assets/cardList/next.png")}
          className="d-block w-100"
          alt="..."
        />
      </div>
    </div>
  );
}

export default memo(ArrowButtonGroup);
