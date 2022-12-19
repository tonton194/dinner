'use strict';
const dinnerNameInput = document.getElementById('dinnerName');
const dinnerbuton = document.getElementById('choice');
const dinnerdiv = document.getElementById('dinner-eria');
const tweetdiv = document.getElementById('tweet-eria');

dinnerbuton.onclick = () => {
    const dinner = dinnerNameInput.value;
    console.log(dinner);
    dinnerdiv.innerText = ' ';
    let food = document.createElement('h3');
    food.innerText = '今日の晩御飯';
    dinnerdiv.appendChild(food);

    let food1 = document.createElement('p');
    let yuushoku = gohan(dinner);
    food1.innerText = yuushoku;
    dinnerdiv.appendChild(food1);
};
let foodchoice = {
    辛い:['麻婆豆腐','カレー','チゲ鍋','担々麺','豚キムチ','エビチリ','トッポギ'],
    麺類:['ラーメン','皿うどん','とろろそば','月見うどん','チャンポン','月見そば','ナポリタン','ペペロンチーノ'],
    肉料理:['ステーキ','ハンバーグ','照り焼きチキン']
    丼物:['カツ丼','親子丼','牛丼']
};

function gohan(dinner){
    console.log(dinner);
    let hairetu = foodchoice[dinner];
    console.log(hairetu);
    let junban = Math.floor(Math.random()*(hairetu.length));
    let yuushoku = hairetu[junban];
    return yuushoku;
};

