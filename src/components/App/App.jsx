import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ProfileContainer from "../Profile/ProfileContainer.jsx";
import Messages from "../Messages/Messages.jsx";
import UsersContainer from "../Users/UsersContainer.jsx";
import React from "react";
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <Header names="Reactive Header" data="Data" />
            <div className="container">
                <Route path="/profile" component={ProfileContainer} />
                <Route path="/messages" component={Messages} />
                <Route path="/users" render={() => <UsersContainer />} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
