# Alpha Camp Dev C3 M3 - Restaurant List

This is a first update solution Dev C3 M3

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- 使用者可以在首頁看到所有餐廳與它們的簡單資料：
- 餐廳照片
- 餐廳名稱
- 餐廳分類
- 餐廳評分
- 使用者可以再點進去看餐廳的詳細資訊：
- 類別
- 地址
- 電話
- 描述
- 圖片
- 使用者可以透過搜尋餐廳名稱來找到特定的餐廳
- 使用者可以透過搜尋餐廳類別來找到特定的餐廳

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/Chious/AC-c3-m3-restaurant-list](https://github.com/Chious/AC-c3-m3-restaurant-list)

## My process

### Built with

- [Express.js](https://expressjs.com) -- backend framework
- [handlebar.js](https://handlebarsjs.com) -- view template to host html without webpack
- [Boostrap](https://getbootstrap.com) -- UI Library

### 處理步驟

1. Router: 引入資料、處理篩選器邏輯

```js
const data = require("data-path");
```

```js
//篩選器
//Step1: if keyword exist
//Step2: if name include keyword or category include keyword => retrun true

const filterData = keyword ? data.filter(...) : data;

```

2. View: 刪除重複的部分

類似 `Array.prototype.forEach`，在 handlebar 可以使用 {{#each datas as |data|}} {{/each}} 來實現迴圈

### What I learned

### Useful resources

## Author

- Github - [邱佳昇](https://github.com/Chious)

## Acknowledgments None
