import { shallowMount } from '@vue/test-utils';
import Input from '@/components/forms/Input';

describe('Input.vue', () => {
  it('emits written text on click', () => {
    // spy on function so that we can access it.
    jest.spyOn(Input.methods, 'onSubmit');

    // shallowMount the component
    const wrapper = shallowMount(Input);

    //find the element by id
    wrapper.find('#myInput').setValue('super-value');

    //find the button by id and click the button(note: method is beeen called immediately)
    wrapper.find('#btn').trigger('click');

    // check if the method is actually been called
    expect(wrapper.vm.$options.methods.onSubmit).toHaveBeenCalled();

  });
  it('or emits written text on click', () => {
    const wrapper = shallowMount(Input);

    wrapper.find('input').element.value = 'super-value';
    console.log(wrapper.vm.$data.textInputData,'1')

    wrapper.find('input').trigger('input');
    console.log(wrapper.vm.$data.textInputData,'2')

    wrapper.find('button').trigger('click');
    console.log(wrapper.vm.$data.textInputData,'3')

    // expect(wrapper.emitted().submitted).toStrictEqual([['super-value']]);
  });
});
