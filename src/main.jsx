import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import Routes from "./Route/Routes";

import { CartProvider } from "./Components/Cart/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>

<CartProvider>
<RouterProvider router={Routes}/>


</CartProvider>
  </StrictMode>
);
