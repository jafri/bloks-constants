const DEFAULT_ENDPOINTS = [
  'https://api.bossweden.org',
  'https://hapi.bos.eosrio.io'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://api.bossweden.org',
  'https://hapi.bos.eosrio.io'
]

const ACTIONS_ENDPOINTS = [
  'https://api.bossweden.org',
  'https://hapi.bos.eosrio.io'
]

const PROVIDER_ENDPOINTS = [ {
  chainId: 'd5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86',
  port: 443,
  protocol: 'https',
  host: 'api.bossweden.org',
  httpEndpoint: 'https://api.bossweden.org',
  blockchain: 'eos'
}]

const API_URL = 'https://www.api.bloks.io/bos'
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_SYMBOL = 'BOS'
const CHAIN = 'bos' // Should be like jungle, kylin
const DFUSE_CHAIN = 'bos' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'BOS'
const ES_URL = ''
const HYPERION_URL = 'https://bos.hyperion.eosrio.io'
const HISTORY_TYPES = ['native', 'hyperion']
const LIGHT_API = 'https://lightapi.eosamsterdam.net'
const CHAIN_ID = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
const DOMAIN_TITLE = 'BOS Bloks.io'
const CHAIN_START_DATE = new Date('Dec 31, 2018')
const BLOKS_PROXY = 'blokspartner'
const REX_ENABLED = true
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
