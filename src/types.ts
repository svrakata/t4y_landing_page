export enum EHeaderMenuType {
    scroll = "scroll",
    link = "link",
}

export interface HeaderMenuLink {
    label: string;
    type: EHeaderMenuType.link;
    link: string;
}

export interface HeaderMenuScroll {
    label: string;
    type: EHeaderMenuType.scroll;
    scrollTo: string;
}

export type HeadeMenu = HeaderMenuLink | HeaderMenuScroll;

export interface HeaderMenu {
    label: string;
    to: string;
}

export interface SectionItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    type: "simple";
    imageUrl?: string;
}

export interface Section {
    id: string;
    label: string;
    to: string;
    title?: string;
    description?: string;
    icon?: string;
    items?: SectionItem[];
    columns?: number;
}

export interface AppLayout {
    headerHeight: number | string;
    footerHeight: number;
    containerWidth: number;
}

export interface IAppConfig {
    title: string;
    abrievation: string;
    slogan: string;
    description: string[];
    layout: AppLayout;
    logoLight: string;
    logoDark: string;
    headerMenus: HeaderMenu[];
    sections: Section[];
}