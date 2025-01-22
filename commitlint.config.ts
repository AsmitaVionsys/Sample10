module.exports = {
    extends: ['@commitlint/cli', '@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'refactor',
                'test',
                'docs',
                'chore',
                'revert',
                'style',
                'perf',
                'build',
                'ci',
                'revert:revert',
                'merge',
                'workflow',
                'revert:workflow',
                'bump',
                'revert:bump',
                'release',
                'revert:release',
                'revert:revert',
                'merge:merge',
                'revert:merge',
                'fix:fix',
                'revert:fix',
                'refactor:refactor',
                'revert:refactor',
                'style:style',
                'revert:style',
                'perf:perf',
                'revert:perf',
                'build:build',
                'revert:build',
                'ci:ci',
                'revert:ci',
                'workflow:workflow',
                'revert:workflow',
                'bump:bump',
                'revert:bump'
            ]
        ],
        'subject-case': [2, 'always', 'sentence-case']
    }
};
