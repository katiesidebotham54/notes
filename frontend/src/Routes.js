import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home"
import NotFound from "./containers/NotFound";

export default function Links() {
    return(
        //renders first matching route defined within it
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path="*" element={<NotFound />} />;
        </Routes>
    )
}