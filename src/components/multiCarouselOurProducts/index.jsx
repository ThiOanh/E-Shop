import React, { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ArrowButtonGroup from "components/button/arrowButtonCarousel";
import styles from "./multiCarouselOurProducts.module.css";
import { carouselResponsive } from "constants/index";
import ProductItem from "components/productItem";

function MultiCarouselOurProducts(props) {
  const { list } = props;

  return (
    // flash sale carousel
    <div className={styles.cover_carousel}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customButtonGroup={<ArrowButtonGroup />} //using <ArrowButtonGroup />
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={carouselResponsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable={false}
      >
        {list.map((item, index) => {
          return (
            <div key={index}>
              <div className={styles.cover_our_carousel_row}>
                <ProductItem
                  isNew={item.isNew}
                  discount={item.discount}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  discountedPrice={item.discountedPrice}
                  price={item.price}
                  numOfEvaluate={item.numOfEvaluate}
                  numOfEvaluate1Star={item.numOfEvaluate1Star}
                  numOfEvaluate2Star={item.numOfEvaluate2Star}
                  numOfEvaluate3Star={item.numOfEvaluate3Star}
                  numOfEvaluate4Star={item.numOfEvaluate4Star}
                  numOfEvaluate5Star={item.numOfEvaluate5Star}
                />
              </div>

              <div className={styles.cover_our_carousel_row}>
                <ProductItem
                  isNew={item.isNew}
                  discount={item.discount}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  discountedPrice={item.discountedPrice}
                  price={item.price}
                  numOfEvaluate={item.numOfEvaluate}
                  numOfEvaluate1Star={item.numOfEvaluate1Star}
                  numOfEvaluate2Star={item.numOfEvaluate2Star}
                  numOfEvaluate3Star={item.numOfEvaluate3Star}
                  numOfEvaluate4Star={item.numOfEvaluate4Star}
                  numOfEvaluate5Star={item.numOfEvaluate5Star}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default memo(MultiCarouselOurProducts);
