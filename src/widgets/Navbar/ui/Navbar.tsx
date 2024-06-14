import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss"
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={classNames(styles.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(styles.mainLink)}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};

export default Navbar;



