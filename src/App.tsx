import { Header } from "./components/Header";
import { Orders } from "./components/Orders/Index";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
