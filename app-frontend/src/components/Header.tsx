import * as React from 'react';
import {useNavigate} from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchInput from "./Search.tsx";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../store/auth/actions.ts";

interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps) {
    const { title } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(store => store.auth);
    const token = window.localStorage.getItem('token');

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    onClick={() => navigate('/')}
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                <SearchInput />

                {!token ? (
                    <Button variant="outlined" size="small" onClick={() => navigate('signup')}>
                        Sign up
                    </Button>
                ) : (
                    <Button variant="outlined" size="small" onClick={() => dispatch(logOut())}>
                        Logout
                    </Button>
                )}
            </Toolbar>
        </React.Fragment>
    );
}