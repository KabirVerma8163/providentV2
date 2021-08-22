let cloud_token = "pk_c1ad38d8a5314ba8b069c9998df9ab5f"
let sandbox_token = "Tsk_7124566e8c6147939d1708c99bd3b78a"

let ticker = "";

let headlines = new Array(4);
let images = new Array(4);
let urls = new Array(4);
let sources = new Array(4);


async function fetchDefaultNews()
{
    // const fetch = require("node-fetch");
    const response = await fetch(`https://cloud.iexapis.com/stable/time-series/news?range=1m&limit=4&token=${cloud_token}`)
    const news = await response.json();

    for(let i = 0; i < 4; i++)
    {
        sources[i] = news[i].source;
        urls[i] = news[i].url;
        images[i] = news[i].image;
        headlines[i] = news[i].headline;
    }
}

(async function()
{
    await fetchDefaultNews();
    updateStockNews();

})();

async function updateStockNews()
{
    document.getElementById("headline1").innerHTML = headlines[0];
    document.getElementById("source1").innerHTML = sources[0];
    document.getElementById("url1").setAttribute("href",urls[0]);
    document.getElementById("image1").src = images[0];

    document.getElementById("headline2").innerHTML = headlines[1];
    document.getElementById("source2").innerHTML = sources[1];
    document.getElementById("url2").setAttribute("href",urls[1]);
    document.getElementById("image2").src = images[1];

    document.getElementById("headline3").innerHTML = headlines[2];
    document.getElementById("source3").innerHTML = sources[2];
    document.getElementById("url3").setAttribute("href",urls[2]);
    document.getElementById("image3").src = images[2];

    document.getElementById("headline4").innerHTML = headlines[3];
    document.getElementById("source4").innerHTML = sources[3];
    document.getElementById("url4").setAttribute("href",urls[3]);
    document.getElementById("image4").src = images[3];
}