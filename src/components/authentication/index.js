import { Route, Switch, useRouteMatch } from "react-router";
import Header from "../header";
import Login from "./login";
import Register from "./register";

const Main = props => {

    let { path, url } = useRouteMatch();

    return (
        <div className="reg-back" style={{ height: '100vh' }}>
            <Header open={false} drawerWidth={0} handleDrawerOpen={() => { }} drawer={false} />

            <div>
                <Switch>
                    <Route path={`${path}/login`} component={Login} />
                    <Route path={`${path}/register`} component={Register} />
                </Switch>

            </div>
        </div>
    )
}

export default Main;