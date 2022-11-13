class API {
	constructor() {
		this.coin = "bitcoin";
		this.mainClient = {
			bitcoin: false,
			litecoin: false,
			bitcoinTestnet: false,
			litecoinTestnet: false,
			vertcoin: false,
			hthcoin: false
		};
		this.peer = {
			bitcoin: {},
			litecoin: {},
			bitcoinTestnet: {},
			litecoinTestnet: {},
			vertcoin: {},
			hthcoin: {}
		};
		this.peers = {
			bitcoin: [],
			litecoin: [],
			bitcoinTestnet: [],
			litecoinTestnet: [],
			vertcoin: [],
			hthcoin: []
		};
	}

	updateCoin(coin) {
		this.coin = coin;
	};

	updateMainClient(mainClient) {
		this.mainClient = mainClient;
	}

	updatePeer(peer) {
		this.peer = peer;
	}

}

module.exports = new API();
