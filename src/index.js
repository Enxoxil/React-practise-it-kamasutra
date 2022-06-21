import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        {/* basename={process.env.PUBLIC_URL} -  УРЛ из окружения, HashRouter для работы с УРЛ с Хистори АПИ только он работает с гитхаб страницей*/}
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);
