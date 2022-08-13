import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { SearchWeatherForecast } from "./containers";
import { Spinner } from "./components";
import { useAppDispatch, useAppSelector } from "./redux/config";
import { MainModal } from "./components/common/MainModal/MainModal";
import { CLOSE_MODAL } from "./redux/Reducers";

//example how to manage errors and messages globally
export const Navigation: FC = () => {
  const dispatch = useAppDispatch();
  const globalState = useAppSelector((state) => state.global);
  const { loading, loadingColor, mainModal } = globalState;

  const onRequestClose = () => {
    mainModal.onClose && mainModal.onClose();
    dispatch(CLOSE_MODAL());
  };

  return (
    <>
      <Spinner show={loading} spinnerColor={loadingColor} />
      <MainModal
        content={mainModal.content}
        isOpen={mainModal.open}
        onRequestClose={onRequestClose}
        title={mainModal.title}
      />
      <Routes>
        <Route path="/" element={<SearchWeatherForecast />} />
        <Route
          path="*"
          element={
            <main>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};
