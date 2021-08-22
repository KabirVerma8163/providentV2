let symbolPlaceholder = "Your mom"

function searchSymbolSimulator()
{
  let symbol = document.getElementById("stockInput-simulator").value.toUpperCase();
  createCandlestickGraph(symbol, 'chart', '1y', 'graph-sample-stock');
  symbolPlaceholder = symbol
}



function stockBuy(elementId){
  // alert(elementId)
  let moneySpentId = document.getElementById(elementId).previousElementSibling.id
  let moneySpent = document.getElementById(moneySpentId).value
  let parentId = document.getElementById(elementId).parentNode.id
  console.log(parentId)
  let siblingId = document.getElementById(parentId).parentNode.firstElementChild.id
  alert(`symbol ${symbolPlaceholder} money ${moneySpent}`)

}


function newStockDiv(stockName, noOfShares, shareValue, moneySpent){
  let parentDiv = document.getElementById('actualStonks')


}

function onBuy(stockName, noOfShares){

}