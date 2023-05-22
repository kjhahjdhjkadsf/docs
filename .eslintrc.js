module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    
    "overrides": [
        {
            files: '{packages,examples,docs}/**',
            excludedFiles: ['*.md', '*.mdx'],
            extends: [
              'plugin:react/recommended',
              'plugin:react/jsx-runtime',
              'plugin:react-hooks/recommended',
              'plugin:@next/next/recommended'
            ],
            rules: {
              'react/prop-types': 'off',
              'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
              'react-hooks/exhaustive-deps': 'error',
              'react/self-closing-comp': 'error',
              'no-restricted-syntax': [
                'error',
                {
                  // ❌ useMemo(…, [])
                  selector:
                    'CallExpression[callee.name=useMemo][arguments.1.type=ArrayExpression][arguments.1.elements.length=0]',
                  message:
                    "`useMemo` with an empty dependency array can't provide a stable reference, use `useRef` instead."
                },
                {
                  // ❌ z.object(…)
                  selector:
                    'MemberExpression[object.name=z] > .property[name=object]',
                  message: 'Use z.strictObject is more safe.'
                }
              ],
              'react/jsx-filename-extension': [
                'error',
                { extensions: ['.tsx', '.jsx'], allow: 'as-needed' }
              ],
              'react/jsx-curly-brace-presence': 'error',
              'react/jsx-boolean-value': 'error'
            },
            settings: {
              react: { version: 'detect' }
            }
          },
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
