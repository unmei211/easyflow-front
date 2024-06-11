import { Routes, Route } from "react-router";
import PublicRoute from "../../routes/PublicRoute.tsx";
import IntroductionPage from "../../pages/introduction/IntroductionPage.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<IntroductionPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
