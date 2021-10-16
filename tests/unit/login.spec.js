import { mount, shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'


describe('Login.vue', () => {
  it('renders a Login', () => {
    const wrapper = mount(Login)
    expect(wrapper.text()).toMatch("Login")
  })
})

describe('Login.vue', () => {
  it('It shows Invalid Email when email is not correct', async () => {
    const wrapper = mount(Login)
    const dataTag = '[data-id=vc-username]';
    const errorTag = '[data-id=vc-err]';
    let error = null;

    // It reacts to a bad e-mail
    await wrapper.find(dataTag).setValue('bad');
    await wrapper.find(dataTag).trigger('focusout');
    error = await wrapper.find(errorTag);
    expect(error.text()).toMatch("Invalid Email!");

    // It reacts to a good e-mail
    await wrapper.find(dataTag).setValue('jonathan@rpi-gpio.dev');
    await wrapper.find(dataTag).trigger('focusout');
    error = await wrapper.find(errorTag);
    expect(wrapper.find(dataTag).exists()).toEqual(true);
  })
})

describe('Login.vue', () => {
  it('Show Invalid Password when password is of length zero', async () => {
    const wrapper = mount(Login);
    const dataTag = '[data-id=vc-err]'

    // It shows Invalid Email if email is incorrect and password is incorrect
    await wrapper.find('[data-id=vc-password]').setValue('');
    await wrapper.find('[data-id=vc-password]').trigger('focusout');
    let error = await wrapper.find(dataTag);
    expect(error.text()).toMatch("Invalid Email!");

    // It shows Invalid Password when email is valid

    await wrapper.find('[data-id=vc-username]').setValue(
      'jonathan@rpi-gpio.dev'
    )
    await wrapper.find('[data-id=vc-username]').trigger('focusout');
    await wrapper.find('[data-id=vc-password]').setValue('')
    await wrapper.find('[data-id=vc-password]').trigger('focusout');
    error = await wrapper.find(dataTag);
    expect(error.text()).toMatch("Invalid Password!");
  })
})
