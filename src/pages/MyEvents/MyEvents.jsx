import { useEffect, useState } from "react";
import { getItemsFromStorage } from "../../localStorage/localStorage";
import Event from "../Events/Event";

function MyEvents() {
  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    const ev = getItemsFromStorage();
    setMyEvents(ev);
    console.log(ev);
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center">My Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14">
        {myEvents.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default MyEvents;
