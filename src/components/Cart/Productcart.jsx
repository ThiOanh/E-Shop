import { useState } from "react";
import "../Cart/Cart.css";
import { Layout } from "antd";

function App() {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      url: "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/b/e/beitong_h1-4.png",
      cart: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      url: "https://bizweb.dktcdn.net/thumb/grande/100/171/173/products/192970020140701190949424-jpeg.jpg?v=1569472102187",
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "GameSir F7 Game",
      price: 1200,
      url: "https://m.media-amazon.com/images/I/6139vIonewL.SS700.jpg",
      cart: false,
      quantity: 1,
    },
  ]);

  const applyCoupon = () => {
    // You can implement coupon logic here
    // For simplicity, let's assume a fixed discount for demonstration purposes
    const discount = 0.1; // 10% discount
    const discountedTotal = total - total * discount;
    // setTotal(discountedTotal);
  };

  function addtocart(item) {
    let cart2 = [...cart];
    cart2.push({ ...item });
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true;
      }
    });
    setCart(cart2);
  }
  function removetocart(item) {
    let cart2 = cart.filter((i) => i.id != item.id);
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = false;
      }
    });
    setCart(cart2);
  }
  function increase(item) {
    let x = cart.map((i) => {
      if (item.id == i.id) {
        console.log("hola");
        i.quantity += 1;
      }
      return i;
    });
    setCart(x);
  }
  function decrease(item) {
    let x = cart.map((i) => {
      if (item.id == i.id && i.quantity > 1) {
        console.log("hola");
        i.quantity -= 1;
      }
      return i;
    });
    setCart(x);
  }
  function total() {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }
  return (
    <section>
      <div className="container mt-2">
        <div className="row justify-content-center">
          {products.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="card">
                <img src={item.url} className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">
                    {item.name} - $ {item.price}
                  </h6>
                  {item.cart == false && (
                    <button
                      className="btn btn-primary"
                      onClick={() => addtocart(item)}
                    >
                      Add to cart
                    </button>
                  )}
                  {item.cart == true && (
                    <button
                      className="btn btn-success"
                      onClick={() => addtocart(item)}
                    >
                      Added
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default App;
