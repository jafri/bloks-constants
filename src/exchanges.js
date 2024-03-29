export const exchanges = {
  'Bithumb': {
    'name': 'Bithumb',
    'description': '비트코인, 이더리움, 비트코인캐시, 리플, 라이트코인, 대시, 모네로, 비트코인골드, 이오스, 이더리움클래식, 퀀텀, 제트캐시, 실시간 시세, 쉽고 안전한 거래.',
    'accounts': ['bithumbshiny'],
    'logo': 'https://raw.githubusercontent.com/eoscafe/eos-dapps/master/logos/placeholder.png',
    'website': 'https://www.bithumb.com/'
  },
  'OKEx': {
    'name': 'OKEx',
    'description': 'OKEx is the leading global bitcoin exchange. Secured with bank-level SSL encryption and cold storage.',
    'accounts': ['okexoffiline'],
    'logo': 'https://raw.githubusercontent.com/eoscafe/eos-dapps/master/logos/placeholder.png',
    'website': 'https://www.okex.com/'
  },
  'Bitfinex': {
    'name': 'Bitfinex',
    'description': 'Bitfinex is a full-featured spot trading platform for major digital assets & cryptocurrencies, including Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO, Monero and many more.',
    'accounts': ['bitfinexcw55', 'bitfinexcw13', 'bitfinexcw11', 'bitfinexcw24', 'bitfinexcw15', 'bitfinexcw32', 'bitfinexcw21', 'bitfinexcw31', 'bitfinexcw25', 'bitfinexcw23', 'bitfinexcw33', 'bitfinexcw22', 'bitfinexcw12', 'bitfinexcw14'],
    'logo': 'https://raw.githubusercontent.com/eoscafe/eos-dapps/master/logos/placeholder.png',
    'website': 'https://bitfinex.com/'
  },
  'Gate.io': {
    'name': 'Gate.io',
    'description': 'Gate.io is a bitcoin exchange platform which supports BTC, LTC, Ethereum, Qtum and more blockchain assets trading.',
    'accounts': ['gateiowallet'],
    'logo': 'https://raw.githubusercontent.com/eoscafe/eos-dapps/master/logos/placeholder.png',
    'website': 'https://www.gate.io/'
  },
  'Kraken': {
    'name': 'Kraken',
    'description': 'Buy, sell and margin trade Bitcoin (BTC) and Etherum (ETH) in exchange with EUR, USD, CAD, GBP, and JPY.',
    'accounts': ['krakenkraken'],
    'logo': 'https://raw.githubusercontent.com/eoscafe/eos-dapps/master/logos/placeholder.png',
    'website': 'https://www.kraken.com/'
  },
  'Newdex': {
    'name': 'Newdex',
    'description': 'The first EOS based decentralized exchange in the world.',
    'accounts': ['newdexpocket'],
    'logo': '/img/exchanges/newdex.png',
    'website': 'https://newdex.io/',
    linkGenerator: (token, pair) => `https://newdex.io/trade/${token.account}-${pair.pair_base.toLowerCase()}-${pair.pair_quote.toLowerCase()}`
  },
  'Chaince': {
    'name': 'Chaince',
    'description': 'A Superior Blockchain Asset Trading Platform Focusing on EOS Projects.',
    'accounts': ['chainceoneos'],
    'logo': '/img/exchanges/chaince.png',
    'website': 'https://chaince.com/',
    linkGenerator: (token, pair) => `https://chaince.com/trade/${pair.pair_base.toLowerCase()}${pair.pair_quote.toLowerCase()}`
  },
  'Dexeos': {
    'name': 'Dexeos',
    'description': 'The World\'s First EOS-based Decentralized Exchange',
    'accounts': ['dexeoswallet'],
    'logo': '/img/exchanges/dexeos.png',
    'website': 'https://dexeos.io/',
    linkGenerator: (token, pair) => `https://dexeos.io/trade/${pair.pair_base.toUpperCase()}`
  }
}
