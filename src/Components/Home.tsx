import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../Hooks/redux-hooks"
import { useEffect } from "react";
import { getUser, logout } from "../Slices/authSlice";

export const Home = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
    const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);

    useEffect(() => {
        if (basicUserInfo) {
            dispatch(getUser(basicUserInfo.id));
        }
    }, [basicUserInfo, dispatch]);

    const handleLogout = async () => {
        try {
            await dispatch(logout());
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h1>Home</h1>
            <h4>Name: {userProfileInfo?.name}</h4>
            <h4>Email: {userProfileInfo?.email}</h4>
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}