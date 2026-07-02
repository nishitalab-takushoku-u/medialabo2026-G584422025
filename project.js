let b = document.querySelector('#answer');
b.addEventListener('click', printAnswer);

function printAnswer() {
    let rs = document.querySelectorAll('input[name="year"]');
    
    for(let r of rs) {
        if(r.checked) { //rが選択されていたら
            console.log(r.value);
        }
    }

    //name属性がhobbyのinput要素を全て検索
    let cs = document.querySelectorSelectorAll('input[name="hobby"]');
    
    for(let c of cs) {
        if(c.checked) {
            console.log(c.value);
        }
    }
}