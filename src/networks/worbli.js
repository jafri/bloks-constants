
const DEFAULT_ENDPOINTS = [
  'https://api.worbli.io',
  'https://worbli.eoscafeblock.com'
]

const ACTIONS_ENDPOINTS = [
  'https://api.worbli.io',
  'https://worbli.eoscafeblock.com'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://api.worbli.io',
  'https://worbli.eoscafeblock.com'
]

const PROVIDER_ENDPOINTS = [{
  chainId: '73647cde120091e0a4b85bced2f3cfdb3041e266cbbe95cee59b73235a1b3b6f',
  port: 443,
  protocol: 'https',
  host: 'api.worbli.io',
  httpEndpoint: 'https://api.worbli.io',
  blockchain: 'eos'
}]

const API_URL = 'https://www.api.bloks.io/worbli'
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_SYMBOL = 'WBI'
const CHAIN = 'worbli' // Should be like jungle, kylin
const DFUSE_CHAIN = 'worbli' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'Worbli'
const BLOKS_PROXY = 'blokspartner'

const HISTORY_TYPES = ['native', 'dfuse']
const LIGHT_API = ''
const CHAIN_ID = '73647cde120091e0a4b85bced2f3cfdb3041e266cbbe95cee59b73235a1b3b6f'
const DOMAIN_TITLE = 'Worbli Bloks.io'
const CHAIN_START_DATE = new Date('Oct 24, 2018')
const REX_ENABLED = false
const KEY_PREFIX = 'EOS'
const VOTING_ENABLED = false
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
  LIGHT_API,
  BLOKS_PROXY,

  CHAIN_ID,
  DOMAIN_TITLE,
  CHAIN_START_DATE,
  REX_ENABLED,
  KEY_PREFIX,
  VOTING_ENABLED,
  CORE_PRECISION
}
