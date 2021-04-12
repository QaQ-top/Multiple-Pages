import { h, createApp } from '@vue/runtime-dom';
import './style.sass';

const routes = [
  {
    name: '首页',
    path: '/home',

  },
  {
    name: '权限',
    path: '/auth'
  },
]

const Router = {
  render() {
    return h(
      'ul',
      {
        class: 'nav',
      },
      ...routes.map(i => {
        return h('li', {class: 'nav_item'},
          h('a', {class: 'nav_item_url', href: i.path}, i.name)
        )
      })
    )
  }
}

createApp(Router).mount('#router');