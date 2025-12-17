import Navbar from "@/components/shared/Navbar";
import SideBar from "@/components/shared/SideBar";
import SidebarCollapsedIcon from "@/components/shared/SidebarCollapsedIcon";
import { SidebarProvider } from "@/context/SidebarContext";
import Providers from "@/providers/Providers";

import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Providers>
        <SidebarProvider>
          <div className="">
            <div className="sticky top-0 w-full !z-[99] bg-primary-color">
              <Navbar />
            </div>
            <Layout className="flex !bg-[#F9FAFB] relative">
              <SideBar />
              <Layout className="!bg-[#F9FAFB]">
                <Header
                  className="!m-0 !py-0 !px-4 !w-fit lg:!sticky lg:!top-16 lg:!z-50 !bg-[#F9FAFB]"
                  style={{
                    background: "#F9FAFB",
                    position: "sticky",
                    top: 0,
                    zIndex: 40,
                    marginLeft: 0,
                  }}
                >
                  <SidebarCollapsedIcon />
                </Header>
                <Content>
                  <div className="min-h-[86vh] w-[90%] mx-auto !pb-10">
                    {children}
                  </div>
                </Content>
              </Layout>
            </Layout>
          </div>
        </SidebarProvider>
      </Providers>
    </div>
  );
};

export default DashboardLayout;
