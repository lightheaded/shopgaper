import React, {useState} from 'react';
import './Home.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {Link} from "react-router-dom";

export const defaultTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

function Home() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            link: data.get('link'),
            email: data.get('email')
        });
    };

    const [productLink, setProductLink] = useState('https://www.sonos.com/en/shop/move-2');

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
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
                            value={productLink}
                        />
                        <Button
                            component={Link}
                            to="/product"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Search for prices
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    );
}

export default Home;
