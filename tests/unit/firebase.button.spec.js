import {
  mount
} from '@vue/test-utils'
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth"


jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');
  return {
    __esModule: true,
    ...originalModule,
    getAuth: jest.fn(),
    signInWithEmailAndPassword: jest.fn()
  }
});


import FirebaseLoginButton from '@/components/FirebaseLoginButton'


function wrapperHelper(props) {
  const wrapper = mount(FirebaseLoginButton, {
    propsData: props,
    mocks: {},
  })
  return wrapper
}


describe("FirebaseLoginButton.vue", () => {
  it('Calls signInWithEmailAndPassword, passes correct values', async () => {
    const wrapper = await wrapperHelper({
      email: 'jonathan@rpi-gpio.dev',
      password: 'password'
    })
    const button = await wrapper.find('button');
    await button.trigger('click');
    expect(getAuth).toHaveBeenCalled();
    expect(signInWithEmailAndPassword.mock.calls).toEqual([
      [undefined, 'jonathan@rpi-gpio.dev', 'password']
    ]);
    let isValidated = wrapper.emitted().IsValidated;
    expect(isValidated).toEqual([
      [true]
    ])
  })
})
