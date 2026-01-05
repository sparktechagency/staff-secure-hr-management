import React from "react";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import "@ant-design/v5-patch-for-react-19";
import PopUpPage from "@/components/Home/PopUpPage";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="">
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>
        <div>
          <PopUpPage />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
