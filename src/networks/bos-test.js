const DEFAULT_ENDPOINTS = [
  'https://bos-test.eospacex.com'
]

const TRANSACTIONS_ENDPOINTS = [
  'https://bos-test.eospacex.com'
]

const ACTIONS_ENDPOINTS = [
  'https://bos-test.eospacex.com'
]

const PROVIDER_ENDPOINTS = [ {
  chainId: '33cc2426f1b258ef8c798c34c0360b31732ea27a2d7e35a65797850a86d1ba85',
  port: 443,
  protocol: 'https',
  host: 'bos-test.eospacex.com',
  httpEndpoint: 'https://bos-test.eospacex.com',
  blockchain: 'eos'
}]

const API_URL = 'https://www.api.bloks.io/bos-test'
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_SYMBOL = 'BOS'
const CHAIN = 'bos-test' // Should be like jungle, kylin
const DFUSE_CHAIN = '' // Should be like jungle, kylin
const DISPLAY_CHAIN = 'BOS Test'
const ES_URL = ''
const HYPERION_URL = 'https://bos-test.eospacex.com'
const HISTORY_TYPES = ['hyperion']
const LIGHT_API = ''
const CHAIN_ID = '33cc2426f1b258ef8c798c34c0360b31732ea27a2d7e35a65797850a86d1ba85'
const DOMAIN_TITLE = 'BOS Testnet Bloks.io'
const CHAIN_START_DATE = new Date('Dec 13, 2018')
const BLOKS_PROXY = 'blokspartner'
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
