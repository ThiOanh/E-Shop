import React from "react";
import Card from "../card";
import "./wishList.css";

function Wishlist(props) {
  const { list } = props;
  console.log("««««« list »»»»»", list);

  return (
    <div className="list">
      <div className="wishList-header">
        Wishlist
        <button className="move-all-to-bag">Move All To Bag</button>
        <div className="wishlist">
        {list.map((p) => (
        <span key={p.id}>
          <Card
            discounted={p.discounted}
            image={p.image}
            shopName={p.shopName}
            newPrice={p.newPrice}
            oldPrice={p.oldPrice}
            discount={p.discount}
            productName={p.productName}
            rate={p.rate}
            stock={p.stock}
            sold={p.sold}
          />
        </span>
      ))}
        </div>
      </div>

      {/* <div className="just-for-you">
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
      </div> */}
    </div>
  );
}

export default Wishlist;
