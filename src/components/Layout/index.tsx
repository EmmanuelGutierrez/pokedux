import { Alert, AlertTitle, Collapse } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { clearError } from "../../redux/actions";
import { RootState } from "../../redux/store";
import { Menu } from "../Menu";
import "./Layout.css";
const Layout = () => {
  const errorMessage = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  };
  return (
    <div>
      <Menu />
      <Collapse in={errorMessage.length > 0}>
        <Alert severity="error" onClose={handleDismiss}>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      </Collapse>
      <div className="Layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
