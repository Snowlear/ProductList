
import buttonStyles from '../../styles/Button.module.css'

export default function Box({ onClick = () => { }, children, styles, isClear = false }: BoxProps) {
    return (<button onClick={() => onClick()} className={buttonStyles.button + (styles === undefined ? "" : " " + styles)}>
        {children}
    </button>);
}

interface BoxProps {
    onClick?: Function;
    children?: any;
    isClear?: boolean;
    styles?: string;
}