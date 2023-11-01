import PropTypes from "prop-types";

const NoteCard = ({ note }) => {
  const {update_history} = note;
  const last_update = JSON.parse(update_history)

  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2"/>
      <div className="collapse-title text-xl font-medium w-full flex items-end justify-between">
        <p>{note.tittle}</p>
        <span className="badge badge-sm">{last_update[last_update.length-1]}</span>
      </div>
      <div className="collapse-content">
        <p>{note.details}</p>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object,
};

export default NoteCard;
