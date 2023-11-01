import { useContext } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const Post = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const tittle = form.tittle.value;
    const details = form.details.value;
    form.reset();

    var currentDate = new Date();
    if(!tittle || !details) return toast("Fields can't be empty.");
    // console.log(currentDate);

    if(!user) return toast("Something went wrong");

    const last_update= currentDate.toString().split(' ').slice(0, 6).toString();
    console.log(last_update);
    const arr = [];
    arr.push(last_update);
    const update_history = JSON.stringify(arr); 

    console.log(update_history);
    const newNote = {
      email: user.email,
      tittle,
      details,
      update_history,
    }

    fetch("https://react-note-app-server-q1aw1niwf-mahfuz2411.vercel.app/notes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newNote),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Succes",
              text: "Note added succesfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
            form.reset();
          } else {
            Swal.fire({
              title: "Error",
              text: `Error occured`,
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch ((error)=> {
          Swal.fire({
            title: "Error",
            text: `Error: ${error.message}`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="card card-body flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <input
          name="tittle"
          type="text"
          placeholder="Tittle"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <textarea
          name="details"
          className="textarea textarea-primary"
          placeholder="Write Your Notes here"
        ></textarea>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" defaultValue="Post"/>
        </div>
      </form>
    </div>
  );
};

export default Post;
