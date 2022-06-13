import Header from "../Header/Header.jsx";
import FooterContainer from "../Footer/FooterContainer.jsx";
import ProfileContainer from "../Profile/ProfileContainer.jsx";
import Messages from "../Messages/Messages.jsx";
import UsersContainer from "../Users/UsersContainer.jsx";
import React from "react";
import { Route } from "react-router-dom";
import Login from "../../Login/Login.jsx";
// import {getAuthUser} from '../../redux/auth-reducer.js'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { initializeApp } from "../../redux/app-reducer.js";
import Preloader from "../common/preloader/Preloader.jsx";
class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className="container">
                <Header names="Reactive Header" data="Data" />
                <div className="container">
                    <Route path="/login" render={() => <Login />} />
                    <Route
                        path="/profile/:userId?"
                        render={() => <ProfileContainer />}
                    />
                    <Route path="/messages" render={() => <Messages />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                </div>
                <FooterContainer />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});
export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
