import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";

const MainContent = lazy(() => import("components/main/mainContent/MainContent"));
const ShoppingCart = lazy(() => import("components/main/shoppingCart/ShoppingCart"));
const Orders = lazy(() => import("components/main/orders/Orders"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Suspense fallback="...">
          <Routes>
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<MainContent />} />
          </Routes>
        </Suspense>
      </Main>
    </BrowserRouter>
  );
}

export default App;
