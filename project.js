let b = document.querySelector('#btn');
b.addEventListener('click', printAnswer);

function printAnswer() {
    //name属性がhobbyのinput要素を全て検索
    let cs = document.querySelectorSelectorAll('input[name="info"]');
    
    for(let c of cs) {
        if(c.checked) {
            console.log(c.value);
        }
    }
}