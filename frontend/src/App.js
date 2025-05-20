import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-56px)] pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
