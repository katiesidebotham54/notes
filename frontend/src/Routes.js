import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home"
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default function Links() {
    return(
        //renders first matching route defined within it
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />;
        </Routes>
    )
}