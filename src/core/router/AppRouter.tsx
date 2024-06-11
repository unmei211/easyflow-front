import { Routes, Route } from "react-router";
import PublicRoute from "../../routes/PublicRoute.tsx";
import MainPage from "../../pages/main/MainPage.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
