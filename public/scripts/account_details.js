const dtoken = "Tsk_7124566e8c6147939d1708c99bd3b78a";
const base_url = `https://sandbox.iexapis.com/stable/stock/`
const base_url2 = `/chart/today?token=${dtoken}&includeToday=true`
let account_detail;

(function () {
    let accString = localStorage.getItem('account');
    if (accString != null)
    {
        account_detail = JSON.parse(accString);
        console.log('loading account from local storage');
    }
    else
    {
        account_detail = {
            email: '123@example.com',
            username: 'name',
            stonks: {
                tickers: [],
                stakes: [],
                shares: []
            },
            money: 10000,
            net_worth: 0,
            trades: [],
            net_growth: []
        }
    }
    console.log(account_detail.money);
})();

function calculateNetWorth()
{
    let sumStakes = 0;
    for (let i = 0; i < account_detail.stonks.stakes.length; i ++)
    {
        sumStakes += account_detail.stonks.stakes[i];
    }
    account_detail.net_worth = account_detail.money + sumStakes;
}


function storeLocal()
{
    localStorage.setItem('account', JSON.stringify(account_detail));
}
function getFromLocalStorage()
{
    account_detail = JSON.parse(localStorage.getItem('account'));
}