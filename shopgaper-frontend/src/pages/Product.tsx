import {ThemeProvider} from "@mui/material/styles";
import {defaultTheme} from "./Home";
import CssBaseline from "@mui/material/CssBaseline";
import React, {useState} from "react";
import {Box, Button, Container} from "@mui/material";
import {Link} from "react-router-dom";
import Chart from "react-apexcharts";

export function Product() {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                foreColor: '#ccc',
                toolbar: {
                    show: false
                },
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
            tooltip: {
                theme: 'dark'
            },
            grid: {
                borderColor: "#1b1b1e",
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    });
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
                    <Link to="/">Back</Link>
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="bar"
                        width="500"
                    />
                    <Button
                        component={Link}
                        to="/product"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Start tracking
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
