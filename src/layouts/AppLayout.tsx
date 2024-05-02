import Loading from "@/components/Loading/Loading";
import { AppDispatch, AppState } from "@/store";
import { getUniversitiesThunk } from "@/store/thunks/universitiesThunks";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AppLayout = ({ children }: PropsWithChildren) => {
  const { loading } = useSelector((state: AppState) => state.universities);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUniversitiesThunk());
  }, []);

  return loading ? <Loading /> : children;
};

export default AppLayout;
