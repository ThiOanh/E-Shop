import React, { memo, useCallback } from "react";

import styles from "./flashSaleItem.module.css";
import { renderStars } from "helper";
import { LOCATIONS } from "constants/index";
import { useNavigate } from "react-router-dom";

function FlashSaleItem(props) {
  const navigate = useNavigate();
  const {
    discount,
    imgSrc,
    // love,
    name,
    discountedPrice,
    price,
    // evaluate,
    numOfEvaluate,
    numOfEvaluate1Star,
    numOfEvaluate2Star,
    numOfEvaluate3Star,
    numOfEvaluate4Star,
    numOfEvaluate5Star,
  } = props;

  const numOfStar =
    (1 * numOfEvaluate1Star +
      2 * numOfEvaluate2Star +
      3 * numOfEvaluate3Star +
      4 * numOfEvaluate4Star +
      5 * numOfEvaluate5Star) /
    numOfEvaluate;

  const handleAddToCart = useCallback((event) => {
    event.stopPropagation();
    console.log("««««« add to cart »»»»»");
  }, []);

  const handleViewProductDetails = useCallback(() => {
    navigate(`${LOCATIONS.PRODUCTS}/1`);
  }, [navigate]);

  return (
    <div
      onClick={handleViewProductDetails}
      className={styles.cover_flashsale_item}
    >
      {/* discount */}
      <div className={styles.cover_flashsale_item_discount}>
        <div className={styles.flashsale_item_discount}>-{discount}%</div>
      </div>

      {/* item options */}
      <div className={styles.cover_flashsale_item_options}>
        <div className={styles.cover_flashsale_item_love}>
          <img
            src={require("assets/cardOptions/love.png")}
            className="d-block w-100"
            alt="..."
          />
        </div>

        <div className={styles.cover_flashsale_item_love}>
          <img
            src={require("assets/cardOptions/view.png")}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>

      {/* card header */}
      <div className={styles.cover_flashsale_head}>
        <div className={styles.cover_flashsale_image}>
          <img src={imgSrc} className="d-block w-100" alt="..." />
        </div>

        <div className={styles.cover_add_to_cart}>
          <div onClick={handleAddToCart} className={styles.add_to_cart}>
            Add To Cart
          </div>
        </div>
      </div>

      {/* card footer */}
      <div className={styles.cover_flashsale_content}>
        {/* product name */}
        <div className={styles.flashsale_name}>{name}</div>

        <div className={styles.cover_flashsale_price}>
          {/* discounted price */}
          <div className={styles.flashsale_discounted_price}>
            ${discountedPrice}
          </div>

          {/* price */}
          <div className={styles.flashsale_price}>${price}</div>
        </div>

        {/* evaluate */}
        <div className={styles.cover_flashsale_evaluate}>
          <div className={styles.cover_flashsale_stars}>
            {renderStars(numOfStar)}
          </div>

          <div className={styles.cover_flashsale_num_evaluate}>
            ({numOfEvaluate})
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FlashSaleItem);
