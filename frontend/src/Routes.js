import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home"
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup"
import NewNote from "./containers/NewNote"
import Settings from "./containers/Settings";

export default function Links() {
    return(
        //renders first matching route defined within it
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path = "/signup" element = {<Signup />}/>
            <Route path = "/newnote" element = {<NewNote />}/>
            <Route path = "/settings" element = {<Settings />}/>
            <Route path="*" element={<NotFound />} />;
        </Routes>
    )
}