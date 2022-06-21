import Header from "../Header/Header.jsx";
import FooterContainer from "../Footer/FooterContainer.jsx";
import UsersContainer from "../Users/UsersContainer.jsx";
import React from "react";
import { Route } from "react-router-dom";
import Login from "../../Login/Login.jsx";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { initializeApp } from "../../redux/app-reducer.js";
import Preloader from "../common/preloader/Preloader.jsx";
import {withSuspense} from '../../hoc/withSuspense.jsx';
const ProfileContainer = React.lazy(() =>
    import("../Profile/ProfileContainer.jsx")
);
const Messages = React.lazy(() => import("../Messages/Messages.jsx"));

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
                        render={withSuspense(ProfileContainer)}
                    />
                    <Route
                        path="/messages"
                        render={withSuspense(Messages)}
                    />
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
export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);
