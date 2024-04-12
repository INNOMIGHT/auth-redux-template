import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../Hooks/redux-hooks";

const DefaultLayout = () => {
    const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  
    if (basicUserInfo) {
      return <Navigate replace to={"/"} />;
    }
  
    return (
      <>
        <Outlet />
      </>
    );
  };


export default DefaultLayout;
