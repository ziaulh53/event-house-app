import React from "react";
import Layout from "../components/Layout";
import EventsCard from "../components/Events/EventsCard";

const Events = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 min-h-screen">
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </Layout>
  );
};

export default Events;
