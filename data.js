vopros_1 = "Корень из 9";
vopros_2 = "Скорость света(в км/с)";
vopros_3 = "Автор произведения Чудесный дектор";
vopros_4 = "Сколько световых минут от Земли до Солнца";
vopros_5 = "Спутник Земли";

pr_otv_1 = "3";
pr_otv_2 = "300000";
pr_otv_3 = "Куприн";
pr_otv_4 = "7";
pr_otv_5 = "Луна";


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('v_1').innerHTML = vopros_1;
    document.getElementById('v_2').innerHTML = vopros_2;
    document.getElementById('v_3').innerHTML = vopros_3;
    document.getElementById('v_4').innerHTML = vopros_4;
    document.getElementById('v_5').innerHTML = vopros_5;
});

function check(){

    otv_1 = document.getElementById("z_1").value;
    otv_2 = document.getElementById("z_2").value;
    otv_3 = document.getElementById("z_3").value;
    otv_4 = document.getElementById("z_4").value;
    otv_5 = document.getElementById("z_5").value;

    if(otv_1 == pr_otv_1){answer_1 = "Верно"}else{answer_1 = "Неверно"};
    if(otv_2 == pr_otv_2){answer_2 = "Верно"}else{answer_2 = "Неверно"};
    if(otv_3 == pr_otv_3){answer_3 = "Верно"}else{answer_3 = "Неверно"};
    if(otv_4 == pr_otv_4){answer_4 = "Верно"}else{answer_4 = "Неверно"};
    if(otv_5 == pr_otv_5){answer_5 = "Верно"}else{answer_5 = "Неверно"};

    document.getElementById("ans_1").innerHTML = answer_1;
    document.getElementById("ans_2").innerHTML = answer_2;
    document.getElementById("ans_3").innerHTML = answer_3;
    document.getElementById("ans_4").innerHTML = answer_4;
    document.getElementById("ans_5").innerHTML = answer_5;
}