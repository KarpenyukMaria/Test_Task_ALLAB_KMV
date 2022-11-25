import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes} from "../routes";
import {JOB_HOME_ROUTE} from "../const";

const AppRouter = () => {
    return (
       <Switch>
           {publicRoutes.map(route=>
               <Route component={route.Component} path={route.path} key={route.path} exact={true}/>
           )}
           <Redirect to={JOB_HOME_ROUTE}/>
       </Switch>
    );
};

export default AppRouter;