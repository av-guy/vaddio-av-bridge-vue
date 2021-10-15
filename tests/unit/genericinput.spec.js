import {shallowMount} from '@vue/test-utils'
import GenericInput from '@/components/GenericInput'

function wrapperHelper(props) {
  const wrapper = shallowMount(GenericInput, {
    propsData: props
  })
  return wrapper
}

function returnProps() {
  return {
    type: "email",
    placeholder: "Email",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    dataTag: "username-login"
  }
}

describe("GenericInput.vue", () => {
  it('Acts as an email input', async () => {
    const wrapper = wrapperHelper(returnProps())
    const inputs = ['jonathan@rpi-gpio.dev', 'bad']
    const dataTag = 'username-login';
    for (var i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      await wrapper.find(`[data-id=${dataTag}]`).setValue(input);
      await wrapper.find(`[data-id=${dataTag}]`).trigger('focusout');
    }
    const isValid = wrapper.emitted().IsValid;
    expect(isValid).toEqual([[ 'jonathan@rpi-gpio.dev' ],[ null ]])
  })
})


describe("GenericInput.vue", () => {
  it('Acts as a password input', async () => {
    const wrapper = wrapperHelper({
      type: "password",
      placeholder: "Password",
      regex: /.{1,30}/,
      dataTag: "username-password"
    })
    const inputs = ['', 'hello'];
    const dataTag = 'username-password';
    for (var i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      await wrapper.find(`[data-id=${dataTag}]`).setValue(input);
      await wrapper.find(`[data-id=${dataTag}]`).trigger('focusout');
    }
    const isValid = wrapper.emitted().IsValid
    expect(isValid).toEqual([[ null ],[ 'hello' ]]);
  })
})
