<template>
    <div>
        Type: {{ event.type }}
        <br />
        Data: {{ event.data }}
    </div>
</template>

<script>
export default {
    name: "EventComponent",
    props: {
        event: {
            type: Object,
            required: true,
        },
    },
};
</script>
