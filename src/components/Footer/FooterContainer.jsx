import React from "react";
import Footer from "./Footer.jsx";
import { connect } from "react-redux";
import {getAuthUser } from "../../redux/auth-reducer.js";

class FooterContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
        return (
            <>
                <Footer {...this.props} />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUser })(FooterContainer);
