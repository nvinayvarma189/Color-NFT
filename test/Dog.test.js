const Dog = artifacts.require('./Dog.sol');

require('chai').use(require('chai-as-promised')).should();

contract('Dog', (accounts) => {
    let contract;

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            contract = await Dog.deployed();
            const address = contract.address;
            assert.notEqual(address, '');
        })
    })
})