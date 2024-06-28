import { Outlet } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className=" px-10  md:px-60 pb-20 pt-40 flex flex-col min-h-screen bg-white">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
