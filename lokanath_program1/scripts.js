results = document.getElementById('results');
function pushBtn(obj) {
    var pushed = obj.innerHTML;

    if (pushed == '=') {
        // Calculate
        results.innerHTML = eval(results.innerHTML);
        if (results.innerHTML == Infinity){
            alert ('cant divide by Zero')
            results.innerHTML = "0"
        }
    }
    else if (pushed == 'C') {
        // All Clear
        results.innerHTML = '0';

    }
    else {
         // insert into the input 
            results.innerHTML += pushed;
         }
}