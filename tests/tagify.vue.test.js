import TagifyVue from '../src/tagify.vue'
import Vue from 'vue'

describe('tagify.vue.test.js', () => {
  let cmp, vm

  cmp = Vue.extend(TagifyVue)
  vm = new cmp({
    props: {
      config: {
        delimiters: '-'
      },
      name: 'test'
    }
  })

  it('inits tagify on mount', () => {
    const stub = jest.fn()
    vm.$on('tInit', stub)
    vm.$mount()
    expect(stub).toBeCalled()
  })
})
