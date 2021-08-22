/*function generateTableHead(table)
{
  let thead = table.createTHead();
  let row = thead.insertRow();
  let headers = ['Ticker', 'Stake (price bought at)', 'Shares', 'current price'];
  for (let i = 0; i < 4; i++)
  {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(headers[i]));
    row.appendChild(th);
  }
}*/
function generateRow(table, rowData)
{
  let row = table.insertRow();
  for (let i = 0; i < rowData.length; i++) {
    let cell = row.insertCell();
    let text = document.createTextNode(rowData[i]);
    cell.appendChild(text);
  }
  let input = document.createElement("input");
  input.id = `sellAmountRow${row.rowIndex}`;
  input.style = "color: black";
  input.type = 'number';
  let btn = row.insertCell();
  btn.innerHTML = 'Sell';
  btn.onclick = (function () {
    onClickFunction(rowData[0], input.id);
  });
  btn.appendChild(input);
}

function onClickFunction(ticker, inputBoxId){
  let amountSold = document.getElementById(inputBoxId).value
  let index = account_detail.stonks.tickers.indexOf(ticker)
  if (amountSold <= account_detail.stonks.stakes[index]){
    sellStonk(ticker, amountSold);
  } else {
    alert("You are selling more than you have!!!!")
  }
}

if (account_detail.stonks.tickers.length > 0) {
  document.getElementById('no-portfolio').style.display = 'block'
}
let shares = account_detail.stonks.shares
let stakes = account_detail.stonks.stakes
if (account_detail.stonks.tickers.length > 0) {
  document.getElementById('no-portfolio').style.display = 'block';
  let shares = account_detail.stonks.shares;
  let stakes = account_detail.stonks.stakes;
    let promises = [];
    for (let i = 0; i < shares.length; i++)
    {
      promises.push(fetch(`${base_url}${account_detail.stonks.tickers[i]}${base_url2}`)
          .then(response => response.json()));
    }
    Promise.all(promises).then(data => {
      for (let i = 0; i < data.length; i++)
      {
        generateRow(document.querySelector("table"), [account_detail.stonks.tickers[i],
          account_detail.stonks.stakes[i], account_detail.stonks.shares[i], data[data.length - 1].close,  data[i][data[i].length - 1].close * account_detail.stonks.shares[i]]);
      }
      });
} else {
  document.getElementById('noPortfolioMessage').style.display = 'block';
  document.getElementById('noPortfolioMessage').innerHTML = `Your portfolio is empty, start investing: <a href='simulator.html' class='underline'>Simulator</a>`
}

function sellStonk(ticker, amountSold){
  copy = account_detail.net_worth;
  account_detail.money += amountSold;
  fetch(`${base_url}${ticker}${base_url2}`)
    .then((response) => {
      return response.json();
    })
    .then((stonks) => {
      price = stonks[stonks.length-1].close;
      index = account_detail.stonks.tickers.indexOf(ticker);
      account_detail.stonks.stakes[index] -= amountSold
      account_detail.stonks.shares[index] -= amountSold / price;
      if (account_detail.stonks.stakes[index] <= 0)
      {
        account_detail.stonks.stakes.splice(index, 1);
        account_detail.stonks.shares.splice(index, 1);
        account_detail.stonks.tickers.splice(index, 1);
      }
      calculateNetWorth();
      profit = account_detail.net_worth - copy;
      account_detail.trades += profit;
      storeLocal();
      console.log(account_detail);
      location.reload();
    })
}


/*if(shareObject.length > 0){
  document.getElementById('noPortfolioMessage').innerHTML = "You dipshit, your portfolio is fucking empty you god damn loser."
} else {
  document.getElementById('noPortfolioMessage').innerHTML = "Bloody fucker."
}*/

