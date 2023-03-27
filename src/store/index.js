import { createStore } from 'vuex';

export default createStore({
    state: {
        selectedLimitLeft: 6,
        selectedLimitRight: 1,
        leftItems: [
            {
                "id": 1,
                "name": "Shoes 1"
            },
            {
                "id": 2,
                "name": "Shoes 2"
            },
            {
                "id": 3,
                "name": "Shoes 3"
            },
            {
                "id": 4,
                "name": "Shoes 4"
            },
            {
                "id": 5,
                "name": "T-shirt 1"
            },
            {
                "id": 6,
                "name": "T-shirt 2"
            },
            {
                "id": 7,
                "name": "T-shirt 3"
            },
            {
                "id": 8,
                "name": "T-shirt 4"
            }
        ],
        rightItems: [
            {
                "id": 11,
                "name": "Jacket 1"
            },
            {
                "id": 12,
                "name": "Jacket 2"
            },
            {
                "id": 13,
                "name": "Jacket 3"
            },
            {
                "id": 14,
                "name": "Jacket 4"
            },
            {
                "id": 15,
                "name": "Hoodie 1"
            },
            {
                "id": 16,
                "name": "Hoodie 2"
            },
            {
                "id": 17,
                "name": "Hoodie 3"
            },
            {
                "id": 18,
                "name": "Hoodie 4"
            }
        ],
        selectedItemsLeft: [],
        selectedItemRight: null,
    },
    getters: {
        leftItems: (state) => {
            return state.leftItems.filter((item) => !state.selectedItemsLeft.includes(item.id));
        },
        rightItems: (state) => {
            return state.rightItems.filter((item) => state.selectedItemRight !== item.id);
        },
        selectedItemRight: (state) => {
            return state.rightItems.find((item) => state.selectedItemRight === item.id);
        },
        selectedItemsLeft: (state) => {
            const items = [];
            state.selectedItemsLeft.forEach((itemId) => {
                const item = state.leftItems.find((item) => itemId == item.id);
                if (item) {
                    items.push(item);
                }
            });
            return items;
        },
    },
    mutations: {
        selectLeftItem (state, value) {
            if (state.selectedItemsLeft.length === state.selectedLimitLeft) {
                return;
            }
            state.selectedItemsLeft.push(value);
        },
        selectRightItem (state, value) {
            if (!state.selectedItemRight) {
                state.selectedItemRight = value;   
            }
        },
        removeLeftItem (state, value) {
            const index = state.selectedItemsLeft.indexOf(value)
            if (index > -1) {
                state.selectedItemsLeft.splice(index, 1);
            }
        },
        removeRightItem (state) {
            state.selectedItemRight = null;
        }
    },
    actions: {
    },
})
  