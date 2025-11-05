//#mkGDenYnNjn.html
//
//  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400


function exchange (sumUAH, currencyValues,exchangeCurrency){
   if (exchangeCurrency === 'USD'){exchangeCurrency = Math.round(sumUAH / currencyValues[0].value) * 100 / 100}
   else if (exchangeCurrency ==='EUR'){exchangeCurrency = Math.round((sumUAH / currencyValues[1].value) * 100) / 100}
   console.log(exchangeCurrency);
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR', value:42}],'USD')
exchange(10000,[{currency:'USD',value:25},{currency:'EUR', value:42}],'EUR')