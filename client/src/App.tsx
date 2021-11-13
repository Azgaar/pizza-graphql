import {BrowserRouter, Route, Routes} from "react-router-dom";

import {ShoppingCardProvider} from "context/ShoppingCardContext";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {MainContent} from "components/main/mainContent/MainContent";
import {ShoppingCard} from "components/main/shoppingCard/ShoppingCard";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCardProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="/card" element={<ShoppingCard />} />
            <Route path="*" element={<MainContent />} />
          </Routes>
        </Main>
      </ShoppingCardProvider>
    </BrowserRouter>
  );
}

export default App;
