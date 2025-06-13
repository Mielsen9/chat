import React from "react";
import * as s from "./App.module.scss";
import {Outlet} from "react-router-dom";

// App
const App:React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default App;