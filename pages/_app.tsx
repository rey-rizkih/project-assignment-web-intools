import React from "react";
import { AppProps } from "next/app";

import "@styles/global.css";
import "@styles/vars.css";
import { ThemeProvider } from "@material-ui/core";
import themes from "@themes";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={themes.default}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
