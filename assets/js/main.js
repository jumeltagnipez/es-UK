let num1=0; let num2=0; let operator='';

document.getElementById('button7').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'7';
}
document.getElementById('button8').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'8';
}
document.getElementById('button9').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'9';
}
document.getElementById('button4').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'4';
}
document.getElementById('button5').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'5';
}
document.getElementById('button6').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'6';
}
document.getElementById('button1').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'1';
}
document.getElementById('button2').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'2';
}
document.getElementById('button3').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'3';
}
document.getElementById('button.').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'.';
}
document.getElementById('button0').onclick = () =>{
	document.getElementById('displayDown').innerHTML=document.getElementById('displayDown').innerHTML+'0';
}

document.getElementById('sum').onclick = () =>{
	num1=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayUp').innerHTML=document.getElementById('displayDown').innerHTML+'+';
	operator='+';
	document.getElementById('displayDown').innerHTML='';
}
document.getElementById('sub').onclick = () =>{
	num1=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayUp').innerHTML=document.getElementById('displayDown').innerHTML+'-';
	operator='-';
	document.getElementById('displayDown').innerHTML='';
}
document.getElementById('mul').onclick = () =>{
	num1=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayUp').innerHTML=document.getElementById('displayDown').innerHTML+'*';
	operator='*';
	document.getElementById('displayDown').innerHTML='';
}
document.getElementById('divide').onclick = () =>{
	num1=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayUp').innerHTML=document.getElementById('displayDown').innerHTML+'/';
	operator='/';
	document.getElementById('displayDown').innerHTML='';
}
document.getElementById('sin').onclick =()=>{
	num1=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayUp').innerHTML='sin'+document.getElementById('displayDown').innerHTML;
	document.getElementById('displayDown').innerHTML=Math.sin(num1);
}
document.getElementById('cos').onclick =()=>{
	num1=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayUp').innerHTML='cos'+document.getElementById('displayDown').innerHTML;
	document.getElementById('displayDown').innerHTML=Math.cos(num1);
}
document.getElementById('tan').onclick =()=>{
	num1=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayUp').innerHTML='tan'+document.getElementById('displayDown').innerHTML;
	document.getElementById('displayDown').innerHTML=Math.tan(num1);
}
document.getElementById('sqrt').onclick =()=>{
	num1=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayUp').innerHTML='√'+document.getElementById('displayDown').innerHTML;
	document.getElementById('displayDown').innerHTML=Math.sqrt(num1);
}

document.getElementById('calculate').onclick = () =>{
	document.getElementById('displayUp').innerHTML=document.getElementById('displayUp').innerHTML+document.getElementById('displayDown').innerHTML;
	num2=document.getElementById('displayDown').innerHTML;
	document.getElementById('displayDown').innerHTML=eval(num1+operator+num2);
}

