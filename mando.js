//Swtich between Mirror mirror and TAB mirror

document.getElementById('modeMirror').onclick = function () {


    //4th String -> 1st String
    var modeFourString = document.getElementById('mando-tabs').getElementsByClassName('abb string4');

    while (modeFourString.length > 0) {
        modeFourString.item(0).classList.add('string1');
        modeFourString[0].classList.remove('string4');
    }

    //3rd String -> 2nd String
    var modeThreeString = document.getElementById('mando-tabs').getElementsByClassName('abc string3');

    while (modeThreeString.length > 0) {
        modeThreeString.item(0).classList.add('string2');
        modeThreeString[0].classList.remove('string3');
    }


    //2nd String -> 3rd String
    var modeTwoString = document.getElementById('mando-tabs').getElementsByClassName('abd string2');

    while (modeTwoString.length > 0) {
        modeTwoString.item(0).classList.add('string3');
        modeTwoString[0].classList.remove('string2');
    }

    //1st String -> Drone String
    var modeOneString = document.getElementById('mando-tabs').getElementsByClassName('abe string1');

    while (modeOneString.length > 0) {
        modeOneString.item(0).classList.add('string4');
        modeOneString[0].classList.remove('string1');
    }
}

document.getElementById('modeTAB').onclick = function () {


    //4th String -> 1st String
    var modeFourString = document.getElementById('mando-tabs').getElementsByClassName('abe string4');

    while (modeFourString.length > 0) {
        modeFourString.item(0).classList.add('string1');
        modeFourString[0].classList.remove('string4');
    }

    //3rd String -> 2nd String
    var modeThreeString = document.getElementById('mando-tabs').getElementsByClassName('abd string3');

    while (modeThreeString.length > 0) {
        modeThreeString.item(0).classList.add('string2');
        modeThreeString[0].classList.remove('string3');
    }


    //2nd String -> 3rd String
    var modeTwoString = document.getElementById('mando-tabs').getElementsByClassName('abc string2');

    while (modeTwoString.length > 0) {
        modeTwoString.item(0).classList.add('string3');
        modeTwoString[0].classList.remove('string2');
    }

    //1st String -> Drone String
    var modeOneString = document.getElementById('mando-tabs').getElementsByClassName('abb string1');

    while (modeOneString.length > 0) {
        modeOneString.item(0).classList.add('string4');
        modeOneString[0].classList.remove('string1');
    }
}

var checkNote = document.getElementById('note');
var checkMirror = document.getElementById('modeMirror');
var checkChord = document.getElementById('Chord');
var checkScales = document.getElementById('Scales');
var chordVariation = document.getElementById('chord-list');
var scalesVariation = document.getElementById('scales-list');
var checkArpeggios = document.getElementById('Arpeggios');

checkChord.addEventListener("change", myFunction);
checkScales.addEventListener("change", myFunction);
checkArpeggios.addEventListener("change", myFunction);

var cNote = document.getElementById('cNote');
var dbNote = document.getElementById('dbNote');
var dNote = document.getElementById('dNote');
var ebNote = document.getElementById('ebNote');
var eNote = document.getElementById('eNote');
var fNote = document.getElementById('fNote');
var gbNote = document.getElementById('gbNote');
var gNote = document.getElementById('gNote');
var abNote = document.getElementById('abNote');
var aNote = document.getElementById('aNote');
var bbNote = document.getElementById('bbNote');
var bNote = document.getElementById('bNote');

cNote.addEventListener("change", myFunction);
dbNote.addEventListener("change", myFunction);
dNote.addEventListener("change", myFunction);
ebNote.addEventListener("change", myFunction);
eNote.addEventListener("change", myFunction);
fNote.addEventListener("change", myFunction);
gbNote.addEventListener("change", myFunction);
gNote.addEventListener("change", myFunction);
abNote.addEventListener("change", myFunction);
aNote.addEventListener("change", myFunction);
bbNote.addEventListener("change", myFunction);
bNote.addEventListener("change", myFunction);

var majorChord = document.getElementById('majorChord');
var minorChord = document.getElementById('minorChord');
var augChord = document.getElementById('augChord');
var dimChord = document.getElementById('dimChord');
var sixthChord = document.getElementById('sixthChord');
var seventhChord = document.getElementById('seventhChord');
var majorSevenChord = document.getElementById('majorSevenChord');
var minorSevenChord = document.getElementById('minorSevenChord');
var susTwoChord = document.getElementById('susTwoChord');
var susFourChord = document.getElementById('susFourChord');

majorChord.addEventListener("change", myFunction);
minorChord.addEventListener("change", myFunction);
augChord.addEventListener("change", myFunction);
dimChord.addEventListener("change", myFunction);
sixthChord.addEventListener("change", myFunction);
seventhChord.addEventListener("change", myFunction);
majorSevenChord.addEventListener("change", myFunction);
minorSevenChord.addEventListener("change", myFunction);
susTwoChord.addEventListener("change", myFunction);
susFourChord.addEventListener("change", myFunction);

var majorScale = document.getElementById('majorScale');
var minorScale = document.getElementById('minorScale');
var harMinorScale = document.getElementById('harMinorScale');
var melMinorScale = document.getElementById('melMinorScale');
var bluesScale = document.getElementById('bluesScale');
var pentaMajorScale = document.getElementById('pentaMajorScale');
var pentaMinorScale = document.getElementById('pentaMinorScale');

majorScale.addEventListener("change", myFunction);
minorScale.addEventListener("change", myFunction);
harMinorScale.addEventListener("change", myFunction);
melMinorScale.addEventListener("change", myFunction);
bluesScale.addEventListener("change", myFunction);
pentaMajorScale.addEventListener("change", myFunction);
pentaMinorScale.addEventListener("change", myFunction);


