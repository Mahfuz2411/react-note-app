import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading || user) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;

};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
