import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'a'> {
    href?: string,
    children?: ReactNode,
    className?: string,
}

const MenuContent = (props: Props) => {
    const { href, children, className, ...rest } = props;
    return (
        <>
            <a href={href} className={className} {...rest}>{children || 'NO-content'}</a>
        </>
    );
}
export default MenuContent;