function myFunction() {

    //Show and Hide the right selection for chords.

    if (checkChord.checked || checkArpeggios.checked) {
        chordVariation.classList.remove('hide-circle');
        chordVariation.classList.add('list-display');
        scalesVariation.classList.remove('list-display');
        scalesVariation.classList.add('hide-circle');
    } else if (checkScales.checked) {
        chordVariation.classList.add('hide-circle');
        chordVariation.classList.remove('list-display');
        scalesVariation.classList.add('list-display');
        scalesVariation.classList.remove('hide-circle');
    }
    if (cNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneZero();
        twoTwo();
        threeThree();
        fourZero();
    } else if (dbNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneSix();
        twoThree();
        threeFour();
        fourOne();
    } else if (dNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneTwo();
        twoZero();
        threeZero();
        fourTwo();
    } else if (ebNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneThree();
        twoOne();
        threeOne();
        fourThree();
    } else if (eNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneFour();
        twoTwo();
        threeTwo();
        fourFour();
    } else if (fNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneFive();
        twoThree();
        threeThree();
        fourFive();
    } else if (gbNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneSix();
        twoFour();
        threeFour();
        fourSix();
    } else if (gNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneZero();
        twoZero();
        threeTwo();
        fourThree();
    } else if (abNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneOne();
        twoOne();
        threeThree();
        fourFour();
    } else if (aNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneTwo();
        twoTwo();
        threeFour();
        fourFive();
    } else if (bbNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneThree();
        twoThree();
        threeFive();
        fourSix();
    } else if (bNote.checked && checkChord.checked && majorChord.checked) {
        clearCircles();
        oneFour();
        twoFour();
        threeSix();
        fourSeven();
    } else if (cNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        oneFive();
        twoZero();
        twoTwo();
        twoThree();
        twoFive();
        threeZero();
        threeTwo();
        threeThree();
        threeFive();
        fourZero();
        fourOne();
        fourThree();
        fourFive();
        fourSeven();
        fourEight();
    } else if (cNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        oneFive();
        twoZero();
        twoOne();
        twoThree();
        twoFive();
        twoSix();
        threeOne();
        threeThree();
        threeFive();
        threeSix();
        fourOne();
        fourThree();
        fourFour();
        fourSix();
        fourEight();
    } else if (cNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        oneFive();
        twoZero();
        twoOne();
        twoThree();
        twoFive();
        twoSix();
        threeTwo();
        threeThree();
        threeFive();
        threeSix();
        fourOne();
        fourThree();
        fourFour();
        fourSeven();
        fourEight();
    } else if (cNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        oneFive();
        twoZero();
        twoOne();
        twoThree();
        twoFive();
        threeZero();
        threeTwo();
        threeThree();
        threeFive();
        threeSix();
        fourOne();
        fourThree();
        fourFive();
        fourSeven();
        fourEight();
    } else if (cNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        oneFive();
        twoOne();
        twoThree();
        twoFour();
        twoFive();
        threeOne();
        threeThree();
        threeSix();
        fourOne();
        fourTwo();
        fourThree();
        fourSix();
        fourEight();
    } else if (cNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        oneFive();
        twoZero();
        twoTwo();
        twoFive();
        threeZero();
        threeThree();
        threeFive();
        fourZero();
        fourThree();
        fourFive();
        fourEight();
    } else if (cNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        oneFive();
        twoOne();
        twoThree();
        twoFive();
        threeOne();
        threeThree();
        threeSix();
        fourOne();
        fourThree();
        fourSix();
        fourEight();
    } else if (dbNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        oneSix();
        twoOne();
        twoThree();
        twoFour();
        twoSix();
        threeOne();
        threeThree();
        threeFour();
        threeSix();
        fourOne();
        fourTwo();
        fourFour();
        fourSix();
        fourEight();
        fourNine();
    } else if (dbNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        oneSix();
        twoOne();
        twoTwo();
        twoFour();
        twoSix();
        threeZero();
        threeTwo();
        threeFour();
        threeSix();
        fourZero();
        fourTwo();
        fourFour();
        fourFive();
        fourSeven();
        fourNine();
    } else if (dbNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        oneSix();
        twoOne();
        twoTwo();
        twoFour();
        twoSix();
        threeZero();
        threeThree();
        threeFour();
        threeSix();
        fourZero();
        fourTwo();
        fourFour();
        fourFive();
        fourEight();
        fourNine();
    } else if (dbNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        oneSix();
        twoOne();
        twoTwo();
        twoFour();
        twoSix();
        threeOne();
        threeThree();
        threeFour();
        threeSix();
        fourZero();
        fourTwo();
        fourFour();
        fourSix();
        fourEight();
        fourNine();
    } else if (dbNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        oneSix();
        twoTwo();
        twoFour();
        twoFive();
        twoSix();
        threeTwo();
        threeFour();
        fourZero();
        fourTwo();
        fourThree();
        fourFour();
        fourSeven();
        fourNine();
    } else if (dbNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        oneSix();
        twoOne();
        twoThree();
        twoSix();
        threeOne();
        threeFour();
        threeSix();
        fourFour();
        fourSix();
        fourNine();
    } else if (dbNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        oneSix();
        twoTwo();
        twoFour();
        twoSix();
        threeTwo();
        threeFour();
        fourZero();
        fourTwo();
        fourFour();
        fourSeven();
        fourNine();
    } else if (dNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        twoZero();
        twoTwo();
        twoFour();
        twoFive();
        threeZero();
        threeTwo();
        threeFour();
        threeFive();
        fourZero();
        fourTwo();
        fourThree();
        fourFive();
        fourSeven();
        fourNine();
        fourTen();
    } else if (dNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        twoZero();
        twoTwo();
        twoThree();
        twoFive();
        threeZero();
        threeOne();
        threeThree();
        threeFive();
        fourZero();
        fourOne();
        fourThree();
        fourFive();
        fourSix();
        fourEight();
        fourTen();
    } else if (dNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        twoZero();
        twoTwo();
        twoThree();
        twoFive();
        threeZero();
        threeOne();
        threeFour();
        threeFive();
        fourZero();
        fourOne();
        fourThree();
        fourFive();
        fourSix();
        fourNine();
        fourTen();
    } else if (dNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        twoZero();
        twoTwo();
        twoThree();
        twoFive();
        threeZero();
        threeTwo();
        threeFour();
        threeFive();
        fourZero();
        fourOne();
        fourThree();
        fourFive();
        fourSeven();
        fourNine();
        fourTen();
    } else if (dNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        twoZero();
        twoThree();
        twoFive();
        twoSix();
        threeZero();
        threeThree();
        threeFive();
        fourOne();
        fourThree();
        fourFour();
        fourFive();
        fourEight();
        fourTen();
    } else if (dNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        twoZero();
        twoTwo();
        twoFour();
        threeZero();
        threeTwo();
        threeFive();
        fourZero();
        fourFour();
        fourFive();
        fourSeven();
        fourTen();
    } else if (dNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        twoZero();
        twoThree();
        twoFive();
        threeZero();
        threeThree();
        threeFive();
        fourOne();
        fourThree();
        fourFive();
        fourEight();
        fourTen();
    } else if (ebNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        twoOne();
        twoThree();
        twoFive();
        twoSix();
        threeOne();
        threeThree();
        threeFive();
        threeSix();
        fourOne();
        fourThree();
        fourFour();
        fourSix();
        fourEight();
        fourTen();
        fourEleven();
    } else if (ebNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        twoOne();
        twoThree();
        twoFour();
        twoSix();
        threeOne();
        threeTwo();
        threeFour();
        threeSix();
        fourOne();
        fourTwo();
        fourFour();
        fourSix();
        fourSeven();
        fourNine();
        fourEleven();
    } else if (ebNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        twoOne();
        twoThree();
        twoFour();
        twoSix();
        threeOne();
        threeTwo();
        threeFive();
        threeSix();
        fourOne();
        fourTwo();
        fourFour();
        fourSix();
        fourSeven();
        fourTen();
        fourEleven();
    } else if (ebNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        twoOne();
        twoThree();
        twoFour();
        twoSix();
        threeOne();
        threeThree();
        threeFive();
        threeSix();
        fourOne();
        fourTwo();
        fourFour();
        fourSix();
        fourEight();
        fourTen();
        fourEleven();
    } else if (ebNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        twoOne();
        twoFour();
        twoSix();
        threeZero();
        threeOne();
        threeFour();
        threeSix();
        fourTwo();
        fourFour();
        fourFive();
        fourSix();
        fourNine();
        fourEleven();
    } else if (ebNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        twoOne();
        twoThree();
        twoFive();
        threeOne();
        threeThree();
        threeSix();
        fourOne();
        fourThree();
        fourSix();
        fourEight();
        fourEleven();
    } else if (ebNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        twoOne();
        twoFour();
        twoSix();
        threeOne();
        threeFour();
        threeSix();
        fourTwo();
        fourFour();
        fourSix();
        fourNine();
        fourEleven();
    } else if (eNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        twoTwo();
        twoFour();
        twoSix();
        threeZero();
        threeTwo();
        threeFour();
        threeSix();
        fourZero();
        fourTwo();
        fourFour();
        fourFive();
        fourSeven();
        fourNine();
        fourEleven();
        fourTwelve();
    } else if (eNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        twoTwo();
        twoFour();
        twoFive();
        threeZero();
        threeTwo();
        threeThree();
        threeFive();
        fourZero();
        fourTwo();
        fourThree();
        fourFive();
        fourSeven();
        fourEight();
        fourTen();
        fourTwelve();
    } else if (eNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        twoTwo();
        twoFour();
        twoFive();
        threeZero();
        threeTwo();
        threeThree();
        threeSix();
        fourZero();
        fourTwo();
        fourThree();
        fourFive();
        fourSeven();
        fourEight();
        fourEleven();
        fourTwelve();
    } else if (eNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        twoTwo();
        twoFour();
        twoFive();
        threeZero();
        threeTwo();
        threeFour();
        threeSix();
        fourZero();
        fourTwo();
        fourThree();
        fourFive();
        fourSeven();
        fourNine();
        fourEleven();
        fourTwelve();
    } else if (eNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles()
        twoTwo();
        twoFive();
        threeZero();
        threeOne();
        threeTwo();
        threeFive();
        fourZero();
        fourThree();
        fourFive();
        fourSix();
        fourSeven();
        fourTen();
        fourTwelve();
    } else if (eNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        twoTwo();
        twoFour();
        twoSix();
        threeTwo();
        threeFour();
        fourZero();
        fourTwo();
        fourFour();
        fourSeven();
        fourNine();
        fourTwelve();
    } else if (eNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        twoTwo();
        twoFive();
        threeZero();
        threeTwo();
        threeFive();
        fourZero();
        fourThree();
        fourFive();
        fourSeven();
        fourTen();
        fourTwelve();
    } else if (fNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        twoThree();
        twoFive();
        threeZero();
        threeOne();
        threeThree();
        threeFive();
        fourZero();
        fourOne();
        fourThree();
        fourFive();
        fourSix();
        fourEight();
        fourTen();
        fourTwelve();
        fourThirteen();
    } else if (fNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        twoThree();
        twoFive();
        twoSix();
        threeOne();
        threeThree();
        threeFour();
        threeSix();
        fourOne();
        fourThree();
        fourFour();
        fourSix();
        fourEight();
        fourNine();
        fourEleven();
        fourThirteen();
    } else if (fNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        twoThree();
        twoFive();
        twoSix();
        threeOne();
        threeThree();
        threeFour();
        fourZero();
        fourOne();
        fourThree();
        fourFour();
        fourSix();
        fourEight();
        fourNine();
        fourTwelve();
        fourThirteen();
    } else if (fNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        twoThree();
        twoFive();
        twoSix();
        threeOne();
        threeThree();
        threeFive();
        fourZero();
        fourOne();
        fourThree();
        fourFour();
        fourSix();
        fourEight();
        fourTen();
        fourTwelve();
        fourThirteen();
    } else if (fNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles()
        twoThree();
        twoSix();
        threeOne();
        threeTwo();
        threeThree();
        threeSix();
        fourOne();
        fourFour();
        fourSix();
        fourSeven();
        fourEight();
        fourEleven();
        fourThirteen();
    } else if (fNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        twoThree();
        twoFive();
        threeZero();
        threeThree();
        threeFive();
        fourOne();
        fourThree();
        fourFive();
        fourEight();
        fourTen();
        fourThirteen();
    } else if (fNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        twoThree();
        twoSix();
        threeOne();
        threeThree();
        threeSix();
        fourOne();
        fourFour();
        fourSix();
        fourEight();
        fourEleven();
        fourThirteen();
    } else if (gbNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        twoFour();
        twoSix();
        threeOne();
        threeTwo();
        threeFour();
        threeSix();
        fourOne();
        fourTwo();
        fourFour();
        fourSix();
        fourSeven();
        fourNine();
        fourEleven();
        fourThirteen();
        fourFourteen();
    } else if (gbNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        twoFour();
        twoSix();
        threeZero();
        threeTwo();
        threeFour();
        threeFive();
        fourZero();
        fourTwo();
        fourFour();
        fourFive();
        fourSeven();
        fourNine();
        fourTen();
        fourTwelve();
        fourFourteen();
    } else if (gbNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        twoFour();
        twoSix();
        threeZero();
        threeTwo();
        threeFour();
        threeFive();
        fourOne();
        fourTwo();
        fourFour();
        fourFive();
        fourSeven();
        fourNine();
        fourTen();
        fourThirteen();
        fourFourteen();
    } else if (gbNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        twoFour();
        twoSix();
        threeZero();
        threeTwo();
        threeFour();
        threeSix();
        fourOne();
        fourTwo();
        fourFour();
        fourFive();
        fourSeven();
        fourNine();
        fourEleven();
        fourThirteen();
        fourFourteen();
    } else if (gbNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles()
        twoFour();
        threeZero();
        threeTwo();
        threeThree();
        threeFour();
        fourZero();
        fourTwo();
        fourFive();
        fourSeven();
        fourEight();
        fourNine();
        fourTwelve();
        fourFourteen();
    } else if (gbNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        twoFour();
        twoSix();
        threeOne();
        threeFour();
        threeSix();
        fourTwo();
        fourFour();
        fourSix();
        fourNine();
        fourEleven();
        fourFourteen();
    } else if (gbNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        twoFour();
        threeZero();
        threeTwo();
        threeFour();
        fourZero();
        fourTwo();
        fourFive();
        fourSeven();
        fourNine();
        fourTwelve();
        fourFourteen();
    } else if (gNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        oneZero();
        oneTwo();
        oneFour();
        oneFive();
        twoZero();
        twoTwo();
        twoFour();
        twoFive();
        threeZero();
        threeTwo();
        threeThree();
        threeFive();
        fourZero();
        fourTwo();
        fourThree();
    } else if (gNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        oneZero();
        oneTwo();
        oneThree();
        oneFive();
        twoZero();
        twoOne();
        twoThree();
        twoFive();
        threeZero();
        threeOne();
        threeThree();
        threeFive();
        threeSix();
        fourOne();
        fourThree();
    } else if (gNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        oneZero();
        oneTwo();
        oneThree();
        oneFive();
        twoZero();
        twoOne();
        twoFour();
        twoFive();
        threeZero();
        threeOne();
        threeThree();
        threeFive();
        threeSix();
        fourTwo();
        fourThree();
    } else if (gNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        oneZero();
        oneTwo();
        oneThree();
        oneFive();
        twoZero();
        twoTwo();
        twoFour();
        twoFive();
        threeZero();
        threeOne();
        threeThree();
        threeFive();
        fourZero();
        fourTwo();
        fourThree();
    } else if (gNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        oneZero();
        oneTwo();
        oneFour();
        twoZero();
        twoTwo();
        twoFive();
        threeZero();
        threeTwo();
        threeFive();
        fourZero();
        fourThree();
    } else if (gNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        oneZero();
        oneThree();
        oneFive();
        twoZero();
        twoThree();
        twoFive();
        threeOne();
        threeThree();
        threeFive();
        fourOne();
        fourThree();
    } else if (gNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        oneZero();
        oneThree();
        oneFive();
        oneSix();
        twoZero();
        twoThree();
        twoFive();
        threeOne();
        threeThree();
        threeFour();
        threeFive();
        fourOne();
        fourThree();
    } else if (abNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        oneOne();
        oneThree();
        oneFive();
        oneSix();
        twoOne();
        twoThree();
        twoFive();
        twoSix();
        threeOne();
        threeThree();
        threeFour();
        threeSix();
        fourOne();
        fourThree();
        fourFour();
    } else if (abNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        oneOne();
        oneThree();
        oneFour();
        oneSix();
        twoOne();
        twoTwo();
        twoFour();
        twoSix();
        threeOne();
        threeTwo();
        threeFour();
        threeSix();
        threeSeven();
        fourTwo();
        fourFour();
    } else if (abNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        oneOne();
        oneThree();
        oneFour();
        oneSix();
        twoOne();
        twoTwo();
        twoFive();
        twoSix();
        threeOne();
        threeTwo();
        threeFour();
        threeSix();
        threeSeven();
        fourThree();
        fourFour();
    } else if (abNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        oneOne();
        oneThree();
        oneFour();
        oneSix();
        twoOne();
        twoThree();
        twoFive();
        twoSix();
        threeOne();
        threeTwo();
        threeFour();
        threeSix();
        fourOne();
        fourThree();
        fourFour();
    } else if (abNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        oneOne();
        oneThree();
        oneFive();
        twoOne();
        twoThree();
        twoSix();
        threeOne();
        threeThree();
        threeSix();
        fourOne();
        fourFour();
    } else if (abNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        oneOne();
        oneFour();
        oneSix();
        twoOne();
        twoFour();
        twoSix();
        threeTwo();
        threeFour();
        threeSix();
        fourTwo();
        fourFour();
    } else if (abNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        oneOne();
        oneFour();
        oneSix();
        oneSeven();
        twoOne();
        twoFour();
        twoSix();
        threeTwo();
        threeFour();
        threeFive();
        threeSix();
        fourTwo();
        fourFour();
    } else if (aNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        oneTwo();
        oneFour();
        oneSix();
        oneSeven();
        twoTwo();
        twoFour();
        twoSix();
        twoSeven();
        threeTwo();
        threeFour();
        threeFive();
        threeSeven();
        fourTwo();
        fourFour();
        fourFive();
    } else if (aNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        oneTwo();
        oneFour();
        oneFive();
        oneSeven();
        twoTwo();
        twoThree();
        twoFive();
        twoSeven();
        threeTwo();
        threeThree();
        threeFive();
        threeSeven();
        threeEight();
        fourThree();
        fourFive();
    } else if (aNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        oneTwo();
        oneFour();
        oneFive();
        oneSeven();
        twoTwo();
        twoThree();
        twoSix();
        twoSeven();
        threeTwo();
        threeThree();
        threeFive();
        threeSeven();
        threeEight();
        fourFour();
        fourFive();
    } else if (aNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        oneTwo();
        oneFour();
        oneFive();
        oneSeven();
        twoTwo();
        twoFour();
        twoSix();
        twoSeven();
        threeTwo();
        threeThree();
        threeFive();
        threeSeven();
        fourTwo();
        fourFour();
        fourFive();
    } else if (aNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        oneTwo();
        oneFour();
        oneSix();
        twoTwo();
        twoFour();
        twoSeven();
        threeTwo();
        threeFour();
        threeSeven();
        fourTwo();
        fourFive();
    } else if (aNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        oneTwo();
        oneFive();
        oneSeven();
        twoTwo();
        twoFive();
        twoSeven();
        threeThree();
        threeFive();
        threeSeven();
        fourThree();
        fourFive();
    } else if (aNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        oneTwo();
        oneFive();
        oneSeven();
        oneEight();
        twoTwo();
        twoFive();
        twoSeven();
        threeThree();
        threeFive();
        threeSix();
        threeSeven();
        fourThree();
        fourFive();
    } else if (bbNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        oneThree();
        oneFive();
        oneSeven();
        twoOne();
        twoThree();
        twoFive();
        twoSeven();
        threeOne();
        threeThree();
        threeFive();
        threeSix();
        fourOne();
        fourThree();
        fourFive();
        fourSix();
    } else if (bbNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        oneThree();
        oneFive();
        oneSix();
        oneEight();
        twoThree();
        twoFour();
        twoSix();
        twoEight();
        threeThree();
        threeFour();
        threeSix();
        threeEight();
        threeNine();
        fourFour();
        fourSix();
    } else if (bbNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        oneThree();
        oneFive();
        oneSix();
        oneEight();
        twoThree();
        twoFour();
        twoSeven();
        twoEight();
        threeThree();
        threeFour();
        threeSix();
        threeEight();
        threeNine();
        fourFive();
        fourSix();
    } else if (bbNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        oneThree();
        oneFive();
        oneSix();
        oneEight();
        twoThree();
        twoFive();
        twoSeven();
        twoEight();
        threeThree();
        threeFour();
        threeSix();
        threeEight();
        fourThree();
        fourFive();
        fourSix();
    } else if (bbNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        oneThree();
        oneFive();
        oneSeven();
        twoThree();
        twoFive();
        twoEight();
        threeThree();
        threeFive();
        threeEight();
        fourThree();
        fourSix();
    } else if (bbNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        oneThree();
        oneSix();
        oneEight();
        twoThree();
        twoSix();
        twoEight();
        threeFour();
        threeSix();
        threeEight();
        fourFour();
        fourSix();
    } else if (bbNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        oneThree();
        oneSix();
        oneEight();
        oneNine();
        twoThree();
        twoSix();
        twoEight();
        threeFour();
        threeSix();
        threeSeven();
        threeEight();
        fourFour();
        fourSix();
    } else if (bNote.checked && checkScales.checked && majorScale.checked) {
        clearCircles();
        oneFour();
        oneSix();
        twoOne();
        twoTwo();
        twoFour();
        twoSix();
        threeOne();
        threeTwo();
        threeFour();
        threeSix();
        threeSeven();
        fourTwo();
        fourFour();
        fourSix();
        fourSeven();
    } else if (bNote.checked && checkScales.checked && minorScale.checked) {
        clearCircles();
        oneFour();
        oneSix();
        oneSeven();
        oneNine();
        twoFour();
        twoFive();
        twoSeven();
        twoNine();
        threeFour();
        threeFive();
        threeSeven();
        threeNine();
        threeTen();
        fourFive();
        fourSeven();
    } else if (bNote.checked && checkScales.checked && harMinorScale.checked) {
        clearCircles();
        oneFour();
        oneSix();
        oneSeven();
        oneNine();
        twoFour();
        twoFive();
        twoEight();
        twoNine();
        threeFour();
        threeFive();
        threeSeven();
        threeNine();
        threeTen();
        fourSix();
        fourSeven();
    } else if (bNote.checked && checkScales.checked && melMinorScale.checked) {
        clearCircles();
        oneFour();
        oneSix();
        oneSeven();
        oneNine();
        twoFour();
        twoSix();
        twoEight();
        twoNine();
        threeFour();
        threeFive();
        threeSeven();
        threeNine();
        fourFour();
        fourSix();
        fourSeven();
    } else if (bNote.checked && checkScales.checked && pentaMajorScale.checked) {
        clearCircles();
        oneFour();
        oneSix();
        oneEight();
        twoFour();
        twoSix();
        twoNine();
        threeFour();
        threeSix();
        threeNine();
        fourFour();
        fourSeven();
    } else if (bNote.checked && checkScales.checked && pentaMinorScale.checked) {
        clearCircles();
        oneFour();
        oneSeven();
        oneNine();
        twoFour();
        twoSeven();
        twoNine();
        threeFive();
        threeSeven();
        threeNine();
        fourFive();
        fourSeven();
    } else if (bNote.checked && checkScales.checked && bluesScale.checked) {
        clearCircles();
        oneFour();
        oneSeven();
        oneNine();
        oneTen();
        twoFour();
        twoSeven();
        twoNine();
        threeFive();
        threeSeven();
        threeEight();
        threeNine();
        fourFive();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        oneFive();
        twoTwo();
        twoFive();
        threeThree();
        fourZero();
        fourThree();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        oneSix();
        twoThree();
        twoSix();
        threeFour();
        fourOne();
        fourFour();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        twoZero();
        twoFour();
        threeZero();
        threeFive();
        fourTwo();
        fourFive();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        twoOne();
        twoFive();
        threeOne();
        threeSix();
        fourThree();
        fourSix();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        twoTwo();
        twoSix();
        threeTwo();
        threeSeven();
        fourFour();
        fourSeven();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        twoThree();
        twoSeven();
        threeThree();
        threeEight();
        fourFive();
        fourEight();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        twoFour();
        twoEight();
        threeFour();
        threeNine();
        fourSix();
        fourNine();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        oneZero();
        oneFour();
        twoZero();
        twoFive();
        threeTwo();
        threeFive();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        oneOne();
        oneFive();
        twoOne();
        twoSix();
        threeThree();
        threeSix();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        oneTwo();
        oneSix();
        twoTwo();
        twoSeven();
        threeFour();
        threeSeven();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        oneThree();
        oneSeven();
        twoThree();
        threeOne();
        threeFive();
        fourOne();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && majorChord.checked) {
        clearCircles();
        oneFour();
        twoOne();
        twoFour();
        threeTwo();
        threeSix();
        fourTwo();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        oneFive();
        twoOne();
        twoFive();
        threeThree();
        threeSix();
        fourThree();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        oneSix();
        twoTwo();
        twoSix();
        threeFour();
        fourZero();
        fourFour();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        twoZero();
        twoThree();
        threeZero();
        threeFive();
        fourOne();
        fourFive();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        twoOne();
        twoFour();
        threeOne();
        threeSix();
        fourTwo();
        fourSix();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        twoTwo();
        twoFive();
        threeTwo();
        threeSeven();
        fourThree();
        fourSeven();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        twoThree();
        twoSix();
        threeThree();
        threeEight();
        fourFour();
        fourEight();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        twoFour();
        twoSeven();
        threeFour();
        threeNine();
        fourFive();
        fourNine();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        oneZero();
        oneThree();
        twoZero();
        twoFive();
        threeOne();
        threeFive();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        oneOne();
        oneFour();
        twoOne();
        twoSix();
        threeTwo();
        threeSix();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        oneTwo();
        oneFive();
        twoTwo();
        twoSeven();
        threeThree();
        threeSeven();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        oneThree();
        oneSix();
        twoThree();
        threeOne();
        threeFour();
        fourOne();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && minorChord.checked) {
        clearCircles();
        oneFour();
        twoZero();
        twoFour();
        threeTwo();
        threeFive();
        fourTwo();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        oneFive();
        twoTwo();
        twoSix();
        threeThree();
        fourZero();
        fourFour();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        oneSix();
        twoThree();
        twoSeven();
        threeFour();
        fourOne();
        fourFive();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        twoZero();
        twoFour();
        threeOne();
        threeFive();
        fourTwo();
        fourSix();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        twoOne();
        twoFive();
        threeTwo();
        threeSix();
        fourThree();
        fourSeven();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        twoTwo();
        twoSix();
        threeThree();
        threeSeven();
        fourFour();
        fourEight();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        twoThree();
        twoSeven();
        threeFour();
        threeEight();
        fourFive();
        fourNine();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        twoFour();
        twoEight();
        threeFive();
        threeNine();
        fourSix();
        fourTen();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        oneZero();
        oneFour();
        twoOne();
        twoFive();
        threeTwo();
        threeSix();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        oneOne();
        oneFive();
        twoTwo();
        twoSix();
        threeThree();
        threeSeven();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        oneTwo();
        oneSix();
        twoThree();
        twoSeven();
        threeFour();
        fourOne();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        oneThree();
        oneSeven();
        twoFour();
        threeOne();
        threeFive();
        fourTwo();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && augChord.checked) {
        clearCircles();
        oneFour();
        twoOne();
        twoFive();
        threeTwo();
        threeSix();
        fourThree();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        oneFive();
        twoOne();
        twoFour();
        threeThree();
        threeSix();
        fourTwo();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        oneSix();
        twoTwo();
        twoFive();
        threeFour();
        fourZero();
        fourThree();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        twoZero();
        twoThree();
        twoSix();
        threeFive();
        fourOne();
        fourFour();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        twoOne();
        twoFour();
        threeZero();
        threeSix();
        fourTwo();
        fourFive();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        twoTwo();
        twoFive();
        threeOne();
        threeSeven();
        fourThree();
        fourSix();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        twoThree();
        twoSix();
        threeTwo();
        threeEight();
        fourFour();
        fourSeven();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        twoFour();
        twoSeven();
        threeThree();
        threeNine();
        fourFive();
        fourEight();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        oneZero();
        oneThree();
        oneSix();
        twoFive();
        threeOne();
        threeFour();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        oneOne();
        oneFour();
        twoZero();
        twoSix();
        threeTwo();
        threeFive();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        oneTwo();
        oneFive();
        twoOne();
        twoSeven();
        threeThree();
        threeSix();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        oneThree();
        oneSix();
        twoTwo();
        threeOne();
        threeFour();
        fourZero();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && dimChord.checked) {
        clearCircles();
        oneFour();
        twoZero();
        twoThree();
        threeTwo();
        threeFive();
        fourOne();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        oneFive();
        twoTwo();
        twoFive();
        threeZero();
        threeThree();
        fourZero();
        fourThree();
        fourFive();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        oneSix();
        twoThree();
        twoSix();
        threeOne();
        threeFour();
        fourOne();
        fourFour();
        fourSix();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        twoZero();
        twoFour();
        threeZero();
        threeTwo();
        threeFive();
        fourTwo();
        fourFive();
        fourSeven();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        twoOne();
        twoFive();
        threeOne();
        threeThree();
        threeSix();
        fourThree();
        fourSix();
        fourEight();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        twoTwo();
        twoSix();
        threeTwo();
        threeFour();
        threeSeven();
        fourFour();
        fourSeven();
        fourNine();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        twoThree();
        twoSeven();
        threeThree();
        threeFive();
        threeEight();
        fourFive();
        fourEight();
        fourTen();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        twoFour();
        twoEight();
        threeFour();
        threeSix();
        threeNine();
        fourSix();
        fourNine();
        fourEleven();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        oneZero();
        oneFour();
        twoZero();
        twoTwo();
        twoFive();
        threeTwo();
        threeFive();
        threeSeven();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        oneOne();
        oneFive();
        twoOne();
        twoThree();
        twoSix();
        threeThree();
        threeSix();
        fourOne();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        oneTwo();
        oneSix();
        twoTwo();
        twoFour();
        twoSeven();
        threeFour();
        threeSeven();
        fourTwo();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        oneThree();
        oneSeven();
        twoThree();
        twoFive();
        threeOne();
        threeFive();
        fourOne();
        fourThree();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && sixthChord.checked) {
        clearCircles();
        oneFour();
        twoOne();
        twoFour();
        twoSix();
        threeTwo();
        threeSix();
        fourTwo();
        fourFour();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        oneFive();
        twoTwo();
        twoFive();
        threeTwo();
        threeThree();
        fourZero();
        fourThree();
        fourSeven();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        oneSix();
        twoThree();
        twoSix();
        threeThree();
        threeFour();
        fourOne();
        fourFour();
        fourEight();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        twoZero();
        twoFour();
        threeZero();
        threeFour();
        threeFive();
        fourTwo();
        fourFive();
        fourNine();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        twoOne();
        twoFive();
        threeOne();
        threeFive();
        threeSix();
        fourThree();
        fourSix();
        fourTen();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        twoTwo();
        twoSix();
        threeTwo();
        threeSix();
        threeSeven();
        fourFour();
        fourSeven();
        fourEleven();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        twoThree();
        twoSeven();
        threeThree();
        threeSeven();
        threeEight();
        fourFive();
        fourEight();
        fourTwelve();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        twoFour();
        twoEight();
        threeFour();
        threeEight();
        threeNine();
        fourSix();
        fourNine();
        fourThirteen();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        oneZero();
        oneFour();
        twoZero();
        twoFour();
        twoFive();
        threeTwo();
        threeFive();
        fourTwo();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        oneOne();
        oneFive();
        twoOne();
        twoFive();
        twoSix();
        threeThree();
        threeSix();
        fourThree();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        oneTwo();
        oneSix();
        twoTwo();
        twoSix();
        twoSeven();
        threeFour();
        threeSeven();
        fourFour();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        oneThree();
        oneSeven();
        twoThree();
        twoSeven();
        threeOne();
        threeFive();
        fourOne();
        fourFive();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && majorSevenChord.checked) {
        clearCircles();
        oneFour();
        twoOne();
        twoFour();
        threeOne();
        threeTwo();
        threeSix();
        fourTwo();
        fourSix();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        oneFive();
        twoTwo();
        twoFive();
        threeOne();
        threeThree();
        fourZero();
        fourThree();
        fourSix();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        oneSix();
        twoThree();
        twoSix();
        threeTwo();
        threeFour();
        fourOne();
        fourFour();
        fourSeven();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        twoZero();
        twoFour();
        threeZero();
        threeThree();
        threeFive();
        fourTwo();
        fourFive();
        fourEight();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        twoOne();
        twoFive();
        threeOne();
        threeFour();
        threeSix();
        fourThree();
        fourSix();
        fourNine();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        twoTwo();
        twoSix();
        threeTwo();
        threeFive();
        threeSeven();
        fourFour();
        fourSeven();
        fourTen();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        twoThree();
        twoSeven();
        threeThree();
        threeSix();
        threeEight();
        fourFive();
        fourEight();
        fourEleven();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        twoFour();
        twoEight();
        threeFour();
        threeSeven();
        threeNine();
        fourSix();
        fourNine();
        fourTwelve();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        oneZero();
        oneFour();
        twoZero();
        twoThree();
        twoFive();
        threeTwo();
        threeFive();
        fourOne();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        oneOne();
        oneFive();
        twoOne();
        twoFour();
        twoSix();
        threeThree();
        threeSix();
        fourTwo();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        oneTwo();
        oneSix();
        twoTwo();
        twoFive();
        twoSeven();
        threeFour();
        threeSeven();
        fourThree();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        oneThree();
        oneSeven();
        twoThree();
        twoSix();
        threeOne();
        threeFive();
        fourOne();
        fourFour();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && seventhChord.checked) {
        clearCircles();
        oneFour();
        twoOne();
        twoFour();
        threeZero();
        threeTwo();
        threeSix();
        fourTwo();
        fourFive();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        oneFive();
        twoOne();
        twoFive();
        threeOne();
        threeThree();
        threeSix();
        fourThree();
        fourSix();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        oneSix();
        twoTwo();
        twoSix();
        threeTwo();
        threeFour();
        fourZero();
        fourFour();
        fourSeven();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        twoZero();
        twoThree();
        threeZero();
        threeThree();
        threeFive();
        fourOne();
        fourFive();
        fourEight();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        twoOne();
        twoFour();
        threeOne();
        threeFour();
        threeSix();
        fourTwo();
        fourSix();
        fourNine();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        twoTwo();
        twoFive();
        threeTwo();
        threeFive();
        threeSeven();
        fourThree();
        fourSeven();
        fourTen();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        twoThree();
        twoSix();
        threeThree();
        threeSix();
        threeEight();
        fourFour();
        fourEight();
        fourEleven();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        twoFour();
        twoSeven();
        threeFour();
        threeSeven();
        threeNine();
        fourFive();
        fourNine();
        fourTwelve();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        oneZero();
        oneThree();
        twoZero();
        twoThree();
        twoFive();
        threeOne();
        threeFive();
        fourOne();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        oneOne();
        oneFour();
        twoOne();
        twoFour();
        twoSix();
        threeTwo();
        threeSix();
        fourTwo();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        oneTwo();
        oneFive();
        twoTwo();
        twoFive();
        twoSeven();
        threeThree();
        threeSeven();
        fourThree();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        oneThree();
        oneSix();
        twoThree();
        twoSix();
        threeOne();
        threeFour();
        fourOne();
        fourFour();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && minorSevenChord.checked) {
        clearCircles();
        oneFour();
        twoZero();
        twoFour();
        threeZero();
        threeTwo();
        threeFive();
        fourTwo();
        fourFive();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        oneFive();
        twoZero();
        twoFive();
        threeThree();
        threeFive();
        fourThree();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        oneSix();
        twoOne();
        twoSix();
        threeFour();
        threeSix();
        fourFour();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        twoZero();
        twoTwo();
        threeZero();
        threeFive();
        fourZero();
        fourFive();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        twoOne();
        twoThree();
        threeOne();
        threeSix();
        fourOne();
        fourSix();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        twoTwo();
        twoFour();
        threeTwo();
        threeSeven();
        fourTwo();
        fourSeven();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        twoThree();
        twoFive();
        threeThree();
        threeEight();
        fourThree();
        fourEight();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        twoFour();
        twoSix();
        threeFour();
        threeNine();
        fourFour();
        fourNine();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        oneZero();
        oneTwo();
        twoZero();
        twoFive();
        threeZero();
        threeFive();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        oneOne();
        oneThree();
        twoOne();
        twoSix();
        threeOne();
        threeSix();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        oneTwo();
        oneFour();
        twoTwo();
        twoSeven();
        threeTwo();
        threeSeven();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        oneThree();
        oneFive();
        twoThree();
        threeOne();
        threeThree();
        fourOne();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && susTwoChord.checked) {
        clearCircles();
        oneFour();
        oneSix();
        twoFour();
        threeTwo();
        threeFour();
        fourTwo();
        fourSeven();
    } else if (cNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        oneFive();
        twoThree();
        twoFive();
        threeThree();
        fourOne();
        fourThree();
        fourEight();
    } else if (dbNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        oneSix();
        twoFour();
        twoSix();
        threeFour();
        fourTwo();
        fourFour();
        fourNine();
    } else if (dNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        twoZero();
        twoFive();
        threeZero();
        threeFive();
        fourThree();
        fourFive();
        fourTen();
    } else if (ebNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        twoOne();
        twoSix();
        threeOne();
        threeSix();
        fourFour();
        fourSix();
        fourEleven();
    } else if (eNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        twoTwo();
        twoSeven();
        threeTwo();
        threeSeven();
        fourFive();
        fourSeven();
        fourTwelve();
    } else if (fNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        twoThree();
        threeOne();
        threeThree();
        threeEight();
        fourSix();
        fourEight();
        fourThirteen();
    } else if (gbNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        twoFour();
        twoNine();
        threeFour();
        threeNine();
        fourSeven();
        fourNine();
        fourFourteen();
    } else if (gNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        oneZero();
        oneFive();
        twoZero();
        twoFive();
        threeThree();
        threeFive();
        fourThree();
    } else if (abNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        oneOne();
        oneSix();
        twoOne();
        twoSix();
        threeFour();
        threeSix();
        fourFour();
    } else if (aNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        oneTwo();
        oneSeven();
        twoTwo();
        twoSeven();
        threeFive();
        threeSeven();
        fourFive();
    } else if (bbNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        oneThree();
        twoOne();
        twoThree();
        threeOne();
        threeSix();
        fourOne();
        fourSix();
    } else if (bNote.checked && checkArpeggios.checked && susFourChord.checked) {
        clearCircles();
        oneFour();
        twoTwo();
        twoFour();
        threeTwo();
        threeSeven();
        fourTwo();
        fourSeven();
    }
}

