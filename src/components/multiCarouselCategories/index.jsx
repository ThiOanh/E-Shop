import React, { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ArrowButtonGroup from "components/button/arrowButtonCarousel";
import styles from "./multiCarouselCategories.module.css";
import { carouselCategoriesResponsive } from "constants/index";
import CategoryItem from "components/categoryItem";

function MultiCarouselCategories(props) {
  const { list } = props;

  return (
    // categories carousel
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
        responsive={carouselCategoriesResponsive}
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
            <CategoryItem key={index} imgSrc={item.imgSrc} name={item.name} />
          );
        })}
      </Carousel>
    </div>
  );
}

export default memo(MultiCarouselCategories);
