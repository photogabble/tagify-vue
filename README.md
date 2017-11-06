# Tagify.vue

A vue.js component that wraps [tagify](https://yaireo.github.io/tagify/) for your convenience.

## Install

```
npm require --save @photogabble/tagify-vue
```
Or
```
yarn add @photogabble/tagify-vue
```

## Example Usage

```
<template>
  <div>
    <tagify name="taxonomy-tags" placeholder="Tags" v-model="tags"></tagify>
  </div>
</template>
<script>
  import Tagify from '@photogabble/tagify-vue/src/tagify.vue';
  export default {
    name: 'tagify-example',
    data: () => {
      return { tags: [] }
    },
    components: {
      Tagify
    },
  }
</script>
```
