function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    
  console.log('こんにちは,' + name + 'さん');
}

b = document.querySelector('button#print');

b.addEventListener('click', greeting);

