import React, { useState, useEffect } from "react";
import Tour from "./Tour";
import Title from "./Title";
// import { REACT_APP_API_URL } from "../utils/apiConfig";

const apiUrl = "http://localhost:4000/api/tours";

function Tours() {
  const [toursData, setToursData] = useState([]);

  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch tours");
        }
        const data = await response.json();
        setToursData(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
