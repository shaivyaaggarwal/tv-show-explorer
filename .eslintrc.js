module.exports = {
    'extends': 'airbnb',
    'parserOptions':{
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true
        }
    },
    'rules': {
        'indent': ['error', 4, {'SwitchCase': 1}],
        'comma-dangle': ['error', 'never'],
        'global-require': [0],
        'no-underscore-dangle': [0]
    }
};
