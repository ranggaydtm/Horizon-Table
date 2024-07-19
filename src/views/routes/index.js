import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/index";
import Dashboard from "../dashboard/Dashboard";
import DataTable from "../table";

const AppRoutes = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data-table" element={<DataTable />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
