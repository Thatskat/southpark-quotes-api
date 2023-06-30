<img src=''/>

<h1 align='center'>South Park Quotes API</h1>
<p align='center'>A pretty simple API to let you retrieve some of the best quotes from South Park, mmkay!</p>
&nbsp;
<div align='center' id='githubStats'>
 <img src='https://img.shields.io/github/forks/Thatskat/southpark-quotes-api?label=Forks&style=for-the-badge&color=%23bbf7d0' alt='Southpark API Forks'/>&nbsp;
 <img src='https://img.shields.io/github/stars/Thatskat/southpark-quotes-api?style=for-the-badge&color=%23bbf7d0' alt='Southpark API Stars'/>&nbsp;
 <img src='https://img.shields.io/github/issues-pr/Thatskat/southpark-quotes-api?style=for-the-badge&color=%23bbf7d0' alt='Southpark API Pull Requests'/>
</div>
&nbsp;
<h2>Production Host</h2>
🌐 <a href='https://southparkquotes.up.railway.app/'>https://southparkquotes.up.railway.app/</a>
&nbsp;

<h2>API</h2>
<h3><b>GET /v1/quotes</b></h3>
<p>Get a random quote:</p>
<a href='https://southparkquotes.up.railway.app/v1/quotes'>https://southparkquotes.up.railway.app/v1/quotes</a>
&nbsp;

```
[
   {
      "quote": "Don’t you dare call me a Cartman!",
      "character": "Stan"
   }
]
```


<h3><b>GET /v1/quotes/{number}</b></h3>
<p>Returns an array of {number} of South Park quotes. E.g. GET /v1/quotes/3 :</p>
<a href='https://southparkquotes.up.railway.app/v1/quotes/3'>https://southparkquotes.up.railway.app/v1/quotes/3</a>
&nbsp;

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

<h2>Contribution</h2>
<p>Want to add some South Park quotes? All you need to do is simply add them in the quotes.js file and then create a pull request.</p>

<h2>Credits</h2>
<p>This quotes API was greatly inspired by <a href='https://github.com/shevabam/breaking-bad-quotes'>Breaking Bad Quotes</a> and <a href='https://github.com/jamesseanwright/ron-swanson-quotes'>Ron Swnson Quotes</a>.</p>
