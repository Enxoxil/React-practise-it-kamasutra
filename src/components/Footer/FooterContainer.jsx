import React from "react";
import Footer from "./Footer.jsx";
import { connect } from "react-redux";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer.js";

class FooterContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((response) => {
               
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, { setAuthUserData })(FooterContainer);
