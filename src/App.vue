<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col text-center">

                <img src="assets/img/vue-logo.png" class="logo" />

                <HelloWorld msg="Vue 3 + ESBuild + Bootstrap 5 + Livereload"></HelloWorld>

                <p class="mt-2">Test Variable: {{ test }}</p>

                <button class="btn btn-danger" @click="changeVariable">Change Variable</button>

                <h2>Get Users From Server</h2>

                <ul>
                    <li v-for="user in users" :key="user.id">
                        {{ user.name }} / {{ user.city }}
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref, reactive, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

type User = {
    id: number,
    name: string,
    city: string
}

export default defineComponent({
    name: "App",
    components: {
        HelloWorld
    },
    setup()
    {
        const test = ref("test variable");
        const users: User[] = reactive([]);

        const changeVariable = () =>
        {
            test.value = "variable changed";
        };

        onMounted(() =>
        {
            axios.get("/api/users")
                .then( (response) =>
                {
                    // handle success
                    console.log(response.data);
                    Object.assign(users, response.data);
                });
        });

        return {
            test,
            changeVariable,
            users
        };
    }
});

</script>

<style>
    .logo {
        max-width: 100px;
    }
</style>