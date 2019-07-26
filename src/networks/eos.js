const DEFAULT_ENDPOINTS = [
  'https://eos.eoscafeblock.com',
  'https://eos.greymass.com',
  'https://api.eosrio.io'
]

const ACTIONS_ENDPOINTS = [
  'https://eos.greymass.com',
  'https://api.eossweden.org',
  'https://api.eostribe.io',
  'https://api.eosrio.io'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://eos.greymass.com',
  'https://api.eosrio.io',
  'https://api.eossweden.org'
]

const PROVIDER_ENDPOINTS = [{
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  port: 443,
  protocol: 'https',
  host: 'eos.greymass.com',
  httpEndpoint: 'https://eos.greymass.com',
  blockchain: 'eos'
}, {
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  port: 443,
  protocol: 'https',
  host: 'api.eosrio.io',
  httpEndpoint: 'https://api.eosrio.io',
  blockchain: 'eos'
}]
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const API_URL = 'https://www.api.bloks.io'

const CORE_SYMBOL = 'EOS'
const CHAIN = 'eos' // Should be like jungle, kylin
const DFUSE_CHAIN = 'mainnet' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'EOS'
const ES_URL = 'https://api.eostribe.io'
const HYPERION_URL = 'https://eos.hyperion.eosrio.io'
const HISTORY_TYPES = ['native', 'dfuse', 'hyperion', 'es']
const LIGHT_API = 'https://api.light.xeos.me'
const CHAIN_ID = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
const DOMAIN_TITLE = 'Bloks.io'
const CHAIN_START_DATE = new Date('2018-06-08')
const BLOKS_PROXY = 'bloksioproxy'
const REX_ENABLED = true
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
