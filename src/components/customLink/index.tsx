import React from 'react';
import './index.scss'


type propsType = {
    className?: string | undefined
    style?: React.CSSProperties | undefined
    href: string | undefined
    children?: any
    referrerpolicy?: React.HTMLAttributeReferrerPolicy
    rel?: string
    target?: string
    title?: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const CustomLink = (props: propsType) => {
    const {
        className,
        children,
        style,
        href = '/',
        referrerpolicy = 'no-referrer',
        rel='noopener',
        target='_blank',
        title='Default anchor tag title',
        onClick
    } = props;

    return (
        <a
            className={className}
            style={style}
            onClick={onClick}
            href={href}
            referrerPolicy={referrerpolicy}
            rel={rel}
            target={target}
            title={title}
            aria-label={title}
        >
            {children}
        </a>

    )
}

export default CustomLink;