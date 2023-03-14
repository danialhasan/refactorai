import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
    state: () => ({
        codeInput: "",
    }),
    getters: {
        getCodeInput: (state) => {
            return state.codeInput;
        },
    },
    actions: {
        async postCodeApi() {
            const response = await axios.post("http://localhost:3000/api", {
                code: this.codeInput,
                taskPrompt: "Debug",
            });
            console.log("TEsting");
            console.log(response);
        },
    },
});
