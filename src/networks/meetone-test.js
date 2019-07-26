const DEFAULT_ENDPOINTS = [
  'https://sidechain-test-history.meet.one'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://sidechain-test-history.meet.one'
]

const ACTIONS_ENDPOINTS = [
  'https://sidechain-test-history.meet.one'
]

const PROVIDER_ENDPOINTS = [ {
  chainId: '7136e3e32a458bb99cf6973ab5055869d25830607b9e78593769e1be52fb6f20',
  port: 443,
  protocol: 'https',
  host: 'sidechain-test-history.meet.one',
  httpEndpoint: 'https://sidechain-test-history.meet.one',
  blockchain: 'eos'
}]

const API_URL = 'https://www.api.bloks.io/meetone-test'
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_SYMBOL = 'MEETONE'
const CHAIN = 'meetone-test' // Should be like jungle, kylin
const DFUSE_CHAIN = '' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'MEET.ONE Test'
const ES_URL = ''
const HYPERION_URL = ''
const HISTORY_TYPES = ['native']
const LIGHT_API = ''
const CHAIN_ID = '7136e3e32a458bb99cf6973ab5055869d25830607b9e78593769e1be52fb6f20'
const DOMAIN_TITLE = 'MEET.ONE Testnet Bloks.io'
const CHAIN_START_DATE = new Date('Apr 24, 2019')
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
