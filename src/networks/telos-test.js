const DEFAULT_ENDPOINTS = [
  'https://testnet.eos.miami'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://testnet.eos.miami'
]

const ACTIONS_ENDPOINTS = [
  'https://testnet.eos.miami'
]

const PROVIDER_ENDPOINTS = [ {
  chainId: 'e17615decaecd202a365f4c029f206eee98511979de8a5756317e2469f2289e3',
  port: 443,
  protocol: 'https',
  host: 'testnet.eos.miami',
  httpEndpoint: 'https://testnet.eos.miami',
  blockchain: 'eos'
}]

const API_URL = 'https://www.api.bloks.io/telos-test'
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_SYMBOL = 'TLOS'
const CHAIN = 'telos-test' // Should be like jungle, kylin
const DFUSE_CHAIN = '' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'Telos Test'
const ES_URL = ''
const HYPERION_URL = ''
const HISTORY_TYPES = ['native']
const LIGHT_API = ''
const CHAIN_ID = 'e17615decaecd202a365f4c029f206eee98511979de8a5756317e2469f2289e3'
const DOMAIN_TITLE = 'Telos Testnet Bloks.io'
const CHAIN_START_DATE = new Date('Dec 08, 2018')
const BLOKS_PROXY = ''
const REX_ENABLED = false
const KEY_PREFIX = 'EOS'
const VOTING_ENABLED = true
const CORE_PRECISION = 4

module.exports = {
  DEFAULT_ENDPOINTS,
  ACTIONS_ENDPOINTS,
  TRANSACTIONS_ENDPOINTS,

  API_URL,
  IMAGE_PROXY,
  PROVIDER_ENDPOINTS,
  CORE_SYMBOL,
  CHAIN,
  DFUSE_CHAIN,
  DISPLAY_CHAIN,
  HISTORY_TYPES,
  BLOKS_PROXY,
  LIGHT_API,
  ES_URL,
  HYPERION_URL,
  CHAIN_ID,
  DOMAIN_TITLE,
  CHAIN_START_DATE,
  REX_ENABLED,
  KEY_PREFIX,
  VOTING_ENABLED,
  CORE_PRECISION
}
