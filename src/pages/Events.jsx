import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import EventsCard from "../components/Events/EventsCard";
import { api, services } from "../api";
import { Spin } from "antd";

const Events = () => {
  const [serviceLoader, setServiceLoader] = useState(false);
  const [allServices, setServices] = useState([]);

  const fetchServiceInformations = async () => {
    setServiceLoader(true);
    try {
      const res = await api.get(services.services);
      if (res.success) {
        setServices(res.services);
      }
    } catch (error) {
      console.log(error);
    }
    setServiceLoader(false);
  };

  useEffect(() => {
    fetchServiceInformations();
  }, []);
  return (
    <Layout>
      <Spin spinning={serviceLoader}>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
          {allServices.map((info) => (
            <EventsCard key={info.id} info={info} />
          ))}
        </div>
      </Spin>
    </Layout>
  );
};

export default Events;
