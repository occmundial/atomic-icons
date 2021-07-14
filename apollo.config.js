module.exports = {
  client: {
    service: {
      name: 'API',
      // To generate types for CandysQL operations run `yarn download-schema`
      // This will create the `candysql.graphql` file
      // Add it to this array and run `yarn codegen`
      localSchemaFile: ['./graphql/schema/local.graphql']
    },
    includes: ['./graphql/**/*.ts'],
    excludes: ['./node_modules', './.next'],
    tagName: 'gql'
  }
}
