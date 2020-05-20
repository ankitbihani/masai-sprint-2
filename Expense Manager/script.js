
	document.getElementById("button").addEventListener("click",Analysis_Suggestions) ;

		function Analysis_Suggestions()
		{
var income1 = document.getElementById('income1').value 
var income2 = document.getElementById('income2').value 
var income3 = document.getElementById('income3').value 
var income4 = document.getElementById('income4').value 
var income5 = document.getElementById('income5').value 
var income6 = document.getElementById('income6').value 
var income7 = document.getElementById('income7').value 
var income8 = document.getElementById('income8').value 
var income9 = document.getElementById('income9').value 
var total_income = Number(income1)+Number(income2)+Number(income3)+Number(income4)+Number(income5)+Number(income6)+Number(income7)+Number(income8)+Number(income9)
var expense1 = document.getElementById('Expense1').value 
var expense2 = document.getElementById('Expense2').value 
var expense3 = document.getElementById('Expense3').value 
var expense4 = document.getElementById('Expense4').value 
var expense5 = document.getElementById('Expense5').value 
var expense6 = document.getElementById('Expense6').value 
var expense7 = document.getElementById('Expense7').value 
var expense8 = document.getElementById('Expense8').value 
var expense9 = document.getElementById('Expense9').value 
var total_expense = Number(expense1)+Number(expense2)+Number(expense3)+Number(expense4)+Number(expense5)+Number(expense6)+Number(expense7)+Number(expense8)+Number(expense9)
var Analysis_Number = total_income/total_expense*100
var Analysis = ""
var name = document.getElementById('Name').value
var balance = total_income - total_expense ;

if(Analysis_Number
	<=100 && Analysis_Number>75)
{
	var Analysis =  "Your total monthly income is" + " " + ":" + " " + "₹" + " " + total_income + " " + "/-" + " " + "," + " " + "Your total monthly expenses are" + " " + ":" + " " + "₹" + " " +  total_expense + " " + "/-"  + " " + "and" + " " + "Your total monthly savings is" + " " + ":" + " " + "₹" + " " +  balance + " " + "/-"  + " " + "." + " " + "So" + " " + name + " " + "," + " " + "You Spend Too Much , how long can you continue with that ?"
}

else if(Analysis_Number>50 && Analysis_Number
	<=75)
{
	var Analysis =  "Your total monthly income is" + " " + ":" + " " + "₹" + " " + total_income + " " + "/-" + " " + "," + " " + "Your total monthly expenses are" + " " + ":" + " " + "₹" + " " +  total_expense + " " + "/-"  + " " + "and" + " " + "Your total monthly savings is" + " " + ":" + " " + "₹" + " " +  balance + " " + "/-"  + " " + "." + " " + "So" + " " + name + " " + "," + " " + "Believe me, you are in serious trouble , did you realize it yourself ?"
}


else if(Analysis_Number
	<=50)
{
	var Analysis =  "Your total monthly income is" + " " + ":" + " " + "₹" + " " + total_income + " " + "/-" + " " + "," + " " + "Your total monthly expenses are" + " " + ":" + " " + "₹" + " " +  total_expense + " " + "/-"  + " " + "and" + " " + "Your total monthly savings is" + " " + ":" + " " + "₹" + " " +  balance + " " + "/-"  + " " + "." + " " + "So" + " " + name + " " + "," + " " + "Soon you and your Family are going to be in lot of troubles , immediately stop all un-necessary expenses. You can ask us for advice on our twitter handle"
}

else if(Analysis_Number>100 && Analysis_Number
	<=125)
{
	var Analysis =  "Your total monthly income is" + " " + ":" + " " + "₹" + " " + total_income + " " + "/-" + " " + "," + " " + "Your total monthly expenses are" + " " + ":" + " " + "₹" + " " +  total_expense + " " + "/-"  + " " + "and" + " " + "Your total monthly savings is" + " " + ":" + " " + "₹" + " " +  balance + " " + "/-"  + " " + "." + " " + "So" + " " + name + " " + "," + " " + "You are doing average and there is a scope for improvement"
}

else if(Analysis_Number>125 && Analysis_Number
	<=150)
{
	var Analysis =  "Your total monthly income is" + " " + ":" + " " + "₹" + " " + total_income + " " + "/-" + " " + "," + " " + "Your total monthly expenses are" + " " + ":" + " " + "₹" + " " +  total_expense + " " + "/-"  + " " + "and" + " " + "Your total monthly savings is" + " " + ":" + " " + "₹" + " " +  balance + " " + "/-"  + " " + "." + " " + "So" + " " + name + " " + "," + " " + "You are doing good but there is little more scope for improvement"
}

else if(Analysis_Number>150 && Analysis_Number
	<200)
{
	var Analysis =  "Your total monthly income is" + " " + ":" + " " + "₹" + " " + total_income + " " + "/-" + " " + "," + " " + "Your total monthly expenses are" + " " + ":" + " " + "₹" + " " +  total_expense + " " + "/-"  + " " + "and" + " " + "Your total monthly savings is" + " " + ":" + " " + "₹" + " " +  balance + " " + "/-"  + " " + "." + " " + "So" + " " + name + " " + "," + " " + "You are doing very good , now start investing , just savings is for losers"
}

else if(Analysis_Number>=200)
{
	var Analysis = "Your total monthly income is" + " " + ":" + " " + "₹" + " " + total_income + " " + "/-" + " " + "," + " " + "Your total monthly expenses are" + " " + ":" + " " + "₹" + " " +  total_expense + " " + "/-"  + " " + "and" + " " + "Your total monthly savings is" + " " + ":" + " " + "₹" + " " +  balance + " " + "/-"  + " " + "." + " " + "So" + " " + name + " " + "," + " " + "You are the best, everyone should learn from you , now start doing diversified investments for regular cash flow because there are bad times too"
}


var outputtext = document.createTextNode(Analysis)
var outputh1 = document.createElement('h1')
var output = document.getElementById('output')
outputh1.appendChild(outputtext)
output.appendChild(outputh1)



		}



