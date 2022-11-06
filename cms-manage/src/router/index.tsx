import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import App from "App";

interface Iroute {
  path: string;
  component: React.FC;
  children?: Iroute[];
}

let routeArr: Iroute[] = [
  {
    path: "/",
    component: App,
    children: [
      { path: "edit", component: lazy(() => import("views/Edit")) },
      { path: "list", component: lazy(() => import("views/List")) },
    ],
  },
  { path: "/login", component: lazy(() => import("views/Edit")) },
  { path: "/register", component: lazy(() => import("views/Register")) },
];


const renderRouter = (item:Iroute,index:number):React.ReactElement | null=>{
  if(!item.children){
    return <Route key={index} path={item.path} element={<item.component />}></Route>
  }else{
   return (
    <Route key={index} path={item.path} element={<item.component />}>
      {renderRouter(item.children)}
    </Route>
   )
  }
 
}

const MyRouter = () => (
  <Router>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {
          routeArr.map( (item, index) => {
              if(!item.children){
                return renderRouter(item,index)
              }else{
                return  <Route key={index} path={item.path} element={<item.component />}>
                    {
                      item.children.map( (v,i)=>{
                        return renderRouter(v,i)
                      } )
                    }
                </Route>
              }
              
            }          
          )
        }
      </Routes>
    </Suspense>
  </Router>
);

export default MyRouter;
