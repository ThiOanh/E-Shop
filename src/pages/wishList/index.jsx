import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import productList from "../../fakeData/wishlist.json";
import justForYouList from "../../fakeData/just_for_you.json";
import Wishlist from "../../components/wishlist";
import JustForYou from "../../components/justForYou";
function WishlistPage() {
  const [wishList, setwishList] = useState([]);

  useEffect(() => {
  setwishList(productList)
  }, []);

  const [justForYou, setjustForYou] = useState([]);

  useEffect(() => {
  setjustForYou(justForYouList)
  }, []);
  return (
    <>
    <Wishlist list={wishList}/>
    <JustForYou list={justForYou}/>
    </>
  );
}

export default WishlistPage;
