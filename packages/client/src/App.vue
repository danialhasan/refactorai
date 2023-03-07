<template>
    <div class="centered-screen">
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

<style scoped>
.centered-screen {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.text-larger {
    font-size: x-large;
    margin-bottom: 1rem;
}
.text-large {
    font-size: large;
    margin-bottom: 1rem;
}
</style>
