import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import NoteCard from "../components/NoteCard";
import { AuthContext } from "../context/AuthProvider";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { user, isLoading} = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://react-note-app-server-q1aw1niwf-mahfuz2411.vercel.app/notes/${user.email}`) 
    .then(res => res.json())
    .then(dta => setNotes(dta))
    .catch(error => {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: `Error occured`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    })
  }, [isLoading, user]);
  return (
    <div className="container mx-auto flex-grow">
      {
        notes.map(note => <NoteCard key={note._id} note={note}></NoteCard>)
      }
    </div>
  );
};

export default Notes;