module.exports = {
    parsePresent: '@commitlint/config-conventional',
    rules: {
        'type-enum': [
			2,
            'always',
            [
                'build',
                'ci',
                'chore',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
                'dependencies'
            ]
        ]
    }
};
