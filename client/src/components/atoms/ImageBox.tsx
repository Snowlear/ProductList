
import imageBoxStyles from '../../styles/ImageBox.module.css'

export default function ImageBox({ url, styles }: ImageProps) {
    return (
        <img src={url} className={imageBoxStyles.img + (styles === undefined ? "" : " " + styles)} />
    );
}

interface ImageProps {
    url: string;
    styles?: string;
}