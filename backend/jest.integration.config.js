import config from './jest.config.js'

config.testMatch = ['**/*.test.js']
config.setupFilesAfterEnv = ['./src/teste/setup.js']

export default config
