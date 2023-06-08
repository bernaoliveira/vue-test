<template>
    <div>
        <EventComponent v-for="event in list" :key="event.id" :event="event" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import EventComponent from "@/components/EventComponent.vue";

export default {
    name: "EventsStoreList",
    components: {
        EventComponent,
    },

    computed: {
        ...mapState({
            list: (state) => state.events,
        }),
    },
};
</script>
