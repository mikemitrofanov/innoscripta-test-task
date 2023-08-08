import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import * as React from "react";
import { Outlet } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCsrf, getProfileRequest} from "../store/auth/actions.ts";
import {getCategoriesRequest, getSourcesRequest} from "../store/articles/actions.ts";

const Layout = (defaultTheme) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCsrf())

        if (window.localStorage.getItem('token')) {
            dispatch(getProfileRequest());
            dispatch(getCategoriesRequest());
            dispatch(getSourcesRequest());
        }
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" />
                <Outlet />
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </ThemeProvider>
    );
}

export default Layout;