let account_detail = JSON.parse(localStorage.getItem('account'));
console.log(account_detail)

let shares = account_detail.stonks.shares
let stakes = account_detail.stonks.stakes

let index = 0;
let shareObject = {}
console.log('bloody bitch')
while(index < shares.length){
  shareObject[shares[index]] = stakes
  index += 1;
}
console.log(shareObject)

if(shareObject.length > 0){
  document.getElementById('noPortfolioMessage').innerHTML = "You dipshit, your portfolio is fucking empty you god damn loser."
} else {
  document.getElementById('noPortfolioMessage').innerHTML = "Bloody fucker."
}