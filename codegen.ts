import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    './src/graphql/generated.ts': {
      schema: 'https://hrms.dev.msrestapi.com/api',
      documents: './src/graphql/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
    },
  },
};

export default config;
