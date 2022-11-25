import {JOB_DETAILED_ROUTE, JOB_HOME_ROUTE} from "./const";
import JobHome from "./components/JobHome";
import JobDetailed from "./components/JobDetailed";

export const publicRoutes=[
    {
        path: JOB_HOME_ROUTE,
        Component: JobHome
    },
    {
        path: JOB_DETAILED_ROUTE,
        Component:JobDetailed
    }
]