function clearCircles() {
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0) {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }
}

function fourZero() {
    var addFourZero = document.getElementById('4-0').getElementsByClassName('hide-circle');

    while (addFourZero.length > 0) {
        addFourZero[0].classList.add('note-circle');
        addFourZero[0].classList.remove('hide-circle');
    }
}

function fourOne() {
    var addFourOne = document.getElementById('4-1').getElementsByClassName('hide-circle');

    while (addFourOne.length > 0) {
        addFourOne[0].classList.add('note-circle');
        addFourOne[0].classList.remove('hide-circle');
    }
}

function fourTwo() {
    var addFourTwo = document.getElementById('4-2').getElementsByClassName('hide-circle');

    while (addFourTwo.length > 0) {
        addFourTwo[0].classList.add('note-circle');
        addFourTwo[0].classList.remove('hide-circle');
    }
}

function fourThree() {
    var addFourThree = document.getElementById('4-3').getElementsByClassName('hide-circle');

    while (addFourThree.length > 0) {
        addFourThree[0].classList.add('note-circle');
        addFourThree[0].classList.remove('hide-circle');
    }
}

function fourFour() {
    var addFourFour = document.getElementById('4-4').getElementsByClassName('hide-circle');

    while (addFourFour.length > 0) {
        addFourFour[0].classList.add('note-circle');
        addFourFour[0].classList.remove('hide-circle');
    }
}

