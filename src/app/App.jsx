import { Routes,Route} from 'react-router-dom';
import {routers} from 'router/router';
function App() {
  return (
    <Routes>
      {routers.map((route,index)=>{
        if(route.children && route.children.length>0){
          return(
            <Route key={index} path={route.path} element={route.element}>
              {route.children.map((childRoute,childIndex)=>{
                return <Route key={childIndex} path={childRoute.path} element={childRoute.element}/>
              })}
            </Route>
          )
        }
        return <Route key={index} path={route.path} element={route.element}/>
      })
      }
        
    </Routes>
  );
}

export default App;
