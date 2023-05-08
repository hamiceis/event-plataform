import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: "https://api-sa-east-1.hygraph.com/v2/clh7le67l7w6201ue8phy2ust/master",
  documents: ['src/graphql/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config