var numberToFind = 0;
var attemps = 0;

function refresh(){
    // gera um numero aleatorio 
    attemps = 0;
    numberToFind = parseInt(Math.random() * 100);

    console.log(numberToFind)
}

function verifyNumber(){

    var bet = document.getElementById('bet').value;

    if(bet > 100 || bet < 1)
    {
        alert('Invalid bet.');
        return
    }
    if(bet > numberToFind)
    {   
        attemps++;
        alert('the number to be found is LESS');
    }
    else if(bet < numberToFind)
    {
        attemps++;
        alert('the number to be found is HIGHER');
    }
    else
    {
        alert('CONGRATULATIONS! YOU GOT THE RIGHT NUMBER! With '+attemps+' errors.');
        refresh()
    }
}


refresh();