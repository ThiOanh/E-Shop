import React from 'react';
import { Carousel } from 'antd';

import styles from './carousel.module.scss'

function Carousels(props) {
    return (
        <div className={styles.carousel}>
            <Carousel autoplay >
          <div>
            <img src={require('assets/images/Frame 560.png')} alt="Banner" />
          </div>
          <div>
            <img src={require('assets/images/Frame 560.png')} alt="Banner" />
          </div>
          <div>
            <img src={require('assets/images/Frame 560.png')} alt="Banner" />
          </div>
          
        </Carousel>
        </div>
      );
}
export default Carousels;