import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveLoginSuccessful } from "../actions/user";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const nickname = sessionStorage.getItem("nickname");
    if (token && nickname) {
      dispatch(saveLoginSuccessful(nickname, token));
    }
  }, [dispatch]);
};

export default useAuth;
