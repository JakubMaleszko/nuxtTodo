<template>
    <button class="btn">
        {{ label }}
    </button>
</template>
<script lang="ts" setup>
defineProps({
    label: String
})
</script>

<style lang="scss" scoped>
.btn {
    font-size: 16px;
    width: fit-content;
    background-color: #fff;
    color: #000;
    height: 3rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    border: none;
    transition: 0.2s;
}

.btn:hover {
    background-color: #ddd;
}

.btn:active {
    background-color: #ccc;
    transform: scale(0.985);
}
.btn:disabled{
    background-color: #666;
}
.btn:disabled:hover{
    background-color: #666;
}
.btn:disabled:active{
    background-color: #666;
    transform: scale(1);
}
</style>