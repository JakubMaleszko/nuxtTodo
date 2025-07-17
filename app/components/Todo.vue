<template>
    <div class="todo">
        <label class="todo-checkboxWrapper">
            <input class="todo-checkboxWrapper-checkbox" type="checkbox" :checked="done"
                @change="$emit('checkboxChange')">
            <span class="todo-checkboxWrapper-checkmark"></span>
        </label>
        <div class="todo-title">
            {{ title }}
        </div>
        <div class="todoButton todo-edit" @click="$emit('edit')">
            edit
        </div>
        <div class="todoButton todo-delete" @click="$emit('delete')">
            delete
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    done: Boolean
});
const emit = defineEmits(['edit', 'delete', 'checkboxChange'])
</script>

<style lang="scss" scoped>
.todoButton {
    height: 2.5rem;
    padding: 0 1.5rem;
    border-radius: 3rem;
    font-size: 22px;
    display: flex;
    align-items: center;
    transition: 0.2s;
}

.todoButton:hover {
    background-color: #fff;
    color: #000;
}

.todo {
    width: calc(100% - 5rem);
    padding: 1rem 2.5rem;
    min-height: 4rem;
    background-color: #0b0a0b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2rem;

    &-checkboxWrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        font-family: sans-serif;
        color: #fff;
        user-select: none;

        &-checkbox {
            display: none;
        }

        .todo-checkboxWrapper-checkmark {
            position: relative;
            width: 24px;
            height: 24px;
            border: 2px solid #fff;
            border-radius: 4px;
            background-color: black;
            display: inline-block;
            transition: background-color 0.2s ease, border-color 0.2s ease;

            &::after {
                content: "";
                position: absolute;
                left: 7px;
                top: 4px;
                width: 6px;
                height: 12px;
                border: solid #000;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg) scale(0);
                transition: transform 0.2s ease;
            }
        }

        &-checkbox:checked+&-checkmark {
            background-color: white;
            border-color: black;

            &::after {
                transform: rotate(45deg) scale(1);
            }
        }
    }

    &-title {
        width: 80%;
        font-size: 32px;
        padding: 0 1rem;
    }

    &-edit {
        color: #0F52BA;
    }

    &-delete {
        color: #FF3131;
    }
}

@media (max-width: 991.98px) {
    .todo {
        &-title {
            font-size: 24px;
        }
    }
}

@media (max-width: 767.98px) {
    .todoButton {
        height: 2.0rem;
        padding: 0 0.5rem;
        border-radius: 3rem;
        font-size: 16px;
        display: flex;
        align-items: center;
        transition: 0.2s;
    }

    .todo {
        &-title {
            font-size: 20px;
        }

        &-checkboxWrapper {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            font-family: sans-serif;
            color: #fff;
            user-select: none;

            &-checkbox {
                display: none;
            }

            .todo-checkboxWrapper-checkmark {
                position: relative;
                width: 20px;
                height: 20px;
                border: 1px solid #fff;
                &::after {
                content: "";
                position: absolute;
                left: 6px;
                top: 3px;
                width: 6px;
                height: 12px;
                border: solid #000;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg) scale(0);
                transition: transform 0.2s ease;
            }
                
            }
        }
    }
}
</style>
