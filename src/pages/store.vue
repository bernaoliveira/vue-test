<template>
    <div class="main">
        <h1>Релазизация со стором</h1>
        <RouterLink to="/">Реализация без стора</RouterLink>
        <FormComponent @update="handleUpdate" />
        <EventsStoreList />
    </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import EventsStoreList from "@/components/EventsStoreList.vue";

export default {
    name: "IndexPage",
    components: {
        FormComponent,
        EventsStoreList,
    },

    methods: {
        handleUpdate(event) {
            this.$store.dispatch("addEvent", event);
        },
    },
};
</script>

<style scoped>
.main {
    background: #fefefe;
}
</style>
