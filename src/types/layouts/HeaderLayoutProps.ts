import LayoutProps from './LayoutProps';

interface HeaderLayoutPropsStyles {
    header?: object,
    title?: object
}

interface HeaderLayoutProps extends LayoutProps {
    title?: string,
    styles?: HeaderLayoutPropsStyles
}

export default HeaderLayoutProps