import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { EventForm } from "./EventForm";
import { notify } from "../../utils";

const EditEvent = ({ visible, setVisible, info, setInform, getMyServices }) => {

  const [state, setState] = useState({
    title: info?.title,
    category_id: String(info?.category_id),
  });

  const [fileList, setFileList] = useState(JSON.parse(info?.images));

 
  const handleOk = () => {
    handleCancel();
  };
  const handleCancel = () => {
    setState({ title: "", category_id: "" });
    setFileList([]);
    setVisible(false);
    setInform({})
  };
  return (
    <Modal
      title="Edit Event"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <EventForm
        state={state}
        setState={setState}
        fileList={fileList}
        setFileList={setFileList}
        fromEdit={true}
      />
    </Modal>
  );
};

export default EditEvent;
