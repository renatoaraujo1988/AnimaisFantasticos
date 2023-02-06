export default function initFetchBitcoin() {
  const bitcoinPreco = document.querySelector('.btc-preco')
const url = 'https://blockchain.info/ticker';
async function bitcoin () {
  const bitcoinPromise = await fetch(url);
  const bitcoinResponse = await bitcoinPromise.json();
  bitcoinPreco.innerText = (100 / bitcoinResponse.BRL.buy).toFixed(8).toString().replace('.', ',');
}
bitcoin();
}




