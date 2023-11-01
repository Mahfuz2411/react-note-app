import { useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSingInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
        toast("SignUp successful");
      })
      .catch((error) => toast(`Error: ${error.message}`));
  };

  return (
    <div className="w-full max-w-sm lg:max-w-3xl mx-auto hero min-h-screen">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Login now!</h1>
        <p className="py-6 text-center">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button
          onClick={handleSingInWithGoogle}
          className="btn btn-primary mx-7 my-3"
        >
          <BsGoogle /> Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
