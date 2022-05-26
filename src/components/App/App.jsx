import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import SectionOne from "../SectionOne/SectionOne.jsx";
import SectionTwo from "../SectionTwo/SectionTwo.jsx";
import UsersContainer from '../Users/UsersContainer.jsx';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header names="Reactive course" data="Data" />
                <div className="container">
                    <Route path="/SectionOne" component={SectionOne}/>
                    <Route path="/SectionTwo" component={SectionTwo}/>
                    <Route path="/Users" render={ () => <UsersContainer />}/>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
