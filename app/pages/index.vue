<template>
    <div class="container">
        <div class="container-hello">
            Tasks
        </div>
        <form class="container-input" @submit.prevent="addTodo">
            <TextInputLarge v-model="title" placeholder="Add new task" />
            <ButtonLarge label="Create" :disabled="!title" />
        </form>
        <div class="container-todos" v-for="todo in todos" :key="todo._id">
            <Todo :title="todo.title" :done="todo.completed" @edit="openPopup(todo._id, todo.title)"
                @delete="deleteTodo(todo._id)" @checkbox-change="editDoneTodo(todo._id, !todo.completed)" />
        </div>
        <transition name="fade">
            <EditPopup class="popup" v-if="showPopup" :value="popupValue" @submit="handleTodoEdit"
                @cancel="closePopup()" />
        </transition>
    </div>
</template>

<script setup lang="ts">
import type { Todo } from '~/types';
const { data: todos, refresh } = await useAsyncData<Todo[]>('todos', () =>
    $fetch('/api/getAll')
)
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
    refresh();
    title.value = '';
}
async function deleteTodo(id: string) {
    try {
        await $fetch('/api/delete', {
            method: 'POST',
            body: {
                id: id
            }
        })
        refresh()
    } catch (err) {
        console.log("Unable to delte todo, reason: ", err);
    }
}
async function editDoneTodo(id: string, done: boolean) {
    try {
        await $fetch('/api/edit', {
            method: 'POST',
            body: {
                id: id,
                done: done
            }
        })
    } catch (err) {
        console.log('Error updating todo, reason: ', err);
    }
}

// {{ Edit popup }}
const showPopup = ref(false);
const popupId = ref('');
const popupValue = ref('');
function openPopup(id: string, value: string) {
    popupValue.value = value;
    popupId.value = id;
    showPopup.value = true;
}
function closePopup() {
    showPopup.value = false;
    popupId.value = '';
    popupValue.value = '';
}
async function handleTodoEdit(newTitle: string) {
    try {
        await $fetch('/api/edit', {
            method: 'POST',
            body: {
                id: popupId.value,
                title: newTitle
            }
        })
    } catch (err) {
        console.log('Error updating todo, reason: ', err);
    }
    refresh();
    showPopup.value = false;
    popupId.value = '';
    popupValue.value = '';
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

    &-todos {
        width: 80%;
        margin: auto;
        padding: 1rem 0;
    }
}

.popup {
    &-title {
        font-size: 44px;
        text-align: center;
    }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>