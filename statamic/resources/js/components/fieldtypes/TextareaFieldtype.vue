<template>
    <textarea class="form-control" v-model="data" v-el:textarea v-elastic :placeholder="config.placeholder"></textarea>
</template>

<script>
export default {
    mixins: [Fieldtype]
};
</script>
