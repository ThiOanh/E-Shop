import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { routers } from "router/router";

function App() {
  const renderRoutes = useCallback((routers) => {
    //hàm đệ quy map ra các router theo trạng thái đã và chưa đăng nhập tương ứng

    return routers.map((route, index) => {
      //router khi đã đăng nhập
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
    //truyền vào 2 router: routers khi đã đăng nhập và unAuthRouter khi chưa đăng nhập
    <Routes>{renderRoutes(routers)}</Routes>
  );
}

export default App;
