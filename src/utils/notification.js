import { notification } from "antd";

notification.config({
  placement: "bottomRight",
  bottom: 50,
  duration: 3,
});

export const notify = (data, refetch, clearState) => {
  if (data?.success) {
    notification.success({
      message: data?.msg || "Request success!",
    });
  } else {
    notification.warning({
      message: data?.msg || "Request failed!",
    });
  }

  if (typeof refetch === "function") {
    refetch();
  }
  if (typeof refetch === "function") {
    clearState();
  }
};
