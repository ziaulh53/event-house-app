import React, { useEffect, useState } from "react";
import { EventInput } from "../Shared/EventInput";
import { Select, Spin, Upload } from "antd";
import { api, category } from "../../api";
import { useSelector } from "react-redux";

export const EventForm = ({
  state,
  setState,
  fileList = [],
  setFileList,
  fromEdit = false,
}) => {
  const [cateogryList, setCategorylist] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [loader, setLoader] = useState(false);

  const handleChange = ({ fileList: newFileList, file }) => {
    setFileList(newFileList);
    if (fromEdit && file.status === "done") {
      let newFileArray = [];
      newFileList.forEach((element) => {
        if (typeof element === "string") {
          newFileArray.push(element);
        } else {
          newFileArray.push(element?.response?.url);
        }
      });
      setFileList(newFileArray);
    }
  };

  const fetCategoryList = async () => {
    setLoader(true);
    try {
      const res = await api.get(category.getCategory);
      setCategorylist(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  const handleDeleteImage = (idx) => {
    let urlList = [...fileList];
    urlList.splice(idx, 1);
    setFileList([...urlList]);
  };

  useEffect(() => {
    fetCategoryList();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="mb-5">
          <div className="font-bold mb-2">Select Category</div>

          <Spin spinning={loader}>
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
          </Spin>
        </div>
        <EventInput
          label="Title"
          placeholder="Service Name"
          value={state.title}
          onChange={(e) => setState({ ...state, title: e.target.value })}
        />
      </div>
      <div className="font-bold mb-2">
        Sample Images <span>(max 5)</span>
      </div>
      <div className="grid grid-cols-5 gap-y-4">
        {fromEdit &&
          fileList?.map((url, idx) => (
            <div
              key={url}
              className=" h-[102px] w-[102px] rounded-[8px] mr-5 relative group"
            >
              <img src={url} className="w-full h-full rounded-[8px]" />
              <div className="hidden group-hover:flex absolute w-full h-full top-0 bg-gray-500 opacity-90 rounded-[8px] justify-center items-center">
                <span
                  className="text-red-600"
                  onClick={() => handleDeleteImage(idx)}
                >
                  <i className="fas fa-trash"></i>
                </span>
              </div>
            </div>
          ))}

        {fileList.length >= 5 ? null : (
          <Upload
            action="http://localhost:8000/api/file-upload"
            headers={{ Authorization: `Bearer ` + token }}
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            // beforeUpload={(file) => console.log(file)}
            maxCount={5}
            showUploadList={!fromEdit}
          >
            <div>
              <div
                style={{
                  marginTop: 8,
                }}
              >
                <i className="fas fa-upload"></i> Upload
              </div>
            </div>
          </Upload>
        )}
      </div>
    </div>
  );
};
