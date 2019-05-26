function getSum(znach, elemIDI, elemIDO){
    var a = parseFloat(document.getElementById(elemIDI).value);
    if (isNaN(a)===true) a=0;
    var c=0;
    c= znach*a;

    document.getElementById(elemIDO).value =c;
}

function sumend1(){
    var grunt = parseFloat(document.getElementById('gruntSum').value);
    var ytepPSB = parseFloat(document.getElementById('ytepPSBSum').value);
    var ytepMV = parseFloat(document.getElementById('ytepMVSum').value);
    var kleyPSB = parseFloat(document.getElementById('kleyPSBSum').value);
    var kleyMV = parseFloat(document.getElementById('kleyMVSum').value);
    var dubel = parseFloat(document.getElementById('dubelSum').value);
    var sitka = parseFloat(document.getElementById('sitkaSum').value);
    var kutnyk = parseFloat(document.getElementById('kutnykSum').value);
    var kleyArmPSB = parseFloat(document.getElementById('kleyArmPSBSum').value);
    var kleyArmMV = parseFloat(document.getElementById('kleyArmMVSum').value);
    var gruntKvarc = parseFloat(document.getElementById('gruntKvarcSum').value);
    var decorPSB = parseFloat(document.getElementById('decorPSBSum').value);
    var decorMV = parseFloat(document.getElementById('decorMVSum').value);

    if ((isNaN(grunt)===true) && (grunt!==null)&& (grunt!=="")) grunt=0;
    if (isNaN(ytepPSB)===true) ytepPSB=0;
    if (isNaN(ytepMV)===true) ytepMV=0;
    if (isNaN(kleyPSB)===true) kleyPSB=0;
    if (isNaN(kleyMV)===true) kleyMV=0;
    if (isNaN(dubel)===true) dubel=0;
    if (isNaN(sitka)===true) sitka=0;
    if (isNaN(kutnyk)===true) kutnyk=0;
    if (isNaN(kleyArmPSB)===true) kleyArmPSB=0;
    if (isNaN(kleyArmMV)===true) kleyArmMV=0;
    if (isNaN(gruntKvarc)===true) gruntKvarc=0;
    if (isNaN(decorPSB)===true) decorPSB=0;
    if (isNaN(decorMV)===true) decorMV=0;

    var sum="";
    sum=grunt+ytepPSB+ytepMV+kleyPSB+kleyMV+dubel+sitka+kutnyk+kleyArmPSB+kleyArmMV+gruntKvarc+decorPSB+decorMV;
    document.getElementById('totalSum1').value =sum;
}

function sumend2(){
    var gruntT2 = parseFloat(document.getElementById('gruntT2Sum').value);
    var ytepPSBT2 = parseFloat(document.getElementById('ytepPSBT2Sum').value);
    var kleyPSBT2 = parseFloat(document.getElementById('kleyPSBT2Sum').value);
    var sitkaT2 = parseFloat(document.getElementById('sitkaT2Sum').value);
    var kutnykT2 = parseFloat(document.getElementById('kutnykT2Sum').value);
    var profileT2 = parseFloat(document.getElementById('profileT2Sum').value);
    var kleyArmPSBT2 = parseFloat(document.getElementById('kleyArmPSBT2Sum').value);
    var gruntKvarcT2 = parseFloat(document.getElementById('gruntKvarcSumT2').value);
    var decorPSBT2 = parseFloat(document.getElementById('decorPSBT2Sum').value);
    var decorMVT2 = parseFloat(document.getElementById('decorMVT2Sum').value);

    if ((isNaN(gruntT2)===true) && (gruntT2!==null)&& (gruntT2!=="")) gruntT2=0;
    if (isNaN(ytepPSBT2)===true) ytepPSBT2=0;
    if (isNaN(kleyPSBT2)===true) kleyPSBT2=0;
    if (isNaN(sitkaT2)===true) sitkaT2=0;
    if (isNaN(kutnykT2)===true) kutnykT2=0;
    if (isNaN(profileT2)===true) profileT2=0;
    if (isNaN(kleyArmPSBT2)===true) kleyArmPSBT2=0;
    if (isNaN(gruntKvarcT2)===true) gruntKvarcT2=0;
    if (isNaN(decorPSBT2)===true) decorPSBT2=0;
    if (isNaN(decorMVT2)===true) decorMVT2=0;

    var sum="";
    sum=gruntT2+ytepPSBT2+kleyPSBT2+sitkaT2+kutnykT2+profileT2+kleyArmPSBT2+gruntKvarcT2+decorPSBT2+decorMVT2;
    document.getElementById('totalSum2').value =sum;
}

function getZagSum1(){
    var plosha = parseFloat(document.getElementById('plosha').value);
    var totalSum1 = parseFloat(document.getElementById('totalSum1').value);

    if ((isNaN(plosha)===true) && (plosha!==null)&& (plosha!=="")) plosha=0;
    if ((isNaN(totalSum1)===true) && (totalSum1!==null)&& (totalSum1!=="")) totalSum1=0;

    var sum=0;
    sum=plosha*totalSum1/100;

    document.getElementById('zagsum1').value =sum;

}

