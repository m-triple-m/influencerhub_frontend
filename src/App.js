import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green, purple } from '@material-ui/core/colors';
import Admin from './components/admin';
import ManageUser from './components/admin/manageuser';
import UserDashboard from './components/influencer';
import Main from './components/authentication';
import ViewPage from './components/viewPage';
import Home from './components/home';
import Influence from './components/influencer/influence';



function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[500],
      },
    },
    transitions: {
      duration: {
        shortest: 100,
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserProvider>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/main">
            <Main />
          </Route>

          <Route path="/admin/manageuser">
            <ManageUser />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/influencer">
            <UserDashboard />
          </Route>

          <Route path="/profile/:id">
            <Influence />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;