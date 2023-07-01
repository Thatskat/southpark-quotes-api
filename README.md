![](https://github.com/Thatskat/southpark-quotes-api/blob/main/public/imgs/southpark-api-header.svg)



<h1 align='center'> South Park Quotes API</h1>


<p align='center'>A pretty simple API to let you retrieve some of the best quotes from South Park, mmkay!</p>
&nbsp;
<div align='center'>
 <img src='https://img.shields.io/github/forks/Thatskat/southpark-quotes-api?label=Forks&style=for-the-badge&color=%23bbf7d0' alt='South Park Quotes API Forks'/>&nbsp;
 <img src='https://img.shields.io/github/stars/Thatskat/southpark-quotes-api?style=for-the-badge&color=%23bbf7d0' alt='South Park Quotes API Stars'/>&nbsp;
 <img src='https://img.shields.io/github/issues-pr/Thatskat/southpark-quotes-api?style=for-the-badge&color=%23bbf7d0' alt='South Park Quotes API Pull Requests'/>
</div>


## Production Host

🌐 [https://southparkquotes.up.railway.app/](https://southparkquotes.up.railway.app/)


## API


### `GET /v1/quotes`
Get a random quote:

> [https://southparkquotes.up.railway.app/v1/quotes](https://southparkquotes.up.railway.app/v1/quotes)


```
[
   {
      "quote": "Don’t you dare call me a Cartman!",
      "character": "Stan"
   }
]
```


### `GET /v1/quotes/{number}`
Returns an array of `{number}` South Park quotes. E.g. `GET /v1/quotes/3`

> [https://southparkquotes.up.railway.app/v1/quotes/3](https://southparkquotes.up.railway.app/v1/quotes/3)


```
[
     {
       "quote": "I'm not fat, I'm festively plump.",
       "character": "Cartman"
     },
     {
       "quote": "But what does being Hawaiian have to do with me being like an emo chick on her period?",
       "character": "Butters"
     },
     {
       "quote": "Cartman doesn’t know a rainforest from a Pop-Tart.",
       "character": "Stan"
     }
]
```

## Contributions
Want to add some South Park quotes? All you need to do is simply add them in the `quotes.js` file and then create a pull request.

## Credits
This quotes API was greatly inspired by [Breaking Bad Quotes](https://github.com/shevabam/breaking-bad-quotes) and [Ron Swnson Quotes](https://github.com/jamesseanwright/ron-swanson-quotes).
