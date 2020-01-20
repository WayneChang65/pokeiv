[![npm](https://img.shields.io/npm/v/@waynechang65/pokeiv.svg)](https://www.npmjs.com/package/@waynechang65/pokeiv)
[![npm](https://img.shields.io/npm/dm/@waynechang65/pokeiv.svg)](https://www.npmjs.com/package/@waynechang65/pokeiv)
[![Build Status](https://travis-ci.org/WayneChang65/pokeiv.svg?branch=master)](https://travis-ci.org/WayneChang65/pokeiv)
[![GitHub](https://img.shields.io/github/license/waynechang65/pokeiv.svg)](https://github.com/WayneChang65/pokeiv/)
# pokeiv
pokeiv 是一個可以計算寶可夢**個體值**(Individual values, IVs)的模組。(目前支援本傳三代以後的寶可夢) 

pokeiv is a module that can be used to calculate **IVs**(Individual values) of Pokémons.(After the 3rd Generation supported)

## 前言(Overview)
計算寶可夢個體值(Individual values, IVs)幾乎是每個寶可夢玩家會做的事。目前使用Javascript寫寶可夢個體值查詢的開放模組很少，所以寫一個來用。 

Calculating individual values(IVs) of Pokémon is almost every Pokémon player will do. Currently there are very few open source modules for calculating Pokémon individual values with Javascript, so write one to use. 

## 這個模組能做什麼事？ (What can it do ?)
* 查寶可夢的個體值，查寶可夢的名字。(支援多國語言)    
Calculating individual values(IVs) of Pokémons, querying names of Pokémons by international numbers.(support multi-languages)

## 如何在您的專案使用？ (How to use it in your project ?)
* 利用 npm 套件進行下載  
Use npm to install
```
npm install --save @waynechang65/pokeiv
```
* 在您的專案環境中，引用 @waynechang65/pokeiv 模組。  
Include @waynechang65/pokeiv package in your project
```javascript
const pokeiv = require('@waynechang65/pokeiv');
```

* 接下來，在專案裏的**async函式**內使用即可。 
Add programs in an **async function** in your project. 

* 回傳個體值(IVs)資料陣列。 
The function will return an array of IVs. 

## 如何跑範例程式？ (How to run the example ?)

* 從GitHub下載pokeiv專案程式  
Clone pokeiv from GitHub
```
git clone https://github.com/WayneChang65/pokeiv.git
```

* 在pokeiv專案環境中，下載必要模組。  
Install dependencies in the cloned pokeiv folder
```
npm install
```

* 透過 npm 直接使用以下指令。(實際範例程式在 ./examples/demo.js)  
Run it with npm. (the demo example is in ./examples/demo.js)
```
npm start
``` 

## 基本函式 (Base Methods) 
* setLanguage: 設定多國語言, set a language to use 
* getIVs: 取得寶可夢個體值(IVs), calculate IVs of Pokemon  
* getPokeName: 取得寶可夢的名字, query a name of Pokemon by number 

## 參考網站 (Reference)  
* [Admiral-Fish / RaidFinder](https://github.com/Admiral-Fish/RaidFinder) 
* [rusted-coil / OneStar](https://github.com/rusted-coil/OneStar) 

## 貢獻一己之力 (Contribution)  
pokeiv 雖然是一個小模組，但本人還是希望這個專案能夠持續進步！若有發現臭蟲(bug)或問題，請幫忙在Issue留言告知詳細情形。  
歡迎共同開發。歡迎Fork / Pull Request，謝謝。:)  

Even though pokeiv is a small project, I hope it can be improving. If there is any issue, please comment and welcome to fork and send Pull Request. Thanks. :)
