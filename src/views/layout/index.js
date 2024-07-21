/* eslint-disable no-unused-vars */
// Chakra imports
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { SidebarContext } from "../../components/sidebar/SidebarContext";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DataTable from "../table";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../profile/Profile";

export default function Layout(props) {
  const { ...rest } = props;
  const location = useLocation();
  const path = location.pathname.substring(1);

  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { onOpen } = useDisclosure();

  return (
    <Box>
      <Box>
        <SidebarContext.Provider
          value={{
            toggleSidebar,
            setToggleSidebar,
          }}
        >
          <Sidebar display="none" {...rest} />
          <Box
            float="right"
            minHeight="100vh"
            height="100%"
            overflow="auto"
            position="relative"
            maxHeight="100%"
            w={{ base: "100%", xl: "calc( 100% - 290px )" }}
            maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
            transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
            transitionDuration=".2s, .2s, .35s"
            transitionProperty="top, bottom, width"
            transitionTimingFunction="linear, linear, ease"
          >
            <Portal>
              <Box>
                <Navbar onOpen={onOpen} fixed={fixed} {...rest} />
              </Box>
            </Portal>
            <Box mx="auto" p={{ base: "20px", md: "30px" }} pe="20px" minH="100vh" pt="50px">
              {path === "dashboard" && <Dashboard />}
              {path === "data-table" && <DataTable />}
              {path === "profile" && <Profile />}
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        </SidebarContext.Provider>
      </Box>
    </Box>
  );
}
