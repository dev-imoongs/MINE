// hooks/mutation.js
import { useMutation } from "react-query";
import api from "../services/api";

const useApiMutation = (endpoint, method = "post", config = {}) => {
  const mutation = useMutation(
    (data) => {
      return api({
        method: method,
        url: endpoint,
        data: data, // POST, PUT 요청 시 전송할 데이터
        ...config, // 추가적인 설정
      });
    },
    {
      onSuccess: (data) => {
        console.log("API call succeeded:", data);
      },
      onError: (error) => {
        console.log("API call failed:", error);
      },
    }
  );

  return mutation;
};

export default useApiMutation;
