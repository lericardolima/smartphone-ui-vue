<template>
    <div>
        <header class="mt-3">
            <nav class="navbar navbar-dark bg-dark">
                <router-link class="navbar-brand" to="/smartphones">{{ title }}</router-link>
            </nav>
        </header>
        <hr>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>