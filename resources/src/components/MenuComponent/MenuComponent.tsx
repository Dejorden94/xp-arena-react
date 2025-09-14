// resources/src/components/MenuComponent/MenuComponent.tsx
import { usePage } from "@inertiajs/react";
import NavLink from "@/components/NavLink";
import ResponsiveNavLink from "@/components/ResponsiveNavLink";
import type { MenuItem } from "@/types/menu";
import type { PageProps } from "@/types";

type Props = {
    items: MenuItem[];
    variant: "desktop" | "mobile";
};

export default function MenuComponent({ items, variant }: Props) {
    const props = usePage<PageProps>().props;

    const visibleItems = items.filter((i) =>
        i.visibleWhen ? i.visibleWhen(props) : true
    );

    const renderItem = (item: MenuItem) => {
        const href = item.routeName
            ? route(item.routeName, item.routeParams)
            : item.href ?? "#";

        const active = item.activeWhen
            ? item.activeWhen(props)
            : item.routeName
                ? route().current(item.routeName)
                : false;

        if (variant === "desktop") {
            return (
                <NavLink key={item.key} href={href} active={active}>
                    {item.label}
                </NavLink>
            );
        }

        return (
            <ResponsiveNavLink key={item.key} href={href} active={active}>
                {item.label}
            </ResponsiveNavLink>
        );
    };

    return <>{visibleItems.map(renderItem)}</>;
}
