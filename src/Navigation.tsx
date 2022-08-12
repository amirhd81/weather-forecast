import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { SearchWeatherForecast } from "./containers";
import { Spinner } from "./components";
import { useAppSelector } from "./redux/config";
import { MainModal } from "./components/common/MainModal/MainModal";

//example how to manage errors and messages globally
export const Navigation: FC = () => {
  const globalState = useAppSelector((state) => state.global);
  const { loading, loadingColor, mainModal } = globalState;

  return (
    <>
      <Spinner show={loading} spinnerColor={loadingColor} />
      <MainModal content={mainModal.content} isOpen={mainModal.open} onClose={mainModal.onClose} />
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