function fourFive() {
    var addFourFive = document.getElementById('4-5').getElementsByClassName('hide-circle');

    while (addFourFive.length > 0) {
        addFourFive[0].classList.add('note-circle');
        addFourFive[0].classList.remove('hide-circle');
    }
}

function fourSix() {
    var addFourSix = document.getElementById('4-6').getElementsByClassName('hide-circle');

    while (addFourSix.length > 0) {
        addFourSix[0].classList.add('note-circle');
        addFourSix[0].classList.remove('hide-circle');
    }
}

function fourSeven() {
    var addFourSeven = document.getElementById('4-7').getElementsByClassName('hide-circle');

    while (addFourSeven.length > 0) {
        addFourSeven[0].classList.add('note-circle');
        addFourSeven[0].classList.remove('hide-circle');
    }
}

function fourEight() {
    var addFourEight = document.getElementById('4-8').getElementsByClassName('hide-circle');

    while (addFourEight.length > 0) {
        addFourEight[0].classList.add('note-circle');
        addFourEight[0].classList.remove('hide-circle');
    }
}

function fourNine() {
    var addFourNine = document.getElementById('4-9').getElementsByClassName('hide-circle');

    while (addFourNine.length > 0) {
        addFourNine[0].classList.add('note-circle');
        addFourNine[0].classList.remove('hide-circle');
    }
}

