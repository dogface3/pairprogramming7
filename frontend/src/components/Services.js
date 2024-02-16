import React, { useState, useEffect } from "react";
import Service from "./Service";
import Title from "./Title";

const apiUrl = ""

function Services() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
