const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;

    const tempSelected= document.getElementById('temp_diff');
    const valueTemp=  temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
       let fahrenheit = (( cel * 9/5) + 32);
       return fahrenheit;
    }

    const fahToCel = (fahr) => {
    let celsius = ((fahr - 32) * 5/9);
    return celsius;
    }

    let result ;

    if(valueTemp == 'cel'){
      result  = celToFah(numberTemp);
      document.getElementById('resultContainer').innerText = `= ${result} Fahrenheit`;
    } else{
      result = fehToCal(numberTemp);
      document.getElementsById('resultContainer').innerText = `= ${result} Celsius`;
    }
}
