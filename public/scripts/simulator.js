let symbolPlaceholder = "Your mom"
let moneySpentPlaceholder = 0

document.getElementById("balance-text-simulator").innerText = `Balance: $${account_detail.money}`;

function searchSymbolSimulator(){
  let symbol = document.getElementById("stockInput-simulator").value.toUpperCase();
  createCandlestickGraph(symbol, 'chart', '1y', 'graph-sample-stock');
  symbolPlaceholder = symbol;
}

function stockBuy(elementId){
  // alert(elementId)
  let moneySpentId = document.getElementById(elementId).previousElementSibling.id
  let moneySpent = document.getElementById(moneySpentId).value
  let parentId = document.getElementById(elementId).parentNode.id
  let siblingId = document.getElementById(parentId).parentNode.firstElementChild.id
  moneySpentPlaceholder = moneySpent;
  console.log('bought stonk');
  buyStonk(symbolPlaceholder, moneySpentPlaceholder);
  console.log('bought stonk');
  account_detail.username = 'asdf';
  console.log(localStorage.getItem('account'));
}


function newStockDiv(stockName, noOfShares, shareValue, moneySpent){
  let parentDiv = document.getElementById('actualStonks')


}

function buyStonk(ticker, cost)
{
  let price;
  account_detail.money -= cost;
  fetch(`${base_url}${ticker}${base_url2}`)
    .then((response) => {
      return response.json();
    })
    .then((stonks) => {
      price = stonks[stonks.length-1].close;
      account_detail.stonks.tickers.push(ticker);
      account_detail.stonks.stakes.push(cost);
      account_detail.stonks.shares.push(cost/price);
      calculateNetWorth();
      storeLocal();
      document.getElementById("balance-text-simulator").innerText = `Balance: $${account_detail.money}`;
      console.log(account_detail)
    });
}

function refresh()
{
  for (let i = 0; i < account_detail.stonks.tickers.length; i ++)
  {
    fetch(`${base_url}${account_detail.stonks.tickers[i]}${base_url2}`)
      .then((response) => {
        return response.json();
      })
      .then((stonks) => {
        price = stonks[stonks.length - 1].close;
        let growth = price * account_detail.stonks.shares[i] - account_detail.stonks.stakes[i];
        account_detail.stonks.stakes[i] += growth;
        account_detail.net_growth.push(growth);
        calculateNetWorth();
      })
  }
}