import React from "react";
import Card from "../card";
import "./justForYou.css";

function JustForYou(props) {
  const { list } = props;
  console.log("««««« list »»»»»", list);

  return (
    <div className="list">

      <div className="just-for-you">
        <div className="just-for-you-header">
          Just For You
          <button className="see-all-button">See All</button>
        </div>
        <div className="just-for-you-list">
        {list.map((c) => (
        <span key={c.id}>
          <Card
            discounted={c.discounted}
            image={c.image}
            shopName={c.shopName}
            newPrice={c.newPrice}
            oldPrice={c.oldPrice}
            discount={c.discount}
            productName={c.productName}
            rate={c.rate}
            stock={c.stock}
            sold={c.sold}
          />
        </span>
      ))}
        </div>
      </div>
    </div>
  );
}

export default JustForYou;
