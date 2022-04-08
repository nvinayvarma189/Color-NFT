const Color = artifacts.require("Color");
const Dog = artifacts.require("Dog");

module.exports = function(deployer) {
  deployer.deploy(Color);
  deployer.deploy(Dog);
};
