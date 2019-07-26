const DEFAULT_ENDPOINTS = [
  'https://kylin.eossweden.org',
  'https://api-kylin.eoslaomao.com',
  'https://kylin.eos.dfuse.io'
]

const ACTIONS_ENDPOINTS = [
  'https://kylin.eossweden.org',
  'https://api-kylin.eoslaomao.com'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://kylin.eossweden.org',
  'https://api-kylin.eoslaomao.com'
]

const PROVIDER_ENDPOINTS = [{
  chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
  port: 443,
  protocol: 'https',
  host: 'kylin.eossweden.org',
  httpEndpoint: 'https://kylin.eossweden.org',
  blockchain: 'eos'
}]

const API_URL = 'https://www.api.bloks.io/kylin'
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_SYMBOL = 'EOS'
const CHAIN = 'kylin' // Should be like jungle, kylin
const DFUSE_CHAIN = 'kylin' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'Kylin'
const ES_URL = ''
const HYPERION_URL = ''
const HISTORY_TYPES = ['native', 'dfuse']
const LIGHT_API = ''
const CHAIN_ID = '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
const DOMAIN_TITLE = 'Kylin Bloks.io'
const BLOKS_PROXY = 'blokspartner'
const CHAIN_START_DATE = new Date('Jul 10, 2018')
const REX_ENABLED = false
const KEY_PREFIX = 'EOS'
const VOTING_ENABLED = true
const CORE_PRECISION = 4

module.exports = {
  DEFAULT_ENDPOINTS,
  ACTIONS_ENDPOINTS,
  TRANSACTIONS_ENDPOINTS,

  API_URL,
  ES_URL,
  HYPERION_URL,
  IMAGE_PROXY,
  PROVIDER_ENDPOINTS,
  CORE_SYMBOL,
  CHAIN,
  DFUSE_CHAIN,
  DISPLAY_CHAIN,
  HISTORY_TYPES,
  BLOKS_PROXY,
  LIGHT_API,
  CHAIN_ID,
  DOMAIN_TITLE,
  CHAIN_START_DATE,
  REX_ENABLED,
  KEY_PREFIX,
  VOTING_ENABLED,
  CORE_PRECISION
}
