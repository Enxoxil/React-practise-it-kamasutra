import Header from "../Header/Header.jsx";
import FooterContainer from "../Footer/FooterContainer.jsx";
import ProfileContainer from "../Profile/ProfileContainer.jsx";
import Messages from "../Messages/Messages.jsx";
import UsersContainer from "../Users/UsersContainer.jsx";
import React from "react";
import { Route } from "react-router-dom";
import Login from "../../Login/Login.jsx";
import {getUserProfile} from '../../redux/profile-reducer.js'
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import { compose } from "redux";
class App extends React.Component {
    componentDidMount() {
        // this.props.getUserProfile();
    }
    render() {
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

export default compose(
    withRouter,
    connect(null, {getUserProfile}))(App);
