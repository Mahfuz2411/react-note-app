import { NavLink } from "react-router-dom";
import HelmetCompo from "../components/HelmetCompo";

const Error = () => {
  return (
    <>
    <HelmetCompo title={"Error"}/>
      <div className="grid place-content-center w-screen h-screen text-center gap-10">
        <p className="text-5xl font-bold">This page isn&apos;t made for you</p>
        <NavLink to="/">
          <button className="btn btn-primary">Go home</button>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
