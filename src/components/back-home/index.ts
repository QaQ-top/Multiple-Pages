import { h, createApp } from '@vue/runtime-dom';
const Component = {
  render() {
    return h(
      'a',
      {
        class: 'back',
        href: '/'
      },
      '返回首页'
    )
  }
}

export default function (query: string | HTMLElement) {
  createApp(Component).mount(query)
};