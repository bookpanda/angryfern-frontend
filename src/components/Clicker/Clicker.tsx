import { useAppDispatch } from "@/store/hooks";
import { increment } from "./clickerSlice";

export const Clicker = () => {
  const dispatch = useAppDispatch();

  const onClicked = () => {
    dispatch(increment());
  };

  return <div onClick={onClicked}></div>;
};
