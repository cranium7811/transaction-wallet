var SimpleWallet = artifacts.require("SimpleWallet");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(SimpleWallet);
};