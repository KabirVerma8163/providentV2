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
}

let shares = account_detail.stonks.shares
let stakes = account_detail.stonks.stakes

/*generateTableHead(document.querySelector("table"));*/
for (let i = 0; i < shares.length; i++)
{
  fetch(`${base_url}${account_detail.stonks.tickers[i]}${base_url2}`)
      .then(response => response.json())
      .then(data => {
        console.log(i);
        generateRow(document.querySelector("table"), [account_detail.stonks.tickers[i],
            account_detail.stonks.stakes[i], account_detail.stonks.shares[i], data[data.length - 1].close,  data[data.length - 1].close * account_detail.stonks.shares[i]]);
      });
}


/*if(shareObject.length > 0){
  document.getElementById('noPortfolioMessage').innerHTML = "You dipshit, your portfolio is fucking empty you god damn loser."
} else {
  document.getElementById('noPortfolioMessage').innerHTML = "Bloody fucker."
}*/

