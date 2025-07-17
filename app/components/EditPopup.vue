<template>
    <div class="overlay" @mousedown="$emit('cancel')">
        <form class="overlay-popup" @mousedown.stop @submit.prevent="submit">
            <div class="overlay-popup-title">Edit</div>
            <div class="overlay-popup-subtitle">Edit your todo</div>
            <div class="overlay-popup-input">
                <text-input-normal v-model="inputValue"/>
            </div>
            <div class="overlay-popup-buttons">
                <button-normal label="Cancel" @click="$emit('cancel')" type="button"/>
                <button-normal label="Done" type="submit" />
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    value: {
        type: String,
        default: ''
    }
});
const emit = defineEmits(['submit', 'cancel']);
const inputValue = ref(props.value);
function submit() {
    emit('submit', inputValue.value);
}
</script>

<style lang="scss">
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    /* semi-transparent black */
    backdrop-filter: blur(5px);
    /* blur the background */
    z-index: 10;

    &-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #0b0b0b;
        padding: 1.5rem;
        border-radius: 8px;
        z-index: 20;
        min-width: 400px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

        &-title {
            font-size: 44px;
        }

        &-subtitle {
            padding-left: 0.2rem;
            font-size: 18px;
            color: rgb(190, 190, 190);
        }

        &-input {
            padding: 1rem 0;
        }

        &-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
        }
    }
}
@media (max-width: 480px) {
.overlay{
    &-popup{
        padding: 1;
        min-width: 0;
        width: calc(100vw - 3rem);
    }
}
}
</style>