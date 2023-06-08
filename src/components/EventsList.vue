<template>
    <div>
        <EventComponent v-for="event in list" :key="event.id" :event="event" />
    </div>
</template>

<script>
import EventComponent from "@/components/EventComponent.vue";

export default {
    name: "EventsList",
    components: {
        EventComponent,
    },

    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
