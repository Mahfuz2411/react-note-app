import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import NoteCard from "../components/NoteCard";
import { AuthContext } from "../context/AuthProvider";
import HelmetCompo from "../components/HelmetCompo";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://react-note-app-server.vercel.app/notes/${user.email}`)
      .then((res) => res.json())
      .then((dta) => setNotes(dta))
      .catch((error) => {
        // console.log(error);
        Swal.fire({
          title: "Error",
          text: `Error occured`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  }, [user, notes]);
  return (
    <>
    <HelmetCompo title="My Notes" />
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 md:py-10 px-5 md:px-10">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note}></NoteCard>
        ))}
      </div>
    </>
  );
};

export default Notes;
