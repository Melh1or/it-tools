import React, {Fragment, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import { Provider } from 'react-redux'

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogoModal from "./components/logs/AddLogModal";
import EditLogoModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

import store from "./store";

const App = () => {
  useEffect(() => {
    // init materialize JS
    M.AutoInit()
  }, [])

  return (
    <Provider store={store}>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogoModal />
        <EditLogoModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
