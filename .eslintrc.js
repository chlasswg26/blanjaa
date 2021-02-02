module.exports = {
    "globals": {
        "window": true,
        "module": true
    },
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "extends": ["eslint:recommended"],
    "plugins": [
        "react",
        "react-hooks"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react-hooks/rules-of-hooks": "error",
        "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ]
    }
}
