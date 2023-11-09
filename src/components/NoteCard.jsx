import PropTypes from "prop-types";

const NoteCard = ({ note }) => {
  const { update_history } = note;
  const last_update = JSON.parse(update_history);

  return (
    // <div className="collapse collapse-arrow bg-base-200">
    //   <input type="radio" name="my-accordion-2"/>
    //   <div className="collapse-title text-xl font-medium w-full flex items-end justify-between">
    //     <p>{note.tittle}</p>
    //     <span className="badge badge-sm">{last_update[last_update.length-1]}</span>
    //   </div>
    //   <div className="collapse-content">
    //     <p>{note.details}</p>
    //   </div>
    // </div>
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
          <p className="bg-white rounded-lg flex-grow text-black h-40 overflow-y-scroll px-2">
            {note.details}
          </p>
          <div className="card-actions w-full flex">
            <button className="btn flex-grow bg-accent border-none">Update</button>
            <button className="btn flex-grow bg-error border-none">Delete</button>
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
