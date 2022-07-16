import Mock from 'mockjs'

Mock.mock(/\/api\/system\/user.*/, 'get', {
  code: 200,
  msg: '',
  'data|4-50': [
    {
      name: '@cname()',
      username: '@word(5, 8)',
      createBy: '@cname()',
      createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
      Avatar: '@image("250x250")',
      'roles|1': [
        ['普通用户','管理员','主管','查询角色'], ['管理员'], ['超级管理员','管理员','查询角色'], ['主管','管理员'], ['查询角色']
      ]
    }
  ]
})
