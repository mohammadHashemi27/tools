import "./App.css";
import { Footer } from "./components/footer/components/footer";
import { Header } from "./components/header/Header";

import { Main } from "./components/main/main";

function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <main className="relative -mt-130   ">
          <Main />
        </main>
        <footer className="relative -mt-25   ">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
