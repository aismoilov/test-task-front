<template>
  <div class="list">
    <div class="list-wrap" :style="{'grid-template-columns': `repeat(${itemsPerRow}, 1fr)`}">
      <item-card
        v-for="item in items" 
        :key="item.id"
        :item="item"
        @select="selectItem(item.id)"
      />
    </div>
    <div v-if="itemsLimit">selected: {{ items.length }}/{{ itemsLimit }}</div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import ItemCard from "./ItemCard.vue";

defineProps({
  items: {
    type: Array,
    required: true
  },
  itemsPerRow: {
    type: Number,
    default: 4,
  },
  itemsLimit: {
    type: Number,
    required: false,
  }
});

const emit = defineEmits(['select']);


function selectItem (id) {
  emit('select', id);
}

</script>

<style lang="scss" scoped>
.list {
  border: 1px solid #ccc;
  padding: 20px;
  width: calc(100% - 40px);

  &-wrap {
    display: grid;
    grid-gap: 20px;
    padding-bottom: 40px;
  }

}
</style>