function getZagSum2(){
    var metry = parseFloat(document.getElementById('metry').value);
    var totalSum2 = parseFloat(document.getElementById('totalSum2').value);

    if ((isNaN(metry)===true) && (metry!==null)&& (metry!=="")) metry=0;
    if ((isNaN(totalSum2)===true) && (totalSum2!==null)&& (totalSum2!=="")) totalSum2=0;

    var sum=0;
    sum=metry*totalSum2/50;

    document.getElementById('zagsum2').value =sum;

}

function checkEnd1() {
    var grunt = parseFloat(document.getElementById('gruntSum').value);
    var ytepPSB = parseFloat(document.getElementById('ytepPSBSum').value);
    var ytepMV = parseFloat(document.getElementById('ytepMVSum').value);
    var kleyPSB = parseFloat(document.getElementById('kleyPSBSum').value);
    var kleyMV = parseFloat(document.getElementById('kleyMVSum').value);
    var dubel = parseFloat(document.getElementById('dubelSum').value);
    var sitka = parseFloat(document.getElementById('sitkaSum').value);
    var kutnyk = parseFloat(document.getElementById('kutnykSum').value);
    var kleyArmPSB = parseFloat(document.getElementById('kleyArmPSBSum').value);
    var kleyArmMV = parseFloat(document.getElementById('kleyArmMVSum').value);
    var gruntKvarc = parseFloat(document.getElementById('gruntKvarcSum').value);
    var decorPSB = parseFloat(document.getElementById('decorPSBSum').value);
    var decorMV = parseFloat(document.getElementById('decorMVSum').value);

    if ((isNaN(grunt) === true) && (grunt !== null) && (grunt !== "")) document.getElementById('gruntSum').value =0;
    if (isNaN(ytepPSB) === true) document.getElementById('ytepPSBSum').value =0;
    if (isNaN(ytepMV) === true) document.getElementById('ytepMVSum').value =0;
    if (isNaN(kleyPSB) === true) document.getElementById('kleyPSBSum').value =0;
    if (isNaN(kleyMV) === true) document.getElementById('kleyMVSum').value =0;
    if (isNaN(dubel) === true) document.getElementById('dubelSum').value =0;
    if (isNaN(sitka) === true) document.getElementById('sitkaSum').value =0;
    if (isNaN(kutnyk) === true) document.getElementById('kutnykSum').value =0;
    if (isNaN(kleyArmPSB) === true) document.getElementById('kleyArmPSBSum').value =0;
    if (isNaN(kleyArmMV) === true) document.getElementById('kleyArmMVSum').value =0;
    if (isNaN(gruntKvarc) === true) document.getElementById('gruntKvarcSum').value =0;
    if (isNaN(decorPSB) === true) document.getElementById('decorPSBSum').value =0;
    if (isNaN(decorMV) === true) document.getElementById('decorMVSum').value =0;

}

function checkEnd2() {
    var gruntT2 = parseFloat(document.getElementById('gruntT2Sum').value);
    var ytepPSBT2 = parseFloat(document.getElementById('ytepPSBT2Sum').value);
    var kleyPSBT2 = parseFloat(document.getElementById('kleyPSBT2Sum').value);
    var sitkaT2 = parseFloat(document.getElementById('sitkaT2Sum').value);
    var kutnykT2 = parseFloat(document.getElementById('kutnykT2Sum').value);
    var profileT2 = parseFloat(document.getElementById('profileT2Sum').value);
    var kleyArmPSBT2 = parseFloat(document.getElementById('kleyArmPSBT2Sum').value);
    var gruntKvarcT2 = parseFloat(document.getElementById('gruntKvarcSumT2').value);
    var decorPSBT2 = parseFloat(document.getElementById('decorPSBT2Sum').value);
    var decorMVT2 = parseFloat(document.getElementById('decorMVT2Sum').value);

    if ((isNaN(gruntT2)===true) && (gruntT2!==null)&& (gruntT2!=="")) document.getElementById('gruntT2Sum').value =0;
    if (isNaN(ytepPSBT2)===true) document.getElementById('ytepPSBT2Sum').value =0;
    if (isNaN(kleyPSBT2)===true) document.getElementById('kleyPSBT2Sum').value =0;
    if (isNaN(sitkaT2)===true) document.getElementById('sitkaT2Sum').value =0;
    if (isNaN(kutnykT2)===true) document.getElementById('kutnykT2Sum').value =0;
    if (isNaN(profileT2)===true) document.getElementById('profileT2Sum').value =0;
    if (isNaN(kleyArmPSBT2)===true) document.getElementById('kleyArmPSBT2Sum').value =0;
    if (isNaN(gruntKvarcT2)===true) document.getElementById('gruntKvarcSumT2').value =0;
    if (isNaN(decorPSBT2)===true) document.getElementById('decorPSBT2Sum').value =0;
    if (isNaN(decorMVT2)===true) document.getElementById('decorMVT2Sum').value =0;

}


setInterval(sumend1, 1000);
setInterval(sumend2, 1000);
setInterval(getZagSum1, 1000);
setInterval(getZagSum2, 1000);
setInterval(checkEnd1, 1000);
setInterval(checkEnd2, 1002);