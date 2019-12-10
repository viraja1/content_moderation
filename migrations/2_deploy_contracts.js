const ContentModeration = artifacts.require("ContentModeration");
const LinkTokenInterface = artifacts.require("LinkTokenInterface");

const linkTokenAddress = "0x20fE562d797A42Dcb3399062AE9546cd06f63280";
const oracle = "0x4a3fbbb385b5efeb4bc84a25aaadcd644bd09721";
const jobId = web3.utils.toHex("ebd878dd37464f9f8b5411e3819468b5");
const paymentAmount = web3.utils.toWei("0.1");

module.exports = async function (deployer) {
    await deployer.deploy(ContentModeration, linkTokenAddress, oracle, jobId, paymentAmount);
    const contentModeration = await ContentModeration.deployed();

    const linkToken = await LinkTokenInterface.at(linkTokenAddress);
    await linkToken.transfer(contentModeration.address, paymentAmount);
};