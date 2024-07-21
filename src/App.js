/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import DataTable from "./views/table/index";
import Dashboard from "./views/dashboard/Dashboard";
import Profile from "./views/profile/Profile";
import Layout from "./views/layout";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="data-table" element={<DataTable />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </Layout>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
