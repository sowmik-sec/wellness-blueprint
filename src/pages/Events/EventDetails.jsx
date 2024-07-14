import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { storeToLocalStorage } from "../../localStorage/localStorage";
import toast, { Toaster } from "react-hot-toast";

function formatDate(dateString) {
  return format(new Date(dateString), "dd MMMM yyyy, HH:mm");
}

const EventDetails = () => {
  const location = useLocation();
  const { event } = location.state || {};

  if (!event) {
    return <p>No event details available.</p>;
  }

  const {
    eventName,
    dateTime,
    description,
    location: eventLocation,
    price,
    organizerContact,
    imageUrl,
    capacity,
    category,
  } = event;

  const handleJoinEvent = () => {
    storeToLocalStorage(event);
    toast.success("You have joined the event!");
  };

  return (
    <div className="card bg-base-100 w-full md:w-2/3 lg:w-1/2 mx-auto shadow-xl">
      <Toaster />
      <figure>
        <img src={imageUrl} alt={eventName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{eventName}</h2>
        <p>{description}</p>
        <div className="text-center mt-4">
          <div className="flex items-center justify-center mb-2">
            <div className="badge badge-outline mr-2">${price}</div>
            <div className="badge badge-outline">{formatDate(dateTime)}</div>
            <div className="badge badge-outline ml-2">{category}</div>
          </div>
          <p className="mb-2">Location: {eventLocation}</p>
          <p className="mb-2">Organizer: {organizerContact}</p>
          <p className="mb-2">Capacity: {capacity} people</p>
          <button
            className="btn btn-primary w-full mt-4"
            onClick={handleJoinEvent}
          >
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
