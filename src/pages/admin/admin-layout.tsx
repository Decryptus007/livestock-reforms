/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import { RootState } from "@/store";
import { ReactNode, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useGetAuthUser } from "@/lib/useGetAuthUser";
// import { updateAdminData } from "@/store/slices/admin/adminDataSlice";
// import SnackbarComp from "../../../components/Toast";
import LoadingPage from "../../components/LoadingPage";
// import { useMgtKeys } from "../../utils/useMgtKeys";
import { useLocation } from "react-router-dom";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  // const dispatch = useDispatch();
  // const { adminData } = useSelector((state: any| unknown) => state.adminData);
  // const { removeOrionKeys, getOrionKeys } = useMgtKeys();
  // const { handleSnack, snackBarOpen, setSnackBarOpen } =
  //   useGetAuthUser("Admin");

  useEffect(() => {
    sessionStorage.setItem("returnTo", pathname);
  }, [pathname]);

  // useEffect(() => {
  //   const checkData: number | undefined = setInterval(() => {
  //     const isKeyPresent = getOrionKeys();

  //     if (!isKeyPresent) {
  //       removeOrionKeys();
  //       // dispatch(updateAdminData(null));
  //       location.replace(location.origin + "/signin");
  //     }
  //   }, 1000);

  //   return () => clearInterval(checkData);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      {true ? children : <LoadingPage />}

      {/* <SnackbarComp
        snackBarOpen={snackBarOpen}
        setSnackBarOpen={setSnackBarOpen}
        alert={handleSnack.alert}
        message={handleSnack.message}
      /> */}
    </>
  );
}
