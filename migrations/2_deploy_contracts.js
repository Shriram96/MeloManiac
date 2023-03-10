const MeloManiac = artifacts.require("MeloManiac");
const MeloNotes = artifacts.require("MeloNotes");

module.exports = function (deployer) {
  deployer.deploy(MeloNotes, "MeloNotes", "MNT", 1000000).then(function() {
    return deployer.deploy(MeloManiac, MeloNotes.address);
  });
};
