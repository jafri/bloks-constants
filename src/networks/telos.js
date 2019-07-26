const DEFAULT_ENDPOINTS = [
  'https://api.tlos.goodblock.io',
  'https://mainnet.telosusa.io',
  'https://api.eos.miami'
]

const ACTIONS_ENDPOINTS = [
  'https://telos-testnet.eosphere.io',
  'https://api.eos.miami'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://telos-testnet.eosphere.io',
  'https://api.eos.miami'
]

const PROVIDER_ENDPOINTS = [{
  chainId: '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11',
  port: 443,
  protocol: 'https',
  host: 'api.eos.miami',
  httpEndpoint: 'https://api.eos.miami',
  blockchain: 'eos'
}]
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const API_URL = 'https://www.api.bloks.io/telos'

const CORE_SYMBOL = 'TLOS'
const CHAIN = 'telos' // Should be like jungle, kylin
const DFUSE_CHAIN = '' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'Telos'
const ES_URL = ''
const HYPERION_URL = 'https://mainnet.telosusa.io'
const HISTORY_TYPES = ['native', 'hyperion']
const LIGHT_API = 'https://api.light.xeos.me'
const CHAIN_ID = '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11'
const DOMAIN_TITLE = 'Telos Bloks.io'
const CHAIN_START_DATE = new Date('2018-12-12')
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
  BLOKS_PROXY,
  IMAGE_PROXY,
  PROVIDER_ENDPOINTS,
  CORE_SYMBOL,
  CHAIN,
  DFUSE_CHAIN,
  DISPLAY_CHAIN,
  HISTORY_TYPES,
  LIGHT_API,
  ES_URL,
  CHAIN_ID,
  DOMAIN_TITLE,
  CHAIN_START_DATE,

  HYPERION_URL,
  REX_ENABLED,
  KEY_PREFIX,
  VOTING_ENABLED,
  CORE_PRECISION
}
