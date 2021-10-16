import {
  mount
} from '@vue/test-utils'
import {
  getAuth,
  signOut
} from "firebase/auth"


jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');
  return {
    __esModule: true,
    ...originalModule,
    getAuth: jest.fn(),
    signOut: jest.fn()
  }
});


import LogoutButton from '@/components/LogoutButton'


function wrapperHelper(props) {
  const wrapper = mount(LogoutButton, {
    propsData: props,
    mocks: {},
  })
  return wrapper
}


describe("LogoutButton.vue", () => {
  it('Calls signOut', async () => {
    const wrapper = await wrapperHelper({})
    const button = await wrapper.find('button');
    await button.trigger('click');
    expect(getAuth).toHaveBeenCalled();
    expect(signOut).toHaveBeenCalled();
    expect(signOut.mock.calls).toEqual([
      [undefined]
    ])
  })
})
