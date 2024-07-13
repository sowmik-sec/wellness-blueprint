import { useLoaderData } from "react-router-dom";
import Event from "./Event";
import { useState } from "react";

function Events() {
  const events = useLoaderData();
  const [show, setShow] = useState(4);

  console.log(events);
  return (
    <div>
      <h2 className="text-3xl text-center">These are our Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14">
        {events.slice(0, show).map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
      {show === 4 && (
        <div className="flex justify-center mb-3">
          <button onClick={() => setShow(6)} className="btn btn-primary">
            See All Events
          </button>
        </div>
      )}
    </div>
  );
}

export default Events;
