function getDisplay(id) {
    var result = document.getElementById(id).value;
    if (result == ''){
        
        return '';
    }
    return result;
}

function printDisplay(id, num) {
    document.getElementById(id).value = num;
}

var pinGenerate = document.getElementById('pin-generate');
pinGenerate.addEventListener('click', function () {
    document.getElementById('right').style.display="none";
    document.getElementById('wrong').style.display="none";
    var pin = Math.round(Math.random() * 10000)+'';
    console.log(pin);
    if (pin.length != 4) {
        for (let i = 0; i < 100; i++) {
            if (pin.length == 4) {
                printDisplay('pin-display', pin);
                console.log(check);
                break;
            }
        }
    }
    else{
        printDisplay('pin-display', pin);
    }

})

var button  = document.getElementsByClassName('button');
for (let i = 0; i < button.length; i++) {
    const element = button[i];
    element.addEventListener('click', function(event){
        var output = getDisplay('type-pin');
        if (this.innerText == 'C') {
            output = '';
            printDisplay('type-pin',output);
        }
        else{
            if (this.innerText == '<'){
                console.log(typeof output);
                output = output.substr(0,output.length-1);
            }
            else{
                var output = output+this.innerText;
            }
        }
        
        printDisplay('type-pin',output);
    })
}

var count = 0;
document.getElementById('submit').addEventListener('click',function(){
    var generatePin = getDisplay('pin-display');
    var typePin = getDisplay('type-pin');
    if (generatePin == typePin) {
        document.getElementById('right').style.display="block";
    }
    else{
        document.getElementById('wrong').style.display="block";
    }
    printDisplay('type-pin','');
    printDisplay('pin-display','');
    document.getElementById('count').innerHTML = ++count;
    // if (count > 3) {
    //     count = 0;
    // }
    console.log(count);
})