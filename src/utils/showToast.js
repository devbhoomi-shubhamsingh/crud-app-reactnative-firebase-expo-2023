import Toast from "react-native-toast-message";

export const showSuccessToast = (message) => {
  Toast.show({
    type: "success",
    text1: "Success",
    text2: message,
    position: "top",
  });
};

export const showErrorToast = (message) => {
  Toast.show({
    type: "error",
    text1: "Failure",
    text2: message,
    position: "top",
  });
};
