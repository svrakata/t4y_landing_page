import { Icon } from "@tabler/icons-react";

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

export interface SectionProps {}

export enum EMenuDestination {
    home = "/",
    whatWeDo = "/what-we-do",
    gptSolutions = "/gpt-solutions",
    industryApplications = "/industry-applications",
    zmeiSolutions = "/zmei-solutions",
    contact = "/contact",
    pricing = "/pricing",
}

export interface IProductFeature {
    icon?: Icon;
    label: string;
    description: string;
}

export interface IProduct {
    title: string;
    description: string;
    features?: IProductFeature[];
    image: string;
    id: string;
}