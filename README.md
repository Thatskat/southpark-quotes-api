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

🌐 [https://southparkquotes.onrender.com/](https://southparkquotes.onrender.com/)


## API


### `GET /v1/quotes`
Get a random quote:

> [https://southparkquotes.onrender.com/v1/quotes](https://southparkquotes.onrender.com/v1/quotes)


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

> [https://southparkquotes.onrender.com/v1/quotes/3](https://southparkquotes.onrender.com/v1/quotes/3)


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

### `GET /v1/quotes/search/{searchTerm}`
Returns an array that is either said by or includes the `{searchTerm}` from South Park quotes. E.g. `GET /v1/quotes/search/randy`

> [https://southparkquotes.onrender.com/v1/quotes/search/randy](https://southparkquotes.onrender.com/v1/quotes/search/randy)


```
[
     {
       "quote": "as you get older, boobs will start becoming a major part of your life. but you can’t let them get in the way of your friends. there are a lot of boobs out there. but they’re just boobs. your friends are forever.",
       "character": "randy"
     },
     {
       "quote": "we must stop frivolous spending! instead of paying for cable, let us watch clouds! instead of buying clothes, wear but sheets from thine beds! cut spending to only the bare essentials! water and bread and margaritas!",
       "character": "randy"
     },
     {
       "quote": "oh, i forgot to tell you that part. i'm lorde.",
       "character": "randy"
     },
     {
       "quote": "i ammm lorde. lawdy lawdy lorde!",
       "character": "randy"
     },
     {
       "quote": "winter's coming, sharon, and i'm a busy little bee. buzz! buzz!",
       "character": "randy"
     },
     {
       "quote": "oh, i’m sorry! i thought this was america!",
       "character": "randy"
     },
     {
       "quote": "i’m not having a glass of wine, i’m having six. it’s called a tasting, and it’s classy.",
       "character": "randy"
     }
]
```


## Contributions
Want to add some South Park quotes? All you need to do is simply add them in the `quotes.js` file and then create a pull request.

## Credits
This quotes API was greatly inspired by [Breaking Bad Quotes](https://github.com/shevabam/breaking-bad-quotes) and [Ron Swnson Quotes](https://github.com/jamesseanwright/ron-swanson-quotes).
