import React, { useState } from "react";
import { LayoutAccount, PageTitle } from "../components/DashboardLayout";
import { api, services } from "../api";
import { EventButton } from "../components/Shared/EventButton";
import { notify } from "../utils";
import { useNavigate } from "react-router-dom";
import { EventForm } from "../components/Events/EventForm";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [state, setState] = useState({
    title: "",
  });

  //create service
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const images = [];
      fileList.forEach((file) => {
        images.push(file?.response?.url);
      });
      const res = await api.post(services.services, { ...state, images });
      if (res.success) {
        navigate("/my-events");
        notify(res);
        console.log(res.data);
      } else {
        notify(res);
      }
    } catch (error) {
      notify(error);
      console.log(error);
    }
    setLoading(false);
  };

  const disabled = !state.category_id || !state.title || !fileList.length;

  return (
    <LayoutAccount>
      <PageTitle title="Create Service" />
      <EventForm
        state={state}
        setState={setState}
        fileList={fileList}
        setFileList={setFileList}
        loader={false}
        fromEdit={false}
      />
      <div className="text-end">
        <EventButton
          btnText="Create"
          loading={loading}
          loadingText="Creating..."
          className="event-btn-primary"
          disabled={disabled || loading}
          onClick={handleSubmit}
        />
      </div>
    </LayoutAccount>
  );
};

export default CreateEvent;
