const DEFAULT_ENDPOINTS = [
  'https://api-paper.eosfinex.com'
]

const ACTIONS_ENDPOINTS = [
  'https://api-paper.eosfinex.com'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://api-paper.eosfinex.com'
]

const PROVIDER_ENDPOINTS = [{
  chainId: 'f16e7cc107ee685a7faf16bfd517d1f87a161ce4d3d39110e8f1a0a2d82a761d',
  port: 443,
  protocol: 'https',
  host: 'api-paper.eosfinex.com',
  httpEndpoint: 'https://api-paper.eosfinex.com',
  blockchain: 'eos'
}]
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const API_URL = 'https://www.api.bloks.io/eosfinex-paper'

const CORE_SYMBOL = 'EOX'
const CHAIN = 'eosfinex-paper' // Should be like jungle, kylin
const DFUSE_CHAIN = '' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'EOSFinex Paper'
const ES_URL = ''
const HYPERION_URL = ''
const HISTORY_TYPES = ['hyperion']
const LIGHT_API = ''
const CHAIN_ID = 'f16e7cc107ee685a7faf16bfd517d1f87a161ce4d3d39110e8f1a0a2d82a761d'
const DOMAIN_TITLE = 'EOSFinex Paper | Bloks.io'
const CHAIN_START_DATE = new Date('2019-03-22')
const BLOKS_PROXY = ''
const REX_ENABLED = false
const KEY_PREFIX = 'EOS'
const VOTING_ENABLED = false
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
