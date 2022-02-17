import Link from '../customLink'
import './index.scss'
import ImageModal from '../imageModal'
import { useState } from 'react'

type propsType = {
    className?: string
    alt: string
    loading?: "lazy" | "eager"
    title: string
    src: string
    width: string | number
    height: string | number
    style?: any
    href?: string
    rel?: string
    target?: string
    role?: string
    modal?: string | boolean
}

const CustomImage: any = (props: propsType) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const {
        className = 'custom-image',
        alt = 'Default alterntive image description',
        loading = 'lazy',
        title = 'Default title',
        src = '',
        width = '0px',
        height = '0px',
        style,
        href,
        rel = 'preload',
        target = '_blank',
        role,
        modal = false
    } = props;

    return (
        href ?
            <Link
                href={href}
                rel={rel}
                target={target}
                title={title}
            >
                <img
                    className={className}
                    style={style}
                    alt={alt}
                    loading={loading}
                    title={title}
                    src={src}
                    width={width}
                    height={height}
                    role={role}
                >
                </img>
            </Link>
            :
            modal ?
                <>
                    <ImageModal open={open}>
                        <>
                            <img
                                className={className}
                                style={style}
                                alt={alt}
                                loading={loading}
                                title={title}
                                src={src}
                                width={width}
                                height={height}
                                role={role}
                                onClick={handleClose}
                                data-modal={modal}
                            >
                            </img>
                            <button className="image-modal-close" onClick={handleClose}>{language.pages.stack.css.close}</button>
                        </>
                    </ImageModal>
                    <img
                        className={className}
                        style={style}
                        alt={alt}
                        loading={loading}
                        title={title}
                        src={src}
                        width={width}
                        height={height}
                        role={role}
                        onClick={handleOpen}
                    >
                    </img>
                </>
                :
                <img
                    className={className}
                    style={style}
                    alt={alt}
                    loading={loading}
                    title={title}
                    src={src}
                    width={width}
                    height={height}
                    role={role}
                >
                </img>
    )
}

export default CustomImage;