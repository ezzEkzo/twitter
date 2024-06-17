import {classNames} from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss"
import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const { t, i18n } = useTranslation("translation")

    const toggle = () => {
        i18n.changeLanguage( i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
            <Button
                className={classNames(styles.LangSwitcher, {}, [className])}
                onClick={toggle}
                theme={ThemeButton.CLEAR}
            >
                {t("Язык")}
            </Button>
    );
};

export default LangSwitcher;
