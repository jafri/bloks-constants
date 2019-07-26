import { contractAccounts } from './contractAccounts'

class Constants {
  constructor () {
    if (!Constants.instance) {
      const hosts = location.hostname.split('.')
      const host = hosts[0] === 'www' ? hosts[1] : hosts[0]
      const chain = (host && host.indexOf('determined-carson') === -1 && location.hostname.indexOf('cloudflareworkers') === -1 && !['localhost', 'bloks', 'eosplore'].includes(host) && host) || process.env.CHAIN || 'eos'

      const constants = require(`./networks/${chain}.js`)
      for (const [key, value] of Object.entries(constants)) {
        this[key] = value
      }

      const accounts = contractAccounts(chain)
      for (const [key, value] of Object.entries(accounts)) {
        this[key] = value
      }
    }

    return Constants.instance
  }

  setConstants (newConstants) {
    for (const [key, value] of Object.entries(newConstants)) {
      this[key] = value
    }
  }
}

export const constants = new Constants()
