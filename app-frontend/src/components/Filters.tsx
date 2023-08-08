import * as React from 'react';
import Toolbar from "@mui/material/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {handleFilterRequest} from "../store/articles/actions.ts";


export default function Filters() {
    const dispatch = useDispatch();
    const { categories, sources } = useSelector(store => store.articles);
    const { filter } = useSelector(store => store.articles);

    const selectCategory = (e, value) => {
        filter.category = value ? value.id : null;
        dispatch(handleFilterRequest({ ...filter }));
    }
    const selectSource = (e, value) => {
        filter.source = value ? value.id : null;
        dispatch(handleFilterRequest({ ...filter }));
    }

    return (
        <React.Fragment>
            <Toolbar >
                <Autocomplete
                    id="categories"
                    sx={{ width: 300 }}
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    onChange={selectCategory}
                    renderInput={(params) => (
                        <TextField {...params} label="Category" margin="normal" />
                    )}
                    renderOption={(props, option, { inputValue }) => {
                        return (
                            <li {...props}>
                                <div>
                                    {option.name}
                                </div>
                            </li>
                        );
                    }}
                />

                <Autocomplete
                    id="source"
                    sx={{ width: 300 }}
                    options={sources}
                    getOptionLabel={(option) => option.name}
                    onChange={selectSource}
                    renderInput={(params) => (
                        <TextField {...params} label="Source" margin="normal" />
                    )}
                    renderOption={(props, option, { inputValue }) => {
                        return (
                            <li {...props}>
                                <div>
                                    {option.name}
                                </div>
                            </li>
                        );
                    }}
                />
            </Toolbar>
        </React.Fragment>
    );
}