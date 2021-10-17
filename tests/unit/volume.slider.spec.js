import {
  mount
} from '@vue/test-utils'
import {
  setStatus
} from '@/interfaces/Driver.js';


jest.mock('@/interfaces/Driver.js', () => {
  const originalModule = jest.requireActual('@/interfaces/Driver.js');
  return {
    __esModule: true,
    ...originalModule,
    setStatus: jest.fn(),
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
    expect(slider.tagName).toEqual('input');
  })
})
