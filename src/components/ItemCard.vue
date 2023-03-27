<template>
    <div 
        :key="item.id"
        class="item"
        @click="selectItem(item.id)"
    >
        <span>{{ item.name }}</span>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  selectable: {
    type: Boolean,
    default: true,
  }
});

const emit = defineEmits(['select']);


function selectItem (id) {
    if (!props.selectable ) {
        return;
    }
    emit('select', id);
}

</script>

<style lang="scss" scoped>
.item {
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }

}
</style>