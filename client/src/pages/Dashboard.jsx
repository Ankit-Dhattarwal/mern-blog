import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardSidebar from "../component/DashboardSidebar";
import DashProfile from "../component/DashProfile";
import DashPost from "../component/DashPost";
import DashUsers from "../component/DashUsers";
import DashComments from "../component/DashComments";
import DashboardComp from "../component/DashboradCom";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar*/}
        <DashboardSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* post... */}
      {tab === "posts" && <DashPost />}
      {/* users... */}
      {tab === "users" && <DashUsers />}
      {/* comments... */}
      {tab === "comments" && <DashComments />}
      {/* dashboard Comp... */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
}
