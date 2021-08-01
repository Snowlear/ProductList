
import boxStyles from '../../styles/Box.module.css'

export default function Box({ children, styles, isClear = false }: BoxProps) {
    return (<div className={(isClear ? boxStyles.clearBox : boxStyles.box) + (styles === undefined ? "" : " " + styles)}>
        {children}
    </div>);
}

interface BoxProps {
    children: any;
    isClear?: boolean;
    styles?: string;
}