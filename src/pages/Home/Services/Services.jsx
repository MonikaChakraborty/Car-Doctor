import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const services = useServices();

  // const [services, setServices] = useState([]);

  // useEffect( () => {
  //     fetch('https://car-doctor-server-pink-pi.vercel.app/services')
  //     .then(res => res.json())
  //     .then(data => setServices(data));
  // }, [])

  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl text-orange-600 font-bold">Service</h3>
        <h2 className="text-5xl  mb-5">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
