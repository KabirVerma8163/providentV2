function searchSymbolSimulator()
{
  let symbol = document.getElementById("stockInput").value;
  createCandlestickGraph(symbol, 'chart', '1y', 'graph1');
  // var othergraphs = [document.getElementById("graph2"),document.getElementById("graph3"),document.getElementById("graph4"),document.getElementById("graph5")];
  // for (let i = 0; i < othergraphs.length; i++)
  // {
  //   othergraphs[i].style.display = 'none';
  // }
}



function stockBuy(elementId){
  // alert(elementId)
  let parentId = document.getElementById(elementId).parentNode.id
  console.log(parentId)
  let siblingId = document.getElementById(parentId).parentNode.firstElementChild.id
  alert(siblingId)
  console.log(siblingId)
  createCandlestickGraph('AAPL', 'chart', '2y', siblingId);
}


function newStockDiv(stockName, noOfShares, shareValue, moneySpent){
  let parentDiv = document.getElementById('actualStonks')


}

function onBuy(stockName, noOfShares){

}