const { assert } = require('chai');

const Color = artifacts.require('./Color.sol');

require('chai').use(require('chai-as-promised')).should();

contract('Color', (accounts) => {
    let contract;

    before(async () => {
        contract = await Color.deployed();
    })

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            
            const address = contract.address;
            assert.notEqual(address, '');
        })

        it('has a name', async() => {
            const name = await contract.name();
            assert.equal(name, 'Color');
        })
    })

    describe('minting', async() => {
        it('create a new token', async() => {
            const result = await contract.mint("#FFFFFF");
            const totalSupply = await contract.totalSupply();
            assert.equal(totalSupply, 1);

            const event = result.logs[0].args;

            assert.equal(event.from, '0x0000000000000000000000000000000000000000'); // who called the function. address(0) is base 0x0000000000000000000000000000000000000000 address
            assert.equal(event.to, accounts[0]); // who is it minted to
            assert.equal(event.tokenId.toNumber(), 1);
        })

        it('cannot mint same token', async() => {
            await contract.mint("#FFFFFF").should.be.rejected;
        })
    })

    describe('indexing', async() => {
        it('minting 3 more colors', async() => {
            await contract.mint("#53A0E8");
            await contract.mint("#000000");
            await contract.mint("#FF0000");

            const totalSupply = await contract.totalSupply();
            
            let i = 0;
            let result = [];

            for (i = 0; i < totalSupply; i++) {
                result.push(await contract.colors(i));
            }

            let expected = ["#FFFFFF", "#53A0E8", "#000000", "#FF0000"];

            assert.equal(result.join(','), expected.join(','));
        })
    })
})