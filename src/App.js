/* eslint-disable no-unused-vars */
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import DataTable from "./views/table";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableDevelopment from "./views/table/components/TableDevelopment";
import TableCheck from "./views/table/components/TableCheck";
import Layout from "./views/layout";
import AppRoutes from "./views/routes";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route Component={Layout} />
          </Routes>
          <Layout />
        </Router>
      </ChakraProvider>
      {/* <ChakraProvider>
        <Router>
          <Routes>
            <Route Component={Layout} />
          </Routes>
          <Flex>
            <Sidebar />
            <Box flex="1">
              <Navbar />
              <Box p="4">
                <Routes>
                  <Route
                    path="/data-table"
                  />
                </Routes>
              </Box>
            </Box>
          </Flex>
        </Router>
      </ChakraProvider> */}
    </>
  );
}

export default App;
