const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const pbh = 'asdasdASDASD';
const cbh = [
    {
        amount:10,sender:'ASDASDASDFDG',recipient:'aSDGFDASD'
    },{
        amount:20,sender:'ASGFDGFDASDFDG',recipient:'aFDSDSDASD'
    },{
        amount:30,sender:'AQWEqweSDASDFDG',recipient:'aEQWQWEFDASD'
    }
];

console.log(bitcoin.hashBlock(pbh , cbh , bitcoin.proofOfWork(pbh , cbh)));