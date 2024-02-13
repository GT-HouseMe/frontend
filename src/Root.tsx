import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2em" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
