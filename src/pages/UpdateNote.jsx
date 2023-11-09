import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HelmetCompo from "../components/HelmetCompo";

const UpdateNote = () => {
  const currentDate = new Date();
  const note = useLoaderData();
  const navigate = useNavigate();

  const { update_history } = note;
  const time_array = JSON.parse(update_history);
  const last_update = currentDate.toString().split(" ").slice(0, 6).toString();
  time_array.push(last_update);

  // console.log(typeof time_array, time_array);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const tittle = form.tittle.value;
    const details = form.details.value;

    if (!tittle || !details) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      });
    } else {
      const newNote = {tittle, details, update_history: JSON.stringify(time_array)};
      fetch(`https://react-note-app-server.vercel.app/notes/${note._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newNote),
      })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Succes",
            text: "Note added succesfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate('/notes')
        } else {
          Swal.fire({
            title: "Error",
            text: `Error occured`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
    }
  };
  return (
    <>
    <HelmetCompo title="Update Note" />
      <div className="hero min-h-screen bg-base-200">
        <form
          onSubmit={handleSubmit}
          className="card card-body flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <input
            name="tittle"
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={note.tittle}
          />
          <textarea
            name="details"
            className="textarea textarea-primary h-40"
            defaultValue={note.details}
          ></textarea>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary"
              defaultValue="Post"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateNote;
