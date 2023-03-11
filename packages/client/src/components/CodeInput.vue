<template>
    <div
        class="border-4 flex flex-col border-green-500 bg-gray-600 w-[500px] h-[500px]"
    >
        <h1 class="font-bold text-white text-3xl">CODE INPUT</h1>
        <textarea
            type="text"
            name="code-input"
            id="code_input"
            v-model="codeInput"
            class="text-black resize"
        ></textarea>
        <button
            @click.prevent="handleSubmit"
            class="bg-green-500 rounded-md px-8 py-4 my-4"
        >
            Submit
        </button>
    </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
    name: "CodeInput",
    data() {
        return {
            codeInput: "This is some code",
        };
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post("http://localhost:3000/api", {
                code: this.codeInput,
                taskPrompt: "Debug"
            });
            console.log(response);
        },
    },
};
</script>
<style scoped></style>
