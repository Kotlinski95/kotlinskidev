import React from 'react';
import Link from '../customLink'
import './index.scss'

type propsType = {
    className?: string
    alt: string
    loading?: "lazy" | "eager"
    title: string
    src: string
    width: string | number
    height: string | number
    style?: React.CSSProperties
    href?: string
    rel?: string
    target?: string
    role?: string
}

const CustomImage = (props: propsType) => {
    const {
        className = '',
        alt = 'Default alterntive image description',
        loading = 'lazy',
        title = 'Default title',
        src = '',
        width = '0px',
        height = '0px',
        style,
        href,
        rel='noopener',
        target='_blank',
        role,
    } = props;

    const ImageElement = () => {
        return (
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
    };

    return (
        href ?
            <Link
            href={href}
            rel={rel}
            target={target}
            title={title}
            >
                <ImageElement />
            </Link>
            : <ImageElement />
    )
}

export default CustomImage;