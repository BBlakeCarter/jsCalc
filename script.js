

function insert (num) {
   var exp = document.form.textview.value;

   if (exp == '0' && num == 'd') {
        document.form.textview.value = 
        "" + 'Math.floor(';
   }
   else if (num == 'd') {
        document.form.textview.value = 
        document.form.textview.value + 'Math.floor(';
   }

    else if (exp == 0 && (num == '+' || num == '*' || num == '/' || num == '%' )) {
        document.form.textview.value = 
        document.form.textview.value + num;
        
    }
    else if (exp == 0) {
        document.form.textview.value = "" + num;
       
    }
    else {
        document.form.textview.value =
        document.form.textview.value + num;

    }

    if((exp.charAt(exp.length - 1) == '+'  && (num == '+' || num == '-' || num == '*' || num == '/' || num == '%' || num == 'd')) ||
       (exp.charAt(exp.length - 1) == '-'  && (num == '+' || num == '-' || num == '*' || num == '/' || num == '%' || num == 'd')) ||
       (exp.charAt(exp.length - 1) == '*'  && (num == '+' || num == '*' || num == '/' || num == '%' || num == 'd')) ||
       (exp.charAt(exp.length - 1) == '/'  && (num == '+' || num == '*' || num == '/' || num == '%' || num == 'd')) ||
       (exp.charAt(exp.length - 1) == '%'  && (num == '+' || num == '*' || num == '/' || num == '%' || num == 'd')) ||
       (exp.charAt(exp.length - 1) == 'd'  && (num == '+' || num == '*' || num == '/' || num == '%' || num == 'd')))

    {
        document.form.textview.value = exp.substring(0,exp.length -1)
        document.form.textview.value =
        document.form.textview.value + num;
        
    } 
     
    
}
    
function clean () {
    document.form.textview.value = "0";
    // body... 
}
function back () {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length -1)
}
function equal()  {
    var exp = document.form.textview.value;

   
    if(exp) {
        document.form.textview.value = eval(exp);

    }
    

}

function rounding () {
    


    
}

