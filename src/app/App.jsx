import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { routers } from "router/router";

function App() {
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

  return <Routes>{renderRoutes(routers)}</Routes>;
}

export default App;
