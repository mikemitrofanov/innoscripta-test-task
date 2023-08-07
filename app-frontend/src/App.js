import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import {AppRoute} from "./routes/routes.tsx";

function App() {
  const history = createBrowserHistory();

  return (
      <Router history={history}>
          <AppRoute />
      </Router>
  );
}

export default App;
