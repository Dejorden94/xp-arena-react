import {PageProps} from "@/types/index";

export type MenuItem = {
    key: string;
    label: string;
    routeName?: string;
    href?: string;
    routeParams?: Record<string, unknown>;
    visibleWhen?: (p: PageProps) => boolean;
    activeWhen?: (p: PageProps) => boolean;
    children?: MenuItem[];
};