function fourTen() {
    var addFourTen = document.getElementById('4-10').getElementsByClassName('hide-circle');

    while (addFourTen.length > 0) {
        addFourTen[0].classList.add('note-circle');
        addFourTen[0].classList.remove('hide-circle');
    }
}

function fourEleven() {
    var addFourEleven = document.getElementById('4-11').getElementsByClassName('hide-circle');

    while (addFourEleven.length > 0) {
        addFourEleven[0].classList.add('note-circle');
        addFourEleven[0].classList.remove('hide-circle');
    }
}

function fourTwelve() {
    var addFourTwelve = document.getElementById('4-12').getElementsByClassName('hide-circle');

    while (addFourTwelve.length > 0) {
        addFourTwelve[0].classList.add('note-circle');
        addFourTwelve[0].classList.remove('hide-circle');
    }
}

function fourThirteen() {
    var addFourThirteen = document.getElementById('4-13').getElementsByClassName('hide-circle');

    while (addFourThirteen.length > 0) {
        addFourThirteen[0].classList.add('note-circle');
        addFourThirteen[0].classList.remove('hide-circle');
    }
}

function fourFourteen() {
    var addFourFourteen = document.getElementById('4-14').getElementsByClassName('hide-circle');

    while (addFourFourteen.length > 0) {
        addFourFourteen[0].classList.add('note-circle');
        addFourFourteen[0].classList.remove('hide-circle');
    }
}

