<template>
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary" @click="count++">Count is: {{ count }}</button>
</template>

<script lang="ts">

import { ref, defineComponent } from "vue";
import _ from "underscore";

export default defineComponent({
    name: "HelloWorld",
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup: () =>
    {
        const count = ref(0);
        count.value = _.random(1, 100);
        return { count };
    }
});

</script>

<style scoped>
    h1
    {
        font-size: 20px;
    }
</style>