<template>
    <div
        class="w-full h-full bg-gray-800 flex flex-col justify-center justify-items-center"
    >
        <Code-Input></Code-Input>
        <Code-Output></Code-Output>
    </div>
</template>

<script lang="ts">
import CodeInput from "./components/CodeInput.vue";
import CodeOutput from "./components/CodeOutput.vue";
export default {
    name: "App",
    data: () => ({
        counter: 0,
    }),
    methods: {
        increment() {
            this.counter += 1;
            // @ts-ignore
            vscode.postMessage({
                message:
                    "extension can listen to vue events by using postMessage method!",
            });
        },
    },
    components: { CodeInput, CodeOutput },
};
</script>
