import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import * as React from "react";
import { Outlet } from "react-router-dom";

const Layout = (defaultTheme) => (
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

export default Layout;