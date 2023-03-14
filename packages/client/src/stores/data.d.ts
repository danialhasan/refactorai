import { DefineStore } from "pinia";

export declare const useDataStore: DefineStore<
    "data",
    {
        codeInput: string;
    },
    {
        getCodeInput: () => string;
        postCodeApi: () => Promise<void>;
    }
>;
