<template>
  <div class="selected-items">
    <div class="selected-items__left">
      <item-list 
        :items="selectedItemsLeft"
        :items-per-row="2"
        :items-limit="selectedItemsLimitLeft"
        @select="removeLeftItems"
      />
    </div>  
    <div class="selected-items__right">
      <item-card 
        v-if="selectedItemRight" 
        :item="selectedItemRight"
        @select="removeRightItem"
      />
      <span v-else>item not selected</span>
    </div>
  </div>
  <div class="items-list">
    <item-list 
      :items="leftItems" 
      @select="selectLeftItems"
    />
    <item-list 
      :items="rightItems"
      @select="selectRightItem"
    />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
// eslint-disable-next-line no-unused-vars
import ItemList from '@/components/ItemList.vue';
import ItemCard from "@/components/ItemCard.vue";

export default {
  name: 'IndexPage',
  components: {
    ItemList,
    ItemCard,
  },
  setup () {
    const store = useStore();

    const leftItems = computed(() => {
      return store.getters.leftItems;
    });

    const rightItems = computed(() => {
      return store.getters.rightItems;
    });

    const selectedItemsLeft = computed(() => {
      return store.getters.selectedItemsLeft;
    });

    const selectedItemRight = computed(() => {
      return store.getters.selectedItemRight;
    });

    const selectedItemsLimitLeft = computed(() => {
      return store.state.selectedLimitLeft;
    });

    return {
      leftItems,
      rightItems,
      selectedItemsLeft,
      selectedItemRight,
      selectedItemsLimitLeft,
      selectLeftItems: (itemId) => store.commit('selectLeftItem', itemId),
      selectRightItem: (itemId) => store.commit('selectRightItem', itemId),
      removeLeftItems: (itemId) => store.commit('removeLeftItem', itemId),
      removeRightItem: () => store.commit('removeRightItem'),
    };
  }
}
</script>

<style lang="scss" scoped>
.selected-items {
  display: flex;
  justify-content: space-between;
  &__left {
    width: 400px;
    min-height: 250px;
  }


  &__right {
    width: 300px;
    height: 250px;

    & ::v-deep {
      .item {
        height: 200px;
      }
    }
  }
}
.items-list {
    display: flex;
    gap: 40px;
    margin-top: 40px;
}
</style>