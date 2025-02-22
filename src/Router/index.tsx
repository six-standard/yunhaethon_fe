import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as _ from "../Pages";
import {useAuthService} from "@/utils/auth/useAuthService.ts";

export const Router = () => {
  useAuthService()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kiosk" Component={_.Kiosk} />
        <Route path="/mobile" Component={_.StartPage} />
        <Route path="/mobile/login" Component={_.Login} />
        <Route path="/mobile/inputInfo" Component={_.InputInfo} />
        <Route path="/mobile/home" Component={_.Home} />
        <Route path="/mobile/films" Component={_.Films} />
        <Route path="/mobile/store" Component={_.Buy} />
        <Route path="/mobile/notifications" Component={_.Notice} />
        <Route path="/mobile/code" Component={_.Code} />
        <Route path="/mobile/profile" Component={_.Profile} />
        {/*<Route path="/Mobile/write" Component={_.Write} />*/}
      </Routes>
    </BrowserRouter>
  );
};
