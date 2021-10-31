import {ShoppingCardProvider} from "context/ShoppingCardContext";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";

function App() {
  return (
    <ShoppingCardProvider>
      <Header />
      <Main />
    </ShoppingCardProvider>
  );
}

export default App;
