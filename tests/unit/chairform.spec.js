import { mount } from '@vue/test-utils'
import Application from '@/views/Application.vue'


describe('Application.vue', () => {
  it('renders a Login', async () => {
    const wrapper = await mount(Application);
    expect(wrapper.text()).toMatch("Chair Assignment");
  })
})

describe('Application.vue', () => {
    it('Shows eighteen chairs', async () => {
        const wrapper = await mount(Application);
        const dataTag = '.vc-list-group-item';
        const elements = await wrapper.findAll(dataTag);
        expect(elements.length).toEqual(18);
    })
})

describe('Application.vue', () => {
    it('Shows eighteen inputs', async () => {
        const wrapper = await mount(Application);
        const dataTag = '[data-id=vc-chair-input]';
        const elements = await wrapper.findAll(dataTag);
        expect(elements.length).toEqual(18);
    })
})

describe('Application.vue', () => {
    it('Binds the input text to the element', async() => {
        const wrapper = await mount(Application);
        const dataTag = '[data-id=vc-chair-input]';
        const element = await wrapper.find(dataTag);
        await element.setValue('Jonathan Chaidez')
        const chair = wrapper.vm.$data.myArray[0];
        expect(chair.text).toEqual("Jonathan Chaidez");
    })
})