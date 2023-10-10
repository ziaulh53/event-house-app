import React, { useEffect, useState } from "react";
import { LayoutAccount, PageTitle } from "../components/DashboardLayout";
import { api, category, services } from "../api";
import { EventInput } from "../components/Shared/EventInput";
import { Select, Upload } from "antd";
import { useSelector } from "react-redux";
import { EventButton } from "../components/Shared/EventButton";
import { notify } from "../utils";

const CreateEvent = () => {
  const { token } = useSelector((state) => state.auth);
  const [cateogryList, setCategorylist] = useState([]);
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

  const fetCategoryList = async () => {
    try {
      const res = await api.get(category.getCategory);
      setCategorylist(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  useEffect(() => {
    fetCategoryList();
  }, []);

  const disabled = !state.category_id || !state.title || !fileList.length;

  return (
    <LayoutAccount>
      <PageTitle title="Create Service" />
      <div className="grid grid-cols-3 gap-5">
        <div className="mb-5">
          <div className="font-bold mb-2">Select Category</div>
          <Select
            onChange={(value) => setState({ ...state, category_id: value })}
            value={state.category_id}
            className="w-full"
            size="large"
            placeholder="Select Category"
          >
            {cateogryList.map((ct) => (
              <Select.Option key={ct?.id}>{ct?.name}</Select.Option>
            ))}
          </Select>
        </div>
        <EventInput
          label="Title"
          placeholder="Service Name"
          value={state.title}
          onChange={(e) => setState({ ...state, title: e.target.value })}
        />
      </div>
      <div>
        <div className="font-bold mb-2">
          Sample Images <span>(max 5)</span>
        </div>
        <Upload
          action="http://localhost:8000/api/file-upload"
          headers={{ Authorization: `Bearer ` + token }}
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          beforeUpload={(file) => console.log(file)}
          maxCount={5}
        >
          {fileList.length >= 5 ? null : (
            <div>
              <div
                style={{
                  marginTop: 8,
                }}
              >
                <i className="fas fa-upload"></i> Upload
              </div>
            </div>
          )}
        </Upload>
        <div className="text-end">
          <EventButton
            btnText="Create"
            className="event-btn-primary"
            disabled={disabled || loading}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </LayoutAccount>
  );
};

export default CreateEvent;
