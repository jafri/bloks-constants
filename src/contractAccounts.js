export const contractAccounts = (chain) => {
  const upgradedMsig = ['jungle', 'bos', 'kylin', 'telos'].includes(chain)

  return {
    EOSIO: 'eosio',
    EOSIO_TOKEN: 'eosio.token',
    ACCOUNT_INFO: 'account.info',
    EOSFORUM: 'eosio.forum',
    EOSIO_MSIG: 'eosio.msig',
    EOSIO_RAM: 'eosio.ram',
    EOSIO_STAKE: 'eosio.stake',
    EOSIO_PRODS: 'eosio.prods',
    EOSIO_VPAY: chain !== 'worbli' ? 'eosio.vpay' : 'eosio.ppay',
    EOSIO_BPAY: 'eosio.bpay',
    EOSIO_MSIG_APPROVALS_TABLE: upgradedMsig ? 'approvals2' : 'approvals',
    EOSIO_MSIG_PROPOSALS_TABLE: 'proposal'
  }
}
