import type { PageProps } from "@/types";
import type { MenuItem } from "@/types/menu";

export const getMainMenuItems = (p: PageProps): MenuItem[] => {
    return [
        {
            key: "dashboard",
            label: "Dashboard",
            routeName: "dashboard",
            visibleWhen: (props) => !!props.auth?.user,
            activeWhen: () => route().current("dashboard"),
        },
        {
          key: "profile",
          label: "Profile",
            routeName: "profile.edit",
          visibleWhen: () => true,
          activeWhen: () => route().current("games.*"),
        },
    ];
};
