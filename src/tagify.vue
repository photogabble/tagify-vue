<template>
    <div class="tagify">
        <input :name="name" :placeholder="placeholder" v-model="internalValue">
    </div>
</template>

<script>
  const Tagify = require('@yaireo/tagify/dist/tagify');
  let t;
  export default {
    name: 'tagify',
    mounted() {
      this.internalValue = this.value

      t = new Tagify(
        document.querySelector('input[name='+this.name+']'), this.config
      )

      t.on('remove', this.updateInternalValue)
      t.on('add', this.updateInternalValue)
    },
    beforeDestroy: function () {
      t.destroy()
    },
    props: {
      config:{
        type: Object,
        default: () => {
          return {
            delimiters: ',',
            pattern: '',
            duplicates: false,
            enforeWhitelist: false,
            autocomplete: true,
            whitelist: [],
            blacklist: [],
            callbacks: {},
            maxTags: Infinity,
            suggestionsMinChars: 2
          }
        }
      },
      placeholder: String,
      name: {
        type: String,
        required: true
      },
      value: Array
    },
    data: () => {
      return {
        internalValue: ''
      }
    },
    watch: {
      'internalValue': function() {
        this.$emit('input', this.internalValue);
      }
    },
    computed: {},
    methods: {
      updateInternalValue: function (e) {
        this.internalValue = t.value
      },
    }
  }
</script>
