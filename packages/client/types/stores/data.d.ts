export const useDataStore: import("pinia").StoreDefinition<"data", {
    codeInput: string;
}, {
    getCodeInput: (state: {
        codeInput: string;
    } & {}) => string;
}, {
    postCodeApi(): Promise<void>;
}>;
