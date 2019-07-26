const DEFAULT_ENDPOINTS = [
  'https://fullnode.meet.one',
  'https://api.meetsweden.org'
]

const ACTIONS_ENDPOINTS = [
  'https://fullnode.meet.one',
  'https://api.meetsweden.org'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://fullnode.meet.one',
  'https://api.meetsweden.org'
]

const PROVIDER_ENDPOINTS = [{
  chainId: 'cfe6486a83bad4962f232d48003b1824ab5665c36778141034d75e57b956e422',
  port: 443,
  protocol: 'https',
  host: 'fullnode.meet.one',
  httpEndpoint: 'https://fullnode.meet.one',
  blockchain: 'eos'
}]

const API_URL = 'https://www.api.bloks.io/meetone'

const CORE_SYMBOL = 'MEETONE'
const CHAIN = 'meetone' // Should be like jungle, kylin
const DFUSE_CHAIN = '' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'MEET.ONE'
const ES_URL = ''
const HYPERION_URL = 'https://api.meetsweden.org'
const HISTORY_TYPES = ['native', 'hyperion']
const LIGHT_API = ''
const CHAIN_ID = 'cfe6486a83bad4962f232d48003b1824ab5665c36778141034d75e57b956e422'
const DOMAIN_TITLE = 'Meetone Bloks.io'
const CHAIN_START_DATE = new Date('2019-02-24')
const BLOKS_PROXY = ''
const REX_ENABLED = false
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
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
