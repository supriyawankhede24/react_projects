import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  console.log("apploaded");
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<AppLayout />} errorElement={<Error />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </Router>
// );

// 1. Define your routes array
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resid", element: <RestaurantMenu /> },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// 2. Provide the router to your application
// export default function AppLayout() {
//   return <RouterProvider router={router} />;
// }
