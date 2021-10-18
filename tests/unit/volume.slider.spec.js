import {
  mount
} from '@vue/test-utils'
import {
  setStatus,
  getStatus
} from '@/interfaces/Driver.js';


jest.mock('@/interfaces/Driver.js', () => {
  const originalModule = jest.requireActual('@/interfaces/Driver.js');
  return {
    __esModule: true,
    ...originalModule,
    setStatus: jest.fn(),
    getStatus: jest.fn().mockReturnValue(-6)
  }
});


import VolumeSlider from '@/components/VolumeSlider'


function wrapperHelper(props) {
  const wrapper = mount(VolumeSlider, {
    propsData: props,
  })
  return wrapper
}


describe("VolumeSlider.vue", () => {
  it('Sets its status to match the device\'s', async () => {
    const wrapper = await wrapperHelper({
      min: -24,
      max: 6,
      command: 'AudioInputGain',
      parameters: {
        'Input': '1'
      },
      dataTag: 'vc-slider'
    })
    const slider = await wrapper.find('[data-id=vc-slider]');
    expect(getStatus).toHaveBeenCalled()
    expect(getStatus.mock.calls).toEqual([
      ['AudioInputGain', {'Input': '1'}]
    ]);
    expect(wrapper.vm.level).toEqual(-6)
  })
})


describe("VolumeSlider.vue", () => {
  it('Instantiates', async () => {
    const wrapper = await wrapperHelper({
      min: -24,
      max: 6,
      command: 'AudioInputGain',
      parameters: {
        'Input': '1'
      }
    })
  })
})


describe("VolumeSlider.vue", () => {
  it('Renders a range control', async () => {
    const wrapper = await wrapperHelper({
      min: -24,
      max: 6,
      command: 'AudioInputGain',
      parameters: {
        'Input': '1'
      },
      dataTag: 'vc-slider'
    })
    const slider = await wrapper.find('[data-id=vc-slider]');
    expect(slider.wrapperElement.nodeName).toEqual('INPUT');
  })
})
