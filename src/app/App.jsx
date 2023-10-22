import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routers } from "../router/router";
import { useCallback, useEffect, useState } from "react";

import productList from "../fakeData/wishlist.json";
import Wishlist from "../components/wishlist";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  setProducts(productList)
  }, []);


  
  const renderRoutes = useCallback((routers) => {
    return routers.map((route, index) => {
      if (route.children && route.children.length > 0) {
        return (
          <Route path={route.path} element={route.element} key={index}>
            {renderRoutes(route.children)}
          </Route>
        );
      }

      if (route.isRoot) {
        return <Route index element={route.element} key={index} />;
      }

      return <Route path={route.path} element={route.element} key={index} />;
    });
  }, []);

  return (
    <>
    <Router>
      <Routes>{renderRoutes(routers)}</Routes>
    </Router>
    </>
  );
}

export default App;
