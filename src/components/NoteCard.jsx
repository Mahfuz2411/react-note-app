import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NoteCard = ({ note }) => {
  const { update_history } = note;
  const last_update = JSON.parse(update_history);
  const navigate = useNavigate();

  const handleUpdate = (note) => {
    // console.log(note);
    navigate(`/update/${note._id}`);
  }

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://react-note-app-server.vercel.app/notes/${note._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      }
    });
  }

  return (
    <>
      <div className="card w-full max-w-96 bg-neutral text-primary-content">
        <div className="card-body flex">
          <h2 className="card-title capitalize text-2xl font-bold px-2">
            {note.tittle.length > 10
              ? note.tittle.slice(0, 10) + "..."
              : note.tittle}
          </h2>
          <span className="badge badge-xs text-xs bg-transparent border-none text-teal-700">
            {last_update[last_update.length - 1]}
          </span>
          <p className="bg-white rounded-lg flex-grow text-black h-40 overflow-y-scroll px-2 flex flex-wrap">
            {note.details}
          </p>
          <div className="card-actions w-full flex">
            <button onClick={() => handleUpdate(note)} className="btn flex-grow bg-accent border-none">Update</button>
            <button onClick={handleDelete} className="btn flex-grow bg-error border-none">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object,
};

export default NoteCard;
