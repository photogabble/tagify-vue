<template>
    <div class="tagify">
        <input ref="tagifyinput" :name="name" :placeholder="placeholder" v-model="internalValue">
    </div>
</template>

<script>
  const Tagify = require('@yaireo/tagify/dist/tagify');
  let t;
  export default {
    name: 'tagify',
    mounted() {
      this.internalValue = this.value

      let init = () => {
        let newT
        newT = new Tagify(
          this.$refs.tagifyinput, this.config
        )

        newT.on('remove', this.updateInternalValue)
        newT.on('add', this.updateInternalValue)
        return newT;
      }

      t = init()
      this.$emit('tInit', t)
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
