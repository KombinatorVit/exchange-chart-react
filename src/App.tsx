import React from 'react';
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./pages/auth";
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import LayoutComponent from "./components/Layout";
import WatchlistPage from "./pages/watchlist";
import HomePage from "./pages/home";
import SettingsPage from "./pages/settings";
import NewsPage from "./pages/news";
import AuthRootPage from "./pages/auth";
import SingleAssetPage from "./pages/single-asset";


function App() {

    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <Routes>
                        <Route element={<LayoutComponent/>}>
                            <Route element={<PrivateRoute/>}>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/watchlist" element={<WatchlistPage/>}/>
                                <Route path="/news" element={<NewsPage/>}/>
                                <Route path="/single/:id" element={<SingleAssetPage/>}/>
                            </Route>
                            <Route path="login" element={<AuthRootPage/>}/>
                            <Route path="register" element={<AuthRootPage/>}/>
                        </Route>

                    </Routes>


                </div>

            </ThemeProvider>

        </ColorModeContext.Provider>
    );
}

export default App;
