function setAttri(array,func)
{
    let a = document.createElement('div');
    a.setAttribute('class','col-3');
    let a0 = document.createElement('input');
    a0.classList.add('button');
    a0.setAttribute('type','button');
    a0.setAttribute('value',array[0]);
    a0.setAttribute('id',array[1]);
    a0.setAttribute('onclick',func)
    a.appendChild(a0);
    return a;
}
function clr()
{
    document.getElementById("result").value = ""
}
function solution(){
    let x = document.getElementById("result").value;
    let y =eval(x);
    document.getElementById('result').value = y;
}
function display(val)
{
    document.getElementById('result').value += val;
}

function checking(result)
{
    if(result){
        var regex =/[0-9]\b/;
        if(!result.match(regex) || (result!=="+") || (result!=="-") || (result!=="*") || (result!=="/"));
        {
            alert("Only numbers are allowed");
        }
    }
}

let b = document.createElement('div');
b.setAttribute('class','contain');
b.classList.add('container'); 

let b0 = document.createElement('div');
b0.classList.add('row');
b.appendChild(b0);

let b1 = document.createElement('div');
b1.setAttribute('class','col-9');
let b10 = document.createElement('input');
b10.setAttribute('type','text');
b10.setAttribute('id','result');
b10.onkeypress=function(){checking(result.value)}; 
b1.appendChild(b10);

var b2 = document.createElement('div');
b2.setAttribute('class','col-3');
var b20 = document.createElement('input');
b20.classList.add("button");
b20.setAttribute('type','button');
b20.setAttribute('id','clear');
b20.setAttribute('value','C');
b20.setAttribute('Onclick','clr()');
b2.appendChild(b20);

b0.appendChild(b1);
b0.appendChild(b2);

let r = document.createElement('div');
r.classList.add('row');
b.appendChild(r);
var r0 =setAttri(['1','one'],"display('1')");
var r1 =setAttri(['2','two'],"display('2')");
var r2 =setAttri(['3','three'],"display('3')");
var r3 =setAttri(['/','divide'],"display('/')");
r.appendChild(r0);
r.appendChild(r1);
r.appendChild(r2);
r.appendChild(r3);

let d = document.createElement('div');
d.classList.add('row');
b.appendChild(d);
var d0 =setAttri(['4','four'],"display('4')");
var d1 =setAttri(['5','five'],"display('5')");
var d2 =setAttri(['6','six'],"display('6')");
var d3 =setAttri(['-','minus'],"display('-')");
d.appendChild(d0);
d.appendChild(d1);
d.appendChild(d2);
d.appendChild(d3);

let e = document.createElement('div');
e.classList.add('row');
b.appendChild(e);
var e0 =setAttri(['7','seven'],"display('7')");
var e1 =setAttri(['8','eight'],"display('8')");
var e2 =setAttri(['9','nine'],"display('9')");
var e3 =setAttri(['+','plus'],"display('+')");
e.appendChild(e0);
e.appendChild(e1);
e.appendChild(e2);
e.appendChild(e3);

let f = document.createElement('div');
f.classList.add('row');
b.appendChild(f);
var f0 =setAttri(['.','dot'],"display('.')");
var f1 =setAttri(['0','zero'],"display('0')");
var f2 =setAttri(['=','equal'],"solution()");
var f3 =setAttri(['*','multiply'],"display('*')");
f.appendChild(f0);
f.appendChild(f1);
f.appendChild(f2);
f.appendChild(f3);

document.body.append(b);

