import config from './jest.config.js'

config.testMatch = ['**/*.test.js']
config.setupFilesAfterEnv = ['./test/setup.js']

export default config
