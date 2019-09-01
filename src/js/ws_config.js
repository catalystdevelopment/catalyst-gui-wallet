var config = {};

config.appName = 'CatalystLedger';
config.appDescription = 'Catalyst Wallet';
config.appSlogan = 'Catalyst building a better tomorrow.!';
config.appId = 'CatalystLedger';
config.appGitRepo = 'https://github.com/catalystdevelopment/catalyst-gui-wallet';

// default port number for your daemon (e.g. Catalyst daemon)
config.daemonDefaultRpcPort = 17291;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'nwl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'catalyst-service';

// version on the bundled service (catalyst-service)
config.walletServiceBinaryVersion = "v0.3.1.1";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. catalyst-service)
config.walletServiceRpcPort = 17280;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://www.cx-explorer.gq/index.html?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'zeta.cryptocatalyst.net';


// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/catalystdevelopment/catalyst-nodes-json/master/catalyst-nodes.json';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = false;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'zeta.cryptocatalyst.net:17291',
  '127.0.0.1:17291'
];

config.remoteNodeCacheSupported = false; //exclude unsupported nodes (bc-cache nodes)
config.remoteNodeSslSupported = false;


// your currency name
config.assetName = 'Catalyst';
// your currency ticker
config.assetTicker = 'CX';
// your currency address prefix, for address validation
config.addressPrefix = 'cat';
// standard wallet address length, for address validation
config.addressLength = 98;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 7;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces; //Should be 100 here

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Catalyst Developers Funds [n8tb1t]',
    address: 'cat18x93ufCQWaX4f8f2c2fZ8Ku2A4VTcgEoSpweiDbgEBF9i7YA2XGX1dSR7UbguQU5UKYEXyjfaTfnJBmRhHju26n8Y9AAFx',
    paymentId: '',
  },
  {
    name: 'Catalyst Developers Funds [dirtybits]',
    address: 'cat1Az2Xwt4byGrYeiKwxacV2pMahz7JaFPqW7eLbFPDP9kKT4rYMMq428KsZMbv8xK44j3dKBvaZW1VGzX4WVvb4R8ndN6WnD',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
