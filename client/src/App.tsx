import {BrowserRouter, Route, Routes} from "react-router-dom";

import {ShoppingCardProvider} from "context/ShoppingCardContext";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {MainContent} from "components/main/mainContent/MainContent";
import {ShoppingCard} from "components/main/shoppingCard/ShoppingCard";
import {Orders} from "components/main/orders/Orders";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCardProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="*" element={<MainContent />} />
            <Route path="/card" element={<ShoppingCard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Main>
      </ShoppingCardProvider>
    </BrowserRouter>
  );
}

export default App;
