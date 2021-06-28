# 期末專題
主題: 台大知識王挑戰賽
- 姓名: 趙晨安
- 系級: 外文四
- 學號: B06102029

## 專題網址
https://anniechao.github.io/final/index.html
## 影片網址

## 專題簡介
你有多了解 NTU 呢? 經過一整學期的學習，融合自己的 `HTML`、`CSS`、`JavaScript` 知識，以及參考網路上的教學影片，我製作出專屬於台大人的知識王挑戰賽。透過 10 個與台大相關的物題測驗使用者對台大的瞭解程度。並提供輸入名稱的功能，留下分數紀錄，顯示於高分排行榜。 同時使用 `holwer.js` 函式庫，在測驗過程中增添背景音樂、按鈕音效等功能，更顯得活潑趣味。

## 如何使用我的網站
點擊專題網址進入測驗首驗，使用者可選擇閱讀規則、直接進入遊戲、或是瀏覽排行榜
- 閱讀規則
  - 簡單說明挑戰內容與項目，一共 10 題，每題 10 分，總分為 100
  - 呼籲使用者可於測驗後登錄名稱，留作紀錄
  - 可選擇直接開始遊戲或返回首頁
- 進入遊戲
  - 每題皆為單選題
  - 左上角顯示答題進度
  - 右上角顯示目前總分數
  - 正確答案為綠色，錯誤答案為紅色
  - 點擊選項時有按鈕音效
  - 可於右下角選擇開啟與停止背景音樂播放
- 結束遊戲
  - 使用者可選擇是否輸入名稱
  - 輸入後點擊 `save` 會跳回首頁，可於首頁點擊 `leaderboard` 觀看排行榜
  - 亦可再次進入遊戲
  - 可直接返回首頁
- 排行榜
  - 顯示使用者輸入名稱與當次測驗分數
  - 依照分數高低取最高分前五名

## Design
- 靈感參考: [How to Make a Quiz App using HTML CSS Javascript](https://www.youtube.com/watch?v=f4fB9Xg2JEY&ab_channel=BrianDesign)
  - 自行調整配色、版面、題目內容，並增加音效、背景音樂、與規則說明頁
- Font Awesome Icon : https://fontawesome.com/
## JavaScript 函式庫 - Howler.js
- [Howler.js](https://howlerjs.com/)
  - howler.js makes working with audio in JavaScript easy and reliable across all platforms.
- 參考影片製作音效、背景音樂: [Add Sound to your JavaScript game with Howler JS](https://www.youtube.com/watch?v=hn7MhPt24L4&ab_channel=DrewConley)
- 音效來源: https://www.zapsplat.com/
- 音樂來源:
  ```
  Monkeys Spinning Monkeys Kevin MacLeod (incompetech.com)
  Licensed under Creative Commons: By Attribution 3.0 License
  http://creativecommons.org/licenses/by/3.0/
  Music promoted by https://www.chosic.com/ 
  ```
## 特色
- 使用 @media 製作 RWD
```
@media screen and (max-width: 768px) {
    .choice-container{
        min-width: 40rem;
    }
}
```
- 使用 `math.random` 使題目隨機出題，不按照順序
```
 const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
 ```
- 若音樂已開始，不會重複播放，且停止後能從暫停處繼續播音樂
```
var bgmusic = new Howl({
    src: ['Monkeys-Spinning-Monkeys.mp3'],  
  });
document.querySelector(".play-music").addEventListener("click", () => {
    if (!bgmusic.playing()) {
       bgmusic.play();
    }
 })
 document.querySelector(".stop-music").addEventListener("click", () => {
    bgmusic.pause();
 })  
```
