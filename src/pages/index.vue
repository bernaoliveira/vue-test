<template>
    <div class="main">
        <h1>Релазизация без стора</h1>
        <RouterLink to="/store">Реализация со стором</RouterLink>
        <br />
        <FormComponent @update="handleUpdate" />
        <EventsList :list="list" />
    </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import EventsList from "@/components/EventsList.vue";

export default {
    name: "IndexPage",
    components: {
        FormComponent,
        EventsList,
    },

    data() {
        return {
            list: [],
        };
    },

    methods: {
        handleUpdate(event) {
            this.list.unshift(event);
        },
    },
};
</script>

<style scoped>
.main {
    background: #fefefe;
}
</style>
