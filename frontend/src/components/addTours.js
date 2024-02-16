import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { REACT_APP_API_URL } from "../utils/apiConfig";

const apiUrl = "http://localhost:4000/api/tours";

const Create = () => {
    const id = 1;
  const [title, setTourName] = useState("");
  const [info, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState(0);
  const [cost, setCost] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tour = { 
        id ,
       title, 
      info, 
      image,
      date,
      location,
      duration,
      cost
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(tour),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.error("Error:", json);
    } else {
      setTourName("");
      setDescription("");
      setImage("");
      setDate("");
      setLocation("");
      setDuration(0);
      setCost(0);
      console.log("New tour added:", json);
      navigate("/"); // Assuming "/" is the path to the homepage
    }
  };

  return (
    <div className="create">
      <h2>Add a New Tour</h2>
      <form onSubmit={handleSubmit}>
        <label>Tour Name:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTourName(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          required
          value={info}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Image:</label>
        <input
          type="text"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="text"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Duration (days):</label>
        <input
          type="number"
          required
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
        <label>Cost:</label>
        <input
          type="number"
          required
          value={cost}
          onChange={(e) => setCost(parseInt(e.target.value))}
        />
        <button>Add Tour</button>
      </form>
    </div>
  );
};

export default Create;
