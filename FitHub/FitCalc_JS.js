var selectElement = document.querySelector('select[name="Topic"]');
var select_divs = document.querySelectorAll('.calculators > div');

for (var i = 0; i < select_divs.length; i++) {
    select_divs[i].style.display = 'none';
  }



selectElement.addEventListener('change', function() {

    var selectedValue = this.value;

    for (var i = 0; i < select_divs.length; i++) {
        select_divs[i].style.display = 'none';
    }

    var divToShow = document.getElementById(selectedValue);

    divToShow.style.display = 'block';
  
});

var weight; var height; var MET; var Activity_Level; var age; var result; var gender; var time; var BMR; var AL;


var calculate_button=document.querySelector('.buttonDIV [type="submit"');

x=document.getElementById("Result");

calculate_button.addEventListener('click', function(){

    if(selectElement.value=="BMI"){
        weight= document.querySelector('#BMI input[name="weight"]').value;
        height= document.querySelector('#BMI input[name="height"]').value;
        result=calculateBMI(weight, height);
    } else if(selectElement.value=="Cal_Need"){
        weight= document.querySelector('#Cal_Need input[name="weight"]').value;
        height= document.querySelector('#Cal_Need input[name="height"]').value;
        age= document.querySelector('#Cal_Need input[name="age"]').value;
        gender=document.querySelector('.gender_selector select[name="gender"]').value;
        Activity_Level=document.querySelector('.activity_selector select[name="activity"]').value;
        console.log(gender+" "+Activity_Level);
        result=calculateCal_Need(weight, height, age, Activity_Level, gender);
    } else if(selectElement.value=="Cal_Burn"){
        weight= document.querySelector('#Cal_Burn input[name="weight"]').value;
        time= document.querySelector('#Cal_Burn input[name="time"]').value;
        MET= document.querySelector('#Cal_Burn input[name="MET"]').value;
        result=calculateCal_Burn(weight, height, MET);
    }

    result=parseFloat(result.toFixed(2));

    if(selectElement.value=="BMI"){
        x.innerHTML=result+" BMI";
    } else if(selectElement.value=="Cal_Need"){
        x.innerHTML="About "+result+" calories needed a day to maintain weight";
    } else if(selectElement.value=="Cal_Burn"){
        x.innerHTML="About "+result+" calories burned";
    }
});

function calculateBMI(weight, height) {
    let result= 730*weight/(height*height);
    return result;
}

function calculateCal_Need(weight, height, age, Activity_Level, gender) {

    weight=.45359*weight;
    height=height*2.54;

    if(Activity_Level=="None"){
        AL=1.2;
    } else if(Activity_Level=="Light"){
        AL=1.375;
    } else if(Activity_Level=="Moderate"){
        AL=1.55;
    } else if(Activity_Level=="Very"){
        AL=1.725;
    } else if(Activity_Level=="Extra"){
        AL=1.9;
    }

    if(gender=="m"){
        BMR=66.5 + (13.75*weight) + (5.003*height) - (6.75*age);
    } else if(gender=="f"){
        BMR=655.1 + (9.563*weight) + (1.850*height) - (4.676*age);
    }

    let result=BMR*AL;
    return result;    
}

function calculateCal_Burn(weight, height, MET){
    weight=weight*.45359;
    let result=weight*time*MET/200;
    return result;
}