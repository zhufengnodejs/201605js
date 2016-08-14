## 中间件

## 路由
```
get /user
Layer {
  handle: [Function: bound dispatch],
  name: 'bound dispatch',
  params: { name: 'zfpx', id: '8' },
  path: '/user/zfpx/8',
  keys: 
   [ { name: 'name', optional: false, offset: 7 },
     { name: 'id', optional: false, offset: 22 } ],
  regexp: /^\/user\/(?:([^\/]+?))\/(?:([^\/]+?))\/?$/i,
  route: 
   Route {
     path: '/user/:name/:id',
     stack: 
      [ Layer {
          handle: [Function: getUser],
          name: 'getUser',
          params: undefined,
          path: undefined,
          keys: [],
          regexp: /^\/?$/i,
          method: 'get' },
        Layer {
          handle: [Function: postUser],
          name: 'postUser',
          params: undefined,
          path: undefined,
          keys: [],
          regexp: /^\/?$/i,
          method: 'post' } ],
     methods: { get: true, post: true } } }

```