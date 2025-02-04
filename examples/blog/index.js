require('dotenv').config()
const { rest } = require('@tensei/rest')
const { graphql } = require('@tensei/graphql')
const { auth, permission } = require('@tensei/auth')

const seed = require('./seed')

const {
  tensei,
  welcome,
  resource,
  text,
  textarea,
  hasMany,
  belongsTo,
  belongsToMany
} = require('@tensei/core')

module.exports = tensei()
  .root(__dirname)
  .resources([
    resource('Post')
      .fields([
        text('Title').notNullable().rules('required'),
        textarea('Description').nullable(),
        belongsTo('Category').nullable(),
        belongsToMany('Tag'),
        belongsToMany('Peg')
      ])
      .displayField('Title'),
    resource('Category')
      .fields([
        text('Name').notNullable().rules('required'),
        textarea('Description'),
        hasMany('Post'),
        belongsToMany('Peg')
      ])
      .displayField('Name'),
    resource('Tag').fields([
      text('Name').rules('required'),
      belongsToMany('Post')
    ]),
    resource('Peg').fields([
      text('Name').rules('required'),
      belongsToMany('Category'),
      belongsToMany('Post'),
      belongsTo('Team')
    ])
  ])
  .plugins([
    welcome(),
    auth()
      .teams()
      .configureTokens({
        accessTokenExpiresIn: 60 * 60 * 60 * 60
      })
      .teamPermissions([
        permission('Manage databases')
          .description('Manage databases')
          .default()
          .slug('manage:databases')
      ])
      .setup(({ team }) => {
        team.fields([hasMany('Peg')])
      })
      .plugin(),
    rest().plugin(),
    graphql().plugin()
  ])
  .boot(async ctx => {
    await seed(ctx)
  })
  .databaseConfig({
    type: 'sqlite',
    dbName: 'db.sqlite'
    // debug: true
  })
  .start()
  .catch(console.error)
