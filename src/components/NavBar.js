import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Heroes from "./Heroes";

export default function NavBar(){
    return (
        <div>
            <Switch>

                <Route path = "/heroes">
                    < Heroes/>
                </Route>

                <Route to="/directors">
                    {/* <Directors /> */}
                </Route>
                <Route to="/actors">
                    {/* <Actors /> */}
                </Route>
                <Route exact path="/">
                    <App />
                </Route>

    
            </Switch>  
        </div> 
    )
}