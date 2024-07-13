/* eslint-disable react/prop-types */
/**
 * 
 "id": 2,
    "eventName": "Nutritional Workshops and Cooking Classes",
    "description": "Discover the secrets to a healthy diet with our comprehensive nutritional workshops and hands-on cooking classes. Learn from expert nutritionists and chefs who will guide you through the essentials of balanced eating, meal planning, and preparing delicious, nutritious dishes. Whether you're a beginner or looking to refine your skills, our classes offer something for everyone. Take home recipes and knowledge to support your wellness journey.",
    "dateTime": "2024-08-20T14:00:00",
    "location": "Wellness Center Kitchen",
    "price": 25,
    "organizerContact": "nutrition@wellnesscenter.com",
    "imageUrl": "https://cdn.pixabay.com/photo/2019/06/18/22/46/cooking-4283413_1280.jpg",
    "capacity": 30,
    "category": "Nutrition"
*/

import { format } from "date-fns";
import { Link } from "react-router-dom";

function formatDate(dateString) {
  return format(new Date(dateString), "dd MMMM yyyy, HH:mm");
}

function Event({ event }) {
  const { id, eventName, dateTime, description, price, imageUrl } = event;
  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
      <figure>
        <img src={imageUrl} alt="Event Title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {eventName}
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>{description.slice(0, 30)}...</p>
        <div className="text-center">
          <div className="flex items-center">
            <div className="badge badge-outline mr-2">${price}</div>
            <div className="badge badge-outline">{formatDate(dateTime)}</div>
          </div>
          <Link to={`/event-details/${id}`}>
            <button className="btn btn-primary block w-full mt-3">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Event;
