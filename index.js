var display = document.getElementById("display");
var buttons = document.getElementsByClassName("buttons");


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        value = this.getAttribute('data-value');
        switch (value) {
            case '%':
                operator = '%';
                display.innerText += value;
                operand2=display.innerText;
                break;
            case 'C':
                display.innerText = "";
                break;
            case 'CE':
                display.innerText=operand2;
                break;
            case 'X':
                display.innerText =display.innerText.slice(0,-1);
                break;
            case '/':
                operator = '/';
                display.innerText += value;
                operand2=display.innerText;
                break;
            case '*':
                operator = '*';
                display.innerText += value;
                operand2=display.innerText;
                break;
            case '-':
                operator='-';
                display.innerText+=value;
                operand2=display.innerText;
                break;
            case '+':
                operator='+';
                display.innerText+=value;
                operand2=display.innerText;
                break;
            case '=':
                operator='=';
                var result=eval(display.innerText);
                display.innerText=result;
                break;
            case '.':
                operator='.';
                display.innerText+=value;
                operand2=display.innerText;
                break;
            case '1/x':
                operator='1/x';
                display.innerText=eval(1/display.innerText);
                operand2=display.innerText;
                break;
            case 'x^2':
                operator='x^2';
                display.innerText=eval(display.innerText*display.innerText);
                operand2=display.innerText;
                break;
            case 'sqrt':
                operator='x^2';
                display.innerText=Math.sqrt(display.innerText);
                operand2=display.innerText;
                break;
            case '+/-':
                var sign=Math.sign(display.innerText);
                if(sign==-1){
                    display.innerText=-display.innerText;
                }
                else if(sign==1){
                    display.innerText=-display.innerText;
                }
                else{
                    display.innerText=display.innerText;
                }
                operand2=display.innerText;
                break;
            default:
                display.innerText+=value;
                operand1=value;
                
                break; 
        }
    })
}