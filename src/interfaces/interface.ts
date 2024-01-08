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


export interface FormikForm {
    firstName: string;
    lastName: string;
    email: string;
    contact: number | string;
    address1: string;
    address2: string;
}