function fourFifteen() {
    var addFourFifteen = document.getElementById('4-15').getElementsByClassName('hide-circle');

    while (addFourFifteen.length > 0) {
        addFourFifteen[0].classList.add('note-circle');
        addFourFifteen[0].classList.remove('hide-circle');
    }
}

function fourSixteen() {
    var addFourSixteen = document.getElementById('4-16').getElementsByClassName('hide-circle');

    while (addFourSixteen.length > 0) {
        addFourSixteen[0].classList.add('note-circle');
        addFourSixteen[0].classList.remove('hide-circle');
    }
}

function fourSeventeen() {
    var addFourSeventeen = document.getElementById('4-17').getElementsByClassName('hide-circle');

    while (addFourSeventeen.length > 0) {
        addFourSeventeen[0].classList.add('note-circle');
        addFourSeventeen[0].classList.remove('hide-circle');
    }
}

function fourEighteen() {
    var addFourEighteen = document.getElementById('4-18').getElementsByClassName('hide-circle');

    while (addFourEighteen.length > 0) {
        addFourEighteen[0].classList.add('note-circle');
        addFourEighteen[0].classList.remove('hide-circle');
    }
}

function fourNineteen() {
    var addFourNineteen = document.getElementById('4-19').getElementsByClassName('hide-circle');

    while (addFourNineteen.length > 0) {
        addFourNineteen[0].classList.add('note-circle');
        addFourNineteen[0].classList.remove('hide-circle');
    }
}

function fourTwenty() {
    var addFourTwenty = document.getElementById('4-20').getElementsByClassName('hide-circle');

    while (addFourTwenty.length > 0) {
        addFourTwenty[0].classList.add('note-circle');
        addFourTwenty[0].classList.remove('hide-circle');
    }
}

function fourTwentyOne() {
    var addFourTwentyOne = document.getElementById('4-21').getElementsByClassName('hide-circle');

    while (addFourTwentyOne.length > 0) {
        addFourTwentyOne[0].classList.add('note-circle');
        addFourTwentyOne[0].classList.remove('hide-circle');
    }
}

function fourTwentyTwo() {
    var addFourTwentyTwo = document.getElementById('4-22').getElementsByClassName('hide-circle');

    while (addFourTwentyTwo.length > 0) {
        addFourTwentyTwo[0].classList.add('note-circle');
        addFourTwentyTwo[0].classList.remove('hide-circle');
    }
}

function fourTwentyThree() {
    var addFourTwentyThree = document.getElementById('4-23').getElementsByClassName('hide-circle');

    while (addFourTwentyThree.length > 0) {
        addFourTwentyThree[0].classList.add('note-circle');
        addFourTwentyThree[0].classList.remove('hide-circle');
    }
}

function fourTwentyFour() {
    var addFourTwentyFour = document.getElementById('4-24').getElementsByClassName('hide-circle');

    while (addFourTwentyFour.length > 0) {
        addFourTwentyFour[0].classList.add('note-circle');
        addFourTwentyFour[0].classList.remove('hide-circle');
    }
}

function threeZero() {
    var addThreeZero = document.getElementById('3-0').getElementsByClassName('hide-circle');

    while (addThreeZero.length > 0) {
        addThreeZero[0].classList.add('note-circle');
        addThreeZero[0].classList.remove('hide-circle');
    }
}

function threeOne() {
    var addThreeOne = document.getElementById('3-1').getElementsByClassName('hide-circle');

    while (addThreeOne.length > 0) {
        addThreeOne[0].classList.add('note-circle');
        addThreeOne[0].classList.remove('hide-circle');
    }
}

function threeTwo() {
    var addThreeTwo = document.getElementById('3-2').getElementsByClassName('hide-circle');

    while (addThreeTwo.length > 0) {
        addThreeTwo[0].classList.add('note-circle');
        addThreeTwo[0].classList.remove('hide-circle');
    }
}

function threeThree() {
    var addThreeThree = document.getElementById('3-3').getElementsByClassName('hide-circle');

    while (addThreeThree.length > 0) {
        addThreeThree[0].classList.add('note-circle');
        addThreeThree[0].classList.remove('hide-circle');
    }
}

function threeFour() {
    var addThreeFour = document.getElementById('3-4').getElementsByClassName('hide-circle');

    while (addThreeFour.length > 0) {
        addThreeFour[0].classList.add('note-circle');
        addThreeFour[0].classList.remove('hide-circle');
    }
}

function threeFive() {
    var addThreeFive = document.getElementById('3-5').getElementsByClassName('hide-circle');

    while (addThreeFive.length > 0) {
        addThreeFive[0].classList.add('note-circle');
        addThreeFive[0].classList.remove('hide-circle');
    }
}

function threeSix() {
    var addThreeSix = document.getElementById('3-6').getElementsByClassName('hide-circle');

    while (addThreeSix.length > 0) {
        addThreeSix[0].classList.add('note-circle');
        addThreeSix[0].classList.remove('hide-circle');
    }
}

function threeSeven() {
    var addThreeSeven = document.getElementById('3-7').getElementsByClassName('hide-circle');

    while (addThreeSeven.length > 0) {
        addThreeSeven[0].classList.add('note-circle');
        addThreeSeven[0].classList.remove('hide-circle');
    }
}

function threeEight() {
    var addThreeEight = document.getElementById('3-8').getElementsByClassName('hide-circle');

    while (addThreeEight.length > 0) {
        addThreeEight[0].classList.add('note-circle');
        addThreeEight[0].classList.remove('hide-circle');
    }
}

function threeNine() {
    var addThreeNine = document.getElementById('3-9').getElementsByClassName('hide-circle');

    while (addThreeNine.length > 0) {
        addThreeNine[0].classList.add('note-circle');
        addThreeNine[0].classList.remove('hide-circle');
    }
}

function threeTen() {
    var addThreeTen = document.getElementById('3-10').getElementsByClassName('hide-circle');

    while (addThreeTen.length > 0) {
        addThreeTen[0].classList.add('note-circle');
        addThreeTen[0].classList.remove('hide-circle');
    }
}

