import {classNames} from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            className={classNames(styles.AppLink, {theme}, [className , styles[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
