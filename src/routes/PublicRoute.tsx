import {Outlet} from "react-router-dom";
import PublicLayout from "../shared/ui/layout/public/PublicLayout.tsx";

const PublicRoute = () => {
    return (
        <PublicLayout>
            <Outlet/>
        </PublicLayout>
    )
};

export default PublicRoute;
