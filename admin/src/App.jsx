import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import JobList from "./pages/jobList/JobList";
import JobAdd from "./pages/jobAdd/JobAdd";
import NewsList from "./pages/newsList/NewsList";
import NewsAdd from "./pages/newsAdd/NewsAdd";

function App() {
  return (
    <div>
      <Navbar />
      {/* <hr /> */}
      <div className="app-container">
        <SideBar />
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/jobs/list" element={<JobList />} />
            <Route path="/jobs/add" element={<JobAdd />} />
            <Route path="/news/list" element={<NewsList />} />
            <Route path="/news/add" element={<NewsAdd />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
