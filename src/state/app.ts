import { create } from "zustand";
import { devtools } from "zustand/middleware";
import config from "../assets/config.json";
import { IAppConfig } from "../types";

interface IAppState {
    appConfig: IAppConfig;
    setAppConfig: (config: IAppConfig) => void;
}

export const useAppState = create<IAppState>()(
    devtools((set) => ({
        appConfig: config as IAppConfig,
        setAppConfig: (config: IAppConfig) => set({ appConfig: config }),
    }))
);
