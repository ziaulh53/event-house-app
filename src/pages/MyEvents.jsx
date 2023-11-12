import React, { useEffect, useState } from "react";
import { LayoutAccount } from "../components/DashboardLayout";
import { api, myServices } from "../api";
import { notify } from "../utils";
import { Card, Popconfirm, Spin } from "antd";
import EventsCard from "../components/Events/EventsCard";
import EditEvent from "../components/Events/EditEvent";

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

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(myServices.services, id);
      notify(res, getMyServices);

    } catch (error) {}
  };

  const [visible, setVisible] = useState(false);
  const [inform, setInform] = useState([]);

  const showModal = (info) => {
    setInform(info);
    setVisible(true);
  };

  useEffect(() => {
    getMyServices();
  }, []);

  return (
    <LayoutAccount>
      {inform?.id && (
        <EditEvent
          visible={visible}
          setVisible={setVisible}
          info={inform}
          setInform={setInform}
          getMyServices={getMyServices}
        />
      )}
      <Spin spinning={loading}>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {allServices.map((info) => (
            <Card
              key={info.id}
              hoverable
              bordered
              actions={[
                <Popconfirm
                  title="Are you sure?"
                  okType="danger"
                  onConfirm={() => handleDelete(info.id)}
                >
                  <span className="text-red-600">
                    <i className="fa-solid fa-trash-can"></i>
                  </span>
                </Popconfirm>,
                <span onClick={() => showModal(info)}>
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
