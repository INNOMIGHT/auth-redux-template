import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../Hooks/redux-hooks";

const ProtectedLayout = () => {
    const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  
    if (!basicUserInfo) {
      return <Navigate replace to={"/login"} />;
    }
  
    return (
      <>
        <Outlet />
      </>
    );
  };


export default ProtectedLayout;