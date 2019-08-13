# Catalyst GUI Wallet

### Features:
This wallet contains the basic functions required to manage your Catalyst assets:

* Wallet creation
  * Create new wallet
  * Import from private keys
  * Import from mnemonic seed
* Basic wallet operation
  * Open an existing  wallet
  * Display wallet address & balance
  * Display private keys/seed
  * Export private keys/seed
  * Transactions listing/sorting/searching
  * Display transaction detail
  * Export incoming, outgoing, or all transactions to csv file.
  * Incoming Transaction notification
  * Send Catalyst to single recipient address, allow to set payment id and custom fee. Provides address lookup from addressbook.
  * Perform wallet optimization by creating fusion transactions
  * Provides utility to generate payment id and integrated address
* Address book
  * Add/Edit/Delete address entry (label/name, address and payment id)
  * Listing/sorting/searching existing entries
  * Allow to store same wallet address with different payment id
  * Autosave address after sending to new/unknown recipient
* Misc
  * Provides setting to set local or public node address
  * Option to use system tray (on closing/minimizing wallet)
  * Custom node address that is not on the list will be added/remembered for future use
  * Theme: Dark & Light Mode
  * [Keyboard shortcuts](docs/shortcut.md)
  * Exchange Listings Table


### Notes

The wallet relies on `catalyst-service` to manage wallet container &amp; rpc communication.

On first launch, Catalyst WalletShell will try to detect location/path of bundled `catalyst-service` binary,
but if it's failed, you can manually set path to the `catalyst-service` binary on the Settings screen.

In windows configuration files are found in directory %USERPROFILE%\AppData\Roaming\catalyst-gui-wallet ,
on issues it helps to delete it and restart the wallet.

Program File are situated %USERPROFILE%\AppData\Local\Programs\catalyst-gui-wallet

### Download & Run Catalyst Wallet


#### GNU/Linux (AppImage):
1. Download latest AppImage bundle here: https://github.com/catalystdevelopment/catalyst-gui-wallet/releases/latest
2. Make it executable, either via GUI file manager or command line, e.g. `chmod +x catalyst-wallet-<version>-linux.AppImage`
3. Run ./catalystd by locating the app in your Catalyst directory and double clicking, then Run the `wallet` file by double clicking the app
4. To use own blockchain the Daemon or public node address needs setting as 127.0.0.1 and Daemon/node port set as 17291
   To use a public node visit the main website to see a list of available nodes.


See: https://docs.appimage.org/user-guide/run-appimages.html

### Build from source

You need to have Node.js and npm installed, go to https://nodejs.org and find out how to get it installed on your platform.

Once you have Node+npm installed:

### first, download catalyst-service binary for each platform
$ from Catalyst official repo
$ https://github.com/catalystdevelopment/catalyst/releases
$ extract the catalyst-service executable somewhere

### clone the repo
$ git clone https://github.com/catalystdevelopment/catalyst-gui-wallet.git
$ cd catalyst-gui-wallet

### install dependencies
$ npm install

### create build+dist directory
$ mkdir -p ./build && mkdir -p ./dist

### copy/symlink icons from assets, required for packaging
$ cp ./src/assets/icon.* ./build/

### build GNU/Linux package
$ mkdir -p ./bin/lin
$ cp /path/to/linux-version-of/catalyst-service ./bin/lin/
$ npm run dist-lin

### build Windows package
$ mkdir -p ./bin/win
$ cp /path/to/win-version-of/catalyst-service.exe ./bin/win/
$ npm run dist-win

### build OSX package
$ mkdir -p ./bin/osx
$ cp /path/to/osx-version-of/catalyst-service ./bin/osx/
$ npm run dist-mac

Resulting packages or installer can be found inside dist/ directory.
