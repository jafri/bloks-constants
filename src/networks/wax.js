const DEFAULT_ENDPOINTS = [
  'https://chain.wax.io',
  'https://api.waxsweden.org',
  'https://wax.eosrio.io'
]

const ACTIONS_ENDPOINTS = [
  'https://wax.eosrio.io',
  'https://api.waxsweden.org',
  'https://chain.wax.io'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://api.waxsweden.org',
  'https://wax.eosrio.io',
  'https://chain.wax.io'
]

const PROVIDER_ENDPOINTS = [{
  chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
  port: 443,
  protocol: 'https',
  host: 'chain.wax.io',
  httpEndpoint: 'https://chain.wax.io',
  blockchain: 'eos'
}]
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const API_URL = 'https://www.api.bloks.io/wax'

const CORE_SYMBOL = 'WAX'
const CHAIN = 'wax' // Should be like jungle, kylin
const DFUSE_CHAIN = '' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'WAX'
const ES_URL = ''
const HYPERION_URL = 'https://api.waxsweden.org'
const HISTORY_TYPES = ['native', 'hyperion']
const LIGHT_API = 'https://lightapi.eosamsterdam.net'
const CHAIN_ID = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4'
const DOMAIN_TITLE = 'WAX | Bloks.io'
const CHAIN_START_DATE = new Date('2019-06-24')
const BLOKS_PROXY = 'bloksioproxy'
const REX_ENABLED = false
const KEY_PREFIX = 'EOS'
const VOTING_ENABLED = true
const CORE_PRECISION = 8

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
