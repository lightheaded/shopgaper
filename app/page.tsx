'use client';

import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import React from "react";

const defaultTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

export default function Home() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            link: data.get('link'),
            email: data.get('email')
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Shopgaper
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="link"
                            label="Product link"
                            name="link"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Start tracking
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
