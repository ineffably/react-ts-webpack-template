import { ReactNode } from "react";
import { AppState, ProviderState } from "../types/app-types";
export declare const emptyState: AppState;
export declare const AppContext: import("react").Context<ProviderState<any>>;
export interface StateProviderProps {
    children?: ReactNode | ReactNode[];
    initState?: AppState;
}
export declare const StateProvider: ({ children, initState }: StateProviderProps) => import("react/jsx-runtime").JSX.Element;
