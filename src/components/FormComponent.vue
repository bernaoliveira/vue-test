<template>
    <form @submit.prevent="onSubmit">
        <input
            type="text"
            name="price"
            placeholder="Цена"
            @input="debouncedHandleInput('price', $event.target.value)"
        />
        <input
            type="text"
            name="amount"
            placeholder="Количество"
            @input="debouncedHandleInput('amount', $event.target.value)"
        />
        <input
            type="text"
            name="qty"
            placeholder="Сумма"
            @input="debouncedHandleInput('qty', $event.target.value)"
        />
        <button type="submit">Добавить</button>
        <br />
        <label for="price">{{ data.price }}</label>
        <label for="amount">{{ data.amount }}</label>
        <label for="qty">{{ data.qty }}</label>
        <!-- Label needs to be connected to an input, that's why I use span here -->
        <span>{{ JSON.stringify(storage) }}</span>
    </form>
</template>

<script>
import { debounce } from "@/utils/common";
import { apiCall } from "@/utils/mock";

export default {
    name: "FormComponent",
    data() {
        return {
            data: {
                price: "",
                amount: "",
                qty: "",
            },

            storage: null,
            nonce: 0,
        };
    },

    computed: {
        debouncedHandleInput() {
            return debounce(this.handleInput, 500);
        },
    },

    mounted() {
        this.getLocalStorage();
    },

    methods: {
        async onSubmit() {
            this.$emit("update", {
                id: Math.random(),
                type: "submit",
                data: JSON.stringify({
                    form: this.data,
                    storage: this.storage,
                }),
            });

            const emitResponse = (response) => {
                this.$emit("update", {
                    id: Math.random(),
                    type: "response",
                    data: JSON.stringify({
                        response,
                        storage: this.storage,
                    }),
                });
            };

            apiCall(this.data)
                .then((response) => {
                    this.updateLocalStorage();
                    emitResponse(response);
                })
                .catch((response) => {
                    emitResponse(response);
                })
                .finally(() => {
                    this.getLocalStorage();
                });
        },

        handleInput(key, value) {
            this.data[key] = value;
            this.$emit("update", {
                id: Math.random(),
                type: "input",
                data: JSON.stringify({
                    key,
                    value,
                }),
            });
        },

        getLocalStorage() {
            this.storage = JSON.parse(localStorage.getItem("storage"));
        },

        updateLocalStorage() {
            this.nonce =
                (this.storage?.nonce ? Number(this.storage.nonce) : 0) + 1;
            this.storage = {
                nonce: this.nonce,
                ...this.data,
            };
            localStorage.setItem("storage", JSON.stringify(this.storage));
        },
    },
};
</script>
