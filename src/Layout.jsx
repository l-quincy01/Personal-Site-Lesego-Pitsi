import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className=" px-10  md:px-60 pb-20 pt-40 flex flex-col min-h-screen bg-gray-100">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}
