<template>
    <div class="container">
        <div class="container-hello">
            Tasks
        </div>
        <form class="container-input" @submit.prevent="addTodo">
            <TextInput v-model="title" placeholder="Add new task" />
            <ButtonLarge label="Create" :disabled="!title"></ButtonLarge>
        </form>
        <div class="container-todos">

        </div>
    </div>
</template>

<script setup lang="ts">
const title = ref('');

async function addTodo() {
    try {
        await $fetch('/api/create', {
            method: 'POST',
            body: {
                title: title.value
            }
        }
        );
        console.log("Added todo");
    } catch (err) {
        console.log("Unable to add todo, reason:", err);
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 3rem 0;

    &-hello {
        font-size: 48px;
        text-align: center;
    }

    &-input {
        padding: 1rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    &-todos{
        width: 100%;
    }
}
</style>