import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as _ from "../Pages";
// import {useAuthService} from "@/utils/auth/useAuthService.ts";

export const Router = () => {
  // useAuthService()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kiosk" Component={_.Kiosk} />
        <Route path="/mobile" Component={_.StartPage} />
        <Route path="/mobile/login" Component={_.Login} />
        <Route path="/mobile/inputInfo" Component={_.InputInfo} />
        <Route path="/mobile/home" Component={_.Main} />
        <Route path="/mobile/films" Component={_.Films} />
        <Route path="/mobile/store" Component={_.Buy} />
        <Route path="/mobile/notifications" Component={_.Notice} />
        <Route path="/mobile/code" Component={_.Code} />
        {/* <Route path="/mobile/write" Component={_.Write} /> */}
        <Route path="/mobile/album" Component={_.Album} />
        <Route path="/mobile/detail" Component={_.Detail} />
        <Route path="/mobile/replace" Component={_.Replace} />
      </Routes>
    </BrowserRouter>
  );
};