function threeEleven() {
    var addThreeEleven = document.getElementById('3-11').getElementsByClassName('hide-circle');

    while (addThreeEleven.length > 0) {
        addThreeEleven[0].classList.add('note-circle');
        addThreeEleven[0].classList.remove('hide-circle');
    }
}

function threeTwelve() {
    var addThreeTwelve = document.getElementById('3-12').getElementsByClassName('hide-circle');

    while (addThreeTwelve.length > 0) {
        addThreeTwelve[0].classList.add('note-circle');
        addThreeTwelve[0].classList.remove('hide-circle');
    }
}

function threeThirteen() {
    var addThreeThirteen = document.getElementById('3-13').getElementsByClassName('hide-circle');

    while (addThreeThirteen.length > 0) {
        addThreeThirteen[0].classList.add('note-circle');
        addThreeThirteen[0].classList.remove('hide-circle');
    }
}

function threeFourteen() {
    var addThreeFourteen = document.getElementById('3-14').getElementsByClassName('hide-circle');

    while (addThreeFourteen.length > 0) {
        addThreeFourteen[0].classList.add('note-circle');
        addThreeFourteen[0].classList.remove('hide-circle');
    }
}

function threeFifteen() {
    var addThreeFifteen = document.getElementById('3-15').getElementsByClassName('hide-circle');

    while (addThreeFifteen.length > 0) {
        addThreeFifteen[0].classList.add('note-circle');
        addThreeFifteen[0].classList.remove('hide-circle');
    }
}

function threeSixteen() {
    var addThreeSixteen = document.getElementById('3-16').getElementsByClassName('hide-circle');

    while (addThreeSixteen.length > 0) {
        addThreeSixteen[0].classList.add('note-circle');
        addThreeSixteen[0].classList.remove('hide-circle');
    }
}

function threeSeventeen() {
    var addThreeSeventeen = document.getElementById('3-17').getElementsByClassName('hide-circle');

    while (addThreeSeventeen.length > 0) {
        addThreeSeventeen[0].classList.add('note-circle');
        addThreeSeventeen[0].classList.remove('hide-circle');
    }
}

function threeEighteen() {
    var addThreeEighteen = document.getElementById('3-18').getElementsByClassName('hide-circle');

    while (addThreeEighteen.length > 0) {
        addThreeEighteen[0].classList.add('note-circle');
        addThreeEighteen[0].classList.remove('hide-circle');
    }
}

function threeNineteen() {
    var addThreeNineteen = document.getElementById('3-19').getElementsByClassName('hide-circle');

    while (addThreeNineteen.length > 0) {
        addThreeNineteen[0].classList.add('note-circle');
        addThreeNineteen[0].classList.remove('hide-circle');
    }
}

function threeTwenty() {
    var addThreeTwenty = document.getElementById('3-20').getElementsByClassName('hide-circle');

    while (addThreeTwenty.length > 0) {
        addThreeTwenty[0].classList.add('note-circle');
        addThreeTwenty[0].classList.remove('hide-circle');
    }
}

function threeTwentyOne() {
    var addThreeTwentyOne = document.getElementById('3-21').getElementsByClassName('hide-circle');

    while (addThreeTwentyOne.length > 0) {
        addThreeTwentyOne[0].classList.add('note-circle');
        addThreeTwentyOne[0].classList.remove('hide-circle');
    }
}

function threeTwentyTwo() {
    var addThreeTwentyTwo = document.getElementById('3-22').getElementsByClassName('hide-circle');

    while (addThreeTwentyTwo.length > 0) {
        addThreeTwentyTwo[0].classList.add('note-circle');
        addThreeTwentyTwo[0].classList.remove('hide-circle');
    }
}

function threeTwentyThree() {
    var addThreeTwentyThree = document.getElementById('3-23').getElementsByClassName('hide-circle');

    while (addThreeTwentyThree.length > 0) {
        addThreeTwentyThree[0].classList.add('note-circle');
        addThreeTwentyThree[0].classList.remove('hide-circle');
    }
}

function threeTwentyFour() {
    var addThreeTwentyFour = document.getElementById('3-24').getElementsByClassName('hide-circle');

    while (addThreeTwentyFour.length > 0) {
        addThreeTwentyFour[0].classList.add('note-circle');
        addThreeTwentyFour[0].classList.remove('hide-circle');
    }
}

function twoZero() {
    var addTwoZero = document.getElementById('2-0').getElementsByClassName('hide-circle');

    while (addTwoZero.length > 0) {
        addTwoZero[0].classList.add('note-circle');
        addTwoZero[0].classList.remove('hide-circle');
    }
}

function twoOne() {
    var addTwoOne = document.getElementById('2-1').getElementsByClassName('hide-circle');

    while (addTwoOne.length > 0) {
        addTwoOne[0].classList.add('note-circle');
        addTwoOne[0].classList.remove('hide-circle');
    }
}

function twoTwo() {
    var addTwoTwo = document.getElementById('2-2').getElementsByClassName('hide-circle');

    while (addTwoTwo.length > 0) {
        addTwoTwo[0].classList.add('note-circle');
        addTwoTwo[0].classList.remove('hide-circle');
    }
}

function twoThree() {
    var addTwoThree = document.getElementById('2-3').getElementsByClassName('hide-circle');

    while (addTwoThree.length > 0) {
        addTwoThree[0].classList.add('note-circle');
        addTwoThree[0].classList.remove('hide-circle');
    }
}

function twoFour() {
    var addTwoFour = document.getElementById('2-4').getElementsByClassName('hide-circle');

    while (addTwoFour.length > 0) {
        addTwoFour[0].classList.add('note-circle');
        addTwoFour[0].classList.remove('hide-circle');
    }
}

function twoFive() {
    var addTwoFive = document.getElementById('2-5').getElementsByClassName('hide-circle');

    while (addTwoFive.length > 0) {
        addTwoFive[0].classList.add('note-circle');
        addTwoFive[0].classList.remove('hide-circle');
    }
}

function twoSix() {
    var addTwoSix = document.getElementById('2-6').getElementsByClassName('hide-circle');

    while (addTwoSix.length > 0) {
        addTwoSix[0].classList.add('note-circle');
        addTwoSix[0].classList.remove('hide-circle');
    }
}

function twoSeven() {
    var addTwoSeven = document.getElementById('2-7').getElementsByClassName('hide-circle');

    while (addTwoSeven.length > 0) {
        addTwoSeven[0].classList.add('note-circle');
        addTwoSeven[0].classList.remove('hide-circle');
    }
}

function twoEight() {
    var addTwoEight = document.getElementById('2-8').getElementsByClassName('hide-circle');

    while (addTwoEight.length > 0) {
        addTwoEight[0].classList.add('note-circle');
        addTwoEight[0].classList.remove('hide-circle');
    }
}

function twoNine() {
    var addTwoNine = document.getElementById('2-9').getElementsByClassName('hide-circle');

    while (addTwoNine.length > 0) {
        addTwoNine[0].classList.add('note-circle');
        addTwoNine[0].classList.remove('hide-circle');
    }
}

function twoTen() {
    var addTwoTen = document.getElementById('2-10').getElementsByClassName('hide-circle');

    while (addTwoTen.length > 0) {
        addTwoTen[0].classList.add('note-circle');
        addTwoTen[0].classList.remove('hide-circle');
    }
}

function twoEleven() {
    var addTwoEleven = document.getElementById('2-11').getElementsByClassName('hide-circle');

    while (addTwoEleven.length > 0) {
        addTwoEleven[0].classList.add('note-circle');
        addTwoEleven[0].classList.remove('hide-circle');
    }
}

function twoTwelve() {
    var addTwoTwelve = document.getElementById('2-12').getElementsByClassName('hide-circle');

    while (addTwoTwelve.length > 0) {
        addTwoTwelve[0].classList.add('note-circle');
        addTwoTwelve[0].classList.remove('hide-circle');
    }
}

function twoThirteen() {
    var addTwoThirteen = document.getElementById('2-13').getElementsByClassName('hide-circle');

    while (addTwoThirteen.length > 0) {
        addTwoThirteen[0].classList.add('note-circle');
        addTwoThirteen[0].classList.remove('hide-circle');
    }
}

function twoFourteen() {
    var addTwoFourteen = document.getElementById('2-14').getElementsByClassName('hide-circle');

    while (addTwoFourteen.length > 0) {
        addTwoFourteen[0].classList.add('note-circle');
        addTwoFourteen[0].classList.remove('hide-circle');
    }
}

function twoFifteen() {
    var addTwoFifteen = document.getElementById('2-15').getElementsByClassName('hide-circle');

    while (addTwoFifteen.length > 0) {
        addTwoFifteen[0].classList.add('note-circle');
        addTwoFifteen[0].classList.remove('hide-circle');
    }
}

function twoSixteen() {
    var addTwoSixteen = document.getElementById('2-16').getElementsByClassName('hide-circle');

    while (addTwoSixteen.length > 0) {
        addTwoSixteen[0].classList.add('note-circle');
        addTwoSixteen[0].classList.remove('hide-circle');
    }
}

function twoSeventeen() {
    var addTwoSeventeen = document.getElementById('2-17').getElementsByClassName('hide-circle');

    while (addTwoSeventeen.length > 0) {
        addTwoSeventeen[0].classList.add('note-circle');
        addTwoSeventeen[0].classList.remove('hide-circle');
    }
}

