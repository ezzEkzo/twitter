import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss"
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const { t, i18n } = useTranslation()

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={classNames(styles.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(styles.mainLink)}>{t("Главная страница")}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t("О сайте")}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;



