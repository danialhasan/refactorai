<template>
    <div class="border-2 border-sky-500">
        <h1 class="font-bold text-white text-3xl">CODE INPUT</h1>
        <textarea
            type="text"
            name="code-input"
            id="code_input"
            v-model="codeInput"
            class="text-black"
        ></textarea>
    </div>
</template>
<script>
export default {
    name: "CodeInput",
    data() {
        return {
            codeInput: "This is some code",
        };
    },
    methods: {},
};
</script>
<style scoped></style>
