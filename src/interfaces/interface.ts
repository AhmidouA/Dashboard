export interface ColorModeContextType {
    toggleColorMode: () => void;
}

export interface SideBarItemType {
    title: string;
    to: string;
    icon: React.ReactNode;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}