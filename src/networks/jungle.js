const DEFAULT_ENDPOINTS = [
  'https://jungleapi.eossweden.org',
  'https://jungle2.cryptolions.io',
  'https://jungle.eosphere.io',
  'https://api.jungle.alohaeos.com',
  'https://eos-jungle.eosblocksmith.io'
]

const ACTIONS_ENDPOINTS = [
  'https://jungleapi.eossweden.org',
  'https://junglehistory.cryptolions.io'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://jungleapi.eossweden.org',
  'https://junglehistory.cryptolions.io'
]

const PROVIDER_ENDPOINTS = [{
  chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
  port: 443,
  protocol: 'https',
  host: 'api.jungle.alohaeos.com',
  httpEndpoint: 'https://api.jungle.alohaeos.com',
  blockchain: 'eos'
}, {
  chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
  port: 443,
  protocol: 'https',
  host: 'jungle2.cryptolions.io',
  httpEndpoint: 'https://jungle2.cryptolions.io',
  blockchain: 'eos'
}]

const API_URL = 'https://www.api.bloks.io/jungle'
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_SYMBOL = 'EOS'
const CHAIN = 'jungle' // Should be like jungle, kylin
const DFUSE_CHAIN = 'jungle' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'Jungle'
const ES_URL = ''
const HYPERION_URL = 'https://jungle.hyperion.eosrio.io'
const HISTORY_TYPES = ['native', 'dfuse', 'hyperion']
const LIGHT_API = 'https://lightapi.eosgeneva.io'
const CHAIN_ID = 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
const DOMAIN_TITLE = 'Jungle Bloks.io'
const CHAIN_START_DATE = new Date('Nov 23, 2018')
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
  BLOKS_PROXY,
  CHAIN,
  DFUSE_CHAIN,
  DISPLAY_CHAIN,
  HISTORY_TYPES,
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
