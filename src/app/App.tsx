import React, {useContext, useState} from 'react';
import  { Suspense } from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "pages/AboutPage/ui/AboutPage.async";
import {MainPageAsync} from "pages/MianPage/ui/MainPage.async";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MianPage";



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={"...Loading"}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;

