import React from "react";
import {ReactNode} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "../../store/index";
import SignInForm from "../login/SignInForm";
import SignUpForm from "../login/SignUpForm";
import Main from "../Main/Main";

interface Props {
    children: ReactNode;
}

const Providers = ({children}: Props) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
                <SignInForm/>
                <SignUpForm/>
                <Main/>
            </BrowserRouter>
        </Provider>
    );
};

export default Providers;