function twoEighteen() {
    var addTwoEighteen = document.getElementById('2-18').getElementsByClassName('hide-circle');

    while (addTwoEighteen.length > 0) {
        addTwoEighteen[0].classList.add('note-circle');
        addTwoEighteen[0].classList.remove('hide-circle');
    }
}

function twoNineteen() {
    var addTwoNineteen = document.getElementById('2-19').getElementsByClassName('hide-circle');

    while (addTwoNineteen.length > 0) {
        addTwoNineteen[0].classList.add('note-circle');
        addTwoNineteen[0].classList.remove('hide-circle');
    }
}

function twoTwenty() {
    var addTwoTwenty = document.getElementById('2-20').getElementsByClassName('hide-circle');

    while (addTwoTwenty.length > 0) {
        addTwoTwenty[0].classList.add('note-circle');
        addTwoTwenty[0].classList.remove('hide-circle');
    }
}

function twoTwentyOne() {
    var addTwoTwentyOne = document.getElementById('2-21').getElementsByClassName('hide-circle');

    while (addTwoTwentyOne.length > 0) {
        addTwoTwentyOne[0].classList.add('note-circle');
        addTwoTwentyOne[0].classList.remove('hide-circle');
    }
}

function twoTwentyTwo() {
    var addTwoTwentyTwo = document.getElementById('2-22').getElementsByClassName('hide-circle');

    while (addTwoTwentyTwo.length > 0) {
        addTwoTwentyTwo[0].classList.add('note-circle');
        addTwoTwentyTwo[0].classList.remove('hide-circle');
    }
}

function twoTwentyThree() {
    var addTwoTwentyThree = document.getElementById('2-23').getElementsByClassName('hide-circle');

    while (addTwoTwentyThree.length > 0) {
        addTwoTwentyThree[0].classList.add('note-circle');
        addTwoTwentyThree[0].classList.remove('hide-circle');
    }
}

function twoTwentyFour() {
    var addTwoTwentyFour = document.getElementById('2-24').getElementsByClassName('hide-circle');

    while (addTwoTwentyFour.length > 0) {
        addTwoTwentyFour[0].classList.add('note-circle');
        addTwoTwentyFour[0].classList.remove('hide-circle');
    }
}


function oneZero() {
    var addOneZero = document.getElementById('1-0').getElementsByClassName('hide-circle');

    while (addOneZero.length > 0) {
        addOneZero[0].classList.add('note-circle');
        addOneZero[0].classList.remove('hide-circle');
    }
}

function oneOne() {
    var addOneOne = document.getElementById('1-1').getElementsByClassName('hide-circle');

    while (addOneOne.length > 0) {
        addOneOne[0].classList.add('note-circle');
        addOneOne[0].classList.remove('hide-circle');
    }
}

function oneTwo() {
    var addOneTwo = document.getElementById('1-2').getElementsByClassName('hide-circle');

    while (addOneTwo.length > 0) {
        addOneTwo[0].classList.add('note-circle');
        addOneTwo[0].classList.remove('hide-circle');
    }
}

function oneThree() {
    var addOneThree = document.getElementById('1-3').getElementsByClassName('hide-circle');

    while (addOneThree.length > 0) {
        addOneThree[0].classList.add('note-circle');
        addOneThree[0].classList.remove('hide-circle');
    }
}

function oneFour() {
    var addOneFour = document.getElementById('1-4').getElementsByClassName('hide-circle');

    while (addOneFour.length > 0) {
        addOneFour[0].classList.add('note-circle');
        addOneFour[0].classList.remove('hide-circle');
    }
}

function oneFive() {
    var addOneFive = document.getElementById('1-5').getElementsByClassName('hide-circle');

    while (addOneFive.length > 0) {
        addOneFive[0].classList.add('note-circle');
        addOneFive[0].classList.remove('hide-circle');
    }
}

function oneSix() {
    var addOneSix = document.getElementById('1-6').getElementsByClassName('hide-circle');

    while (addOneSix.length > 0) {
        addOneSix[0].classList.add('note-circle');
        addOneSix[0].classList.remove('hide-circle');
    }
}

function oneSeven() {
    var addOneSeven = document.getElementById('1-7').getElementsByClassName('hide-circle');

    while (addOneSeven.length > 0) {
        addOneSeven[0].classList.add('note-circle');
        addOneSeven[0].classList.remove('hide-circle');
    }
}

function oneEight() {
    var addOneEight = document.getElementById('1-8').getElementsByClassName('hide-circle');

    while (addOneEight.length > 0) {
        addOneEight[0].classList.add('note-circle');
        addOneEight[0].classList.remove('hide-circle');
    }
}

function oneNine() {
    var addOneNine = document.getElementById('1-9').getElementsByClassName('hide-circle');

    while (addOneNine.length > 0) {
        addOneNine[0].classList.add('note-circle');
        addOneNine[0].classList.remove('hide-circle');
    }
}

function oneTen() {
    var addOneTen = document.getElementById('1-10').getElementsByClassName('hide-circle');

    while (addOneTen.length > 0) {
        addOneTen[0].classList.add('note-circle');
        addOneTen[0].classList.remove('hide-circle');
    }
}

function oneEleven() {
    var addOneEleven = document.getElementById('1-11').getElementsByClassName('hide-circle');

    while (addOneEleven.length > 0) {
        addOneEleven[0].classList.add('note-circle');
        addOneEleven[0].classList.remove('hide-circle');
    }
}

function oneTwelve() {
    var addOneTwelve = document.getElementById('1-12').getElementsByClassName('hide-circle');

    while (addOneTwelve.length > 0) {
        addOneTwelve[0].classList.add('note-circle');
        addOneTwelve[0].classList.remove('hide-circle');
    }
}

function oneThirteen() {
    var addOneThirteen = document.getElementById('1-13').getElementsByClassName('hide-circle');

    while (addOneThirteen.length > 0) {
        addOneThirteen[0].classList.add('note-circle');
        addOneThirteen[0].classList.remove('hide-circle');
    }
}

function oneFourteen() {
    var addOneFourteen = document.getElementById('1-14').getElementsByClassName('hide-circle');

    while (addOneFourteen.length > 0) {
        addOneFourteen[0].classList.add('note-circle');
        addOneFourteen[0].classList.remove('hide-circle');
    }
}

function oneFifteen() {
    var addOneFifteen = document.getElementById('1-15').getElementsByClassName('hide-circle');

    while (addOneFifteen.length > 0) {
        addOneFifteen[0].classList.add('note-circle');
        addOneFifteen[0].classList.remove('hide-circle');
    }
}

function oneSixteen() {
    var addOneSixteen = document.getElementById('1-16').getElementsByClassName('hide-circle');

    while (addOneSixteen.length > 0) {
        addOneSixteen[0].classList.add('note-circle');
        addOneSixteen[0].classList.remove('hide-circle');
    }
}

function oneSeventeen() {
    var addOneSeventeen = document.getElementById('1-17').getElementsByClassName('hide-circle');

    while (addOneSeventeen.length > 0) {
        addOneSeventeen[0].classList.add('note-circle');
        addOneSeventeen[0].classList.remove('hide-circle');
    }
}

function oneEighteen() {
    var addOneEighteen = document.getElementById('1-18').getElementsByClassName('hide-circle');

    while (addOneEighteen.length > 0) {
        addOneEighteen[0].classList.add('note-circle');
        addOneEighteen[0].classList.remove('hide-circle');
    }
}

function oneNineteen() {
    var addOneNineteen = document.getElementById('1-19').getElementsByClassName('hide-circle');

    while (addOneNineteen.length > 0) {
        addOneNineteen[0].classList.add('note-circle');
        addOneNineteen[0].classList.remove('hide-circle');
    }
}

function oneTwenty() {
    var addOneTwenty = document.getElementById('1-20').getElementsByClassName('hide-circle');

    while (addOneTwenty.length > 0) {
        addOneTwenty[0].classList.add('note-circle');
        addOneTwenty[0].classList.remove('hide-circle');
    }
}

function oneTwentyOne() {
    var addOneTwentyOne = document.getElementById('1-21').getElementsByClassName('hide-circle');

    while (addOneTwentyOne.length > 0) {
        addOneTwentyOne[0].classList.add('note-circle');
        addOneTwentyOne[0].classList.remove('hide-circle');
    }
}

function oneTwentyTwo() {
    var addOneTwentyTwo = document.getElementById('1-22').getElementsByClassName('hide-circle');

    while (addOneTwentyTwo.length > 0) {
        addOneTwentyTwo[0].classList.add('note-circle');
        addOneTwentyTwo[0].classList.remove('hide-circle');
    }
}

function oneTwentyThree() {
    var addOneTwentyThree = document.getElementById('1-23').getElementsByClassName('hide-circle');

    while (addOneTwentyThree.length > 0) {
        addOneTwentyThree[0].classList.add('note-circle');
        addOneTwentyThree[0].classList.remove('hide-circle');
    }
}

function oneTwentyFour() {
    var addOneTwentyFour = document.getElementById('1-24').getElementsByClassName('hide-circle');

    while (addOneTwentyFour.length > 0) {
        addOneTwentyFour[0].classList.add('note-circle');
        addOneTwentyFour[0].classList.remove('hide-circle');
    }
}