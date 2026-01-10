import DashboardSidebar from "@/components/shared/DashboardSidebar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
