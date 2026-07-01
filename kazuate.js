// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let k,y,Y,R;
let H=0;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu += 1;
  k = document.querySelector('span#kaisu');
  k.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  y = document.querySelector('input[name="kazu"]');
  Y = Number(y.value);
  yoso = Y;
  console.log("Y=" + yoso);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if (kaisu<3) {
  if (Y===kotae) {
    R = '正解です. おめでとう!';
    if(H>0) {
      R = '答えは' + kotae + 'でした. すでにゲームは終わっています';
    }
    H += 1;
  } else if (Y !== kotae && kaisu===3) {
    R = 'まちがい.残念でした答えは' + kotae + 'です.';
  } else if (Y !== kotae && yoso<kotae) {
    R = 'まちがい. 答えはもっと大きいですよ';
  } else if (Y !== kotae && yoso>kotae) {
    R = 'まちがい. 答えはもっと小さいですよ';
  }
  } else {
    R = '答えは' + kotae + 'でした. すでにゲームは終わっています';
  }
  document.querySelector('p#result').textContent = R;
}
  // ここまで: 正解判定する

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
b = document.querySelector('button#print');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
