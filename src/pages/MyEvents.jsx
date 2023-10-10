import React, { useEffect, useState } from "react";
import { LayoutAccount } from "../components/DashboardLayout";
import { api, myServices } from "../api";
import { notify } from "../utils";
import { Card, Popconfirm, Spin } from "antd";
import EventsCard from "../components/Events/EventsCard";

const MyEvents = () => {
  const [loading, setLoading] = useState(false);
  const [allServices, setAllServices] = useState([]);
  const getMyServices = async () => {
    setLoading(true);
    try {
      const res = await api.get(myServices.services);
      if (res.success) {
        setAllServices(res.service);
      }
    } catch (error) {
      notify(error);
      console.log(error);
    }
    setLoading(false);
  };

  const handleDelete= async(id)=>{
    try {
      const res = await api.delete(myServices.services, id);
      notify(res, getMyServices);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getMyServices();
  }, []);

  return (
    <LayoutAccount>
      <Spin spinning={loading}>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {allServices.map((info) => (
            <Card
              key={info.id}
              hoverable
              bordered
              actions={[
                <Popconfirm title='Are you sure?' okType="danger" onConfirm={()=>handleDelete(info.id)}>
                  <span className="text-red-600">
                    <i className="fa-solid fa-trash-can"></i>
                  </span>
                </Popconfirm>,
                <span>
                  <i className="fa-solid fa-pen-to-square"></i>
                </span>,
              ]}
            >
              <EventsCard shadow={false} info={info} showHeart={false} />
            </Card>
          ))}
        </div>
      </Spin>
    </LayoutAccount>
  );
};

export default MyEvents;
