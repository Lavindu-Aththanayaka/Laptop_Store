import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <Header />
      <main className="min-h-[calc(100vh-56px)] pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
