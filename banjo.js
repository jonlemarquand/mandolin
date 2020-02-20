//Swtich between Mirror mirror and TAB mirror

document.getElementById('modeTAB').onclick = function() {
    
    //Drone string -> 5th String
    var modeDrone = document.getElementById('mando-tabs').getElementsByClassName('aba drone');

    while (modeDrone.length > 0)   {
        modeDrone.item(0).classList.add('string1');
        modeDrone[0].classList.remove('drone');
    }
    
    //4th String -> 2nd String
    var modeFourString = document.getElementById('mando-tabs').getElementsByClassName('abb string4');

    while (modeFourString.length > 0)   {
        modeFourString.item(0).classList.add('string2');
        modeFourString[0].classList.remove('string4');
    }

    //2nd String -> 4th String
    var modeTwoString = document.getElementById('mando-tabs').getElementsByClassName('abd string2');

    while (modeTwoString.length > 0)   {
        modeTwoString.item(0).classList.add('string4');
        modeTwoString[0].classList.remove('string2');
    }
    
    //1st String -> Drone String
    var modeOneString = document.getElementById('mando-tabs').getElementsByClassName('abe string1');

    while (modeOneString.length > 0)   {
        modeOneString.item(0).classList.add('drone');
        modeOneString[0].classList.remove('string1');
    }
}

document.getElementById('modeMirror').onclick = function() {
    
    //Drone string reverse
    var mirrorDrone = document.getElementById('mando-tabs').getElementsByClassName('abe drone');

    while (mirrorDrone.length > 0)   {
        mirrorDrone.item(0).classList.add('string1');
        mirrorDrone[0].classList.remove('drone');
    }
    
    //4th String reverse
    var mirrorFourString = document.getElementById('mando-tabs').getElementsByClassName('abb string2');

    while (mirrorFourString.length > 0)   {
        mirrorFourString.item(0).classList.add('string4');
        mirrorFourString[0].classList.remove('string2');
    }

    //2nd String -> 4th String
    var mirrorTwoString = document.getElementById('mando-tabs').getElementsByClassName('abd string4');

    while (mirrorTwoString.length > 0)   {
        mirrorTwoString.item(0).classList.add('string2');
        mirrorTwoString[0].classList.remove('string4');
    }
    
    //1st String -> Drone String
    var mirrorOneString = document.getElementById('mando-tabs').getElementsByClassName('aba string1');

    while (mirrorOneString.length > 0)   {
        mirrorOneString.item(0).classList.add('drone');
        mirrorOneString[0].classList.remove('string1');
    }
}


//Chords + Scales (Major Default for Now)

var checkNote = document.getElementById('note');
var checkMirror = document.getElementById('modeMirror');
var checkChord = document.getElementById('Chord');
var checkScales = document.getElementById('Scales');
var chordVariation = document.getElementById('chord-variations');
var scalesVariation = document.getElementById('scales-variations');
var melodicScale = document.getElementById('melodic-scale');
var singleScale = document.getElementById('single-scale');
var singleMelodic = document.getElementById('single-melodic');

checkNote.addEventListener("change", myFunction);
checkChord.addEventListener("change", myFunction);
checkScales.addEventListener("change", myFunction);
chordVariation.addEventListener("change", myFunction);
scalesVariation.addEventListener("change", myFunction);
melodicScale.addEventListener("change", myFunction);
singleScale.addEventListener("change", myFunction);



function myFunction() {

    //Show and Hide the right selection for chords.

    if (checkChord.checked) {
        chordVariation.classList.remove('hide-circle');
        scalesVariation.classList.add('hide-circle');
        singleMelodic.classList.add('hide-circle');
        
    } else if (checkScales.checked) {
        scalesVariation.classList.remove('hide-circle');
        singleMelodic.classList.remove('hide-circle');
        chordVariation.classList.add('hide-circle');
    }

  if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'major') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFiveOne = document.getElementById('5-0').getElementsByClassName('hide-circle');

    while (addFiveOne.length > 0)   {
        addFiveOne[0].classList.add('note-circle');
        addFiveOne[0].classList.remove('hide-circle');
    }
    var addFourTwo = document.getElementById('4-2').getElementsByClassName('hide-circle');

    while (addFourTwo.length > 0)   {
        addFourTwo[0].classList.add('note-circle');
        addFourTwo[0].classList.remove('hide-circle');
    }
    var addThreeZero = document.getElementById('3-0').getElementsByClassName('hide-circle');

    while (addThreeZero.length > 0)   {
        addThreeZero[0].classList.add('note-circle');
        addThreeZero[0].classList.remove('hide-circle');
    }
    var addTwoOne = document.getElementById('2-1').getElementsByClassName('hide-circle');

    while (addTwoOne.length > 0)   {
        addTwoOne[0].classList.add('note-circle');
        addTwoOne[0].classList.remove('hide-circle');
    }
    var addOneTwo = document.getElementById('1-2').getElementsByClassName('hide-circle');

    while (addOneTwo.length > 0)   {
        addOneTwo[0].classList.add('note-circle');
        addOneTwo[0].classList.remove('hide-circle');
    }

} else if (checkNote.value ==='c' && checkChord.checked && chordVariation.value ==='minor') {
    
    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }
    
    //add note circles back in for C Chord
    var addFiveOne = document.getElementById('5-0').getElementsByClassName('hide-circle');

    while (addFiveOne.length > 0)   {
        addFiveOne[0].classList.add('note-circle');
        addFiveOne[0].classList.remove('hide-circle');
    }
    var addFourOne = document.getElementById('4-1').getElementsByClassName('hide-circle');

    while (addFourOne.length > 0)   {
        addFourOne[0].classList.add('note-circle');
        addFourOne[0].classList.remove('hide-circle');
    }
    var addThreeZero = document.getElementById('3-0').getElementsByClassName('hide-circle');

    while (addThreeZero.length > 0)   {
        addThreeZero[0].classList.add('note-circle');
        addThreeZero[0].classList.remove('hide-circle');
    }
    var addTwoOne = document.getElementById('2-1').getElementsByClassName('hide-circle');

    while (addTwoOne.length > 0)   {
        addTwoOne[0].classList.add('note-circle');
        addTwoOne[0].classList.remove('hide-circle');
    }
    var addOneOne = document.getElementById('1-1').getElementsByClassName('hide-circle');

    while (addOneOne.length > 0)   {
        addOneOne[0].classList.add('note-circle');
        addOneOne[0].classList.remove('hide-circle');
    }
} else if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'aug') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFourTwo = document.getElementById('4-2').getElementsByClassName('hide-circle');

    while (addFourTwo.length > 0)   {
        addFourTwo[0].classList.add('note-circle');
        addFourTwo[0].classList.remove('hide-circle');
    }
    var addThreeOne = document.getElementById('3-1').getElementsByClassName('hide-circle');

    while (addThreeOne.length > 0)   {
        addThreeOne[0].classList.add('note-circle');
        addThreeOne[0].classList.remove('hide-circle');
    }
    var addTwoOne = document.getElementById('2-1').getElementsByClassName('hide-circle');

    while (addTwoOne.length > 0)   {
        addTwoOne[0].classList.add('note-circle');
        addTwoOne[0].classList.remove('hide-circle');
    }
    var addOneTwo = document.getElementById('1-2').getElementsByClassName('hide-circle');

    while (addOneTwo.length > 0)   {
        addOneTwo[0].classList.add('note-circle');
        addOneTwo[0].classList.remove('hide-circle');
    }
    
} else if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'dim') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFourFour = document.getElementById('4-4').getElementsByClassName('hide-circle');

    while (addFourFour.length > 0)   {
        addFourFour[0].classList.add('note-circle');
        addFourFour[0].classList.remove('hide-circle');
    }
    var addThreeFive = document.getElementById('3-5').getElementsByClassName('hide-circle');

    while (addThreeFive.length > 0)   {
        addThreeFive[0].classList.add('note-circle');
        addThreeFive[0].classList.remove('hide-circle');
    }
    var addTwoFour = document.getElementById('2-4').getElementsByClassName('hide-circle');

    while (addTwoFour.length > 0)   {
        addTwoFour[0].classList.add('note-circle');
        addTwoFour[0].classList.remove('hide-circle');
    }
    var addOneFour = document.getElementById('1-4').getElementsByClassName('hide-circle');

    while (addOneFour.length > 0)   {
        addOneFour[0].classList.add('note-circle');
        addOneFour[0].classList.remove('hide-circle');
    }
} else if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'sixth') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFourTen = document.getElementById('4-10').getElementsByClassName('hide-circle');

    while (addFourTen.length > 0)   {
        addFourTen[0].classList.add('note-circle');
        addFourTen[0].classList.remove('hide-circle');
    }
    var addThreeNine = document.getElementById('3-9').getElementsByClassName('hide-circle');

    while (addThreeNine.length > 0)   {
        addThreeNine[0].classList.add('note-circle');
        addThreeNine[0].classList.remove('hide-circle');
    }
    var addTwoEight = document.getElementById('2-8').getElementsByClassName('hide-circle');

    while (addTwoEight.length > 0)   {
        addTwoEight[0].classList.add('note-circle');
        addTwoEight[0].classList.remove('hide-circle');
    }
    var addOneSeven = document.getElementById('1-7').getElementsByClassName('hide-circle');

    while (addOneSeven.length > 0)   {
        addOneSeven[0].classList.add('note-circle');
        addOneSeven[0].classList.remove('hide-circle');
    }
} else if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'seventh') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFourTen = document.getElementById('4-10').getElementsByClassName('hide-circle');

    while (addFourTen.length > 0)   {
        addFourTen[0].classList.add('note-circle');
        addFourTen[0].classList.remove('hide-circle');
    }
    var addThreeNine = document.getElementById('3-9').getElementsByClassName('hide-circle');

    while (addThreeNine.length > 0)   {
        addThreeNine[0].classList.add('note-circle');
        addThreeNine[0].classList.remove('hide-circle');
    }
    var addTwoEight = document.getElementById('2-8').getElementsByClassName('hide-circle');

    while (addTwoEight.length > 0)   {
        addTwoEight[0].classList.add('note-circle');
        addTwoEight[0].classList.remove('hide-circle');
    }
    var addOneEight = document.getElementById('1-8').getElementsByClassName('hide-circle');

    while (addOneEight.length > 0)   {
        addOneEight[0].classList.add('note-circle');
        addOneEight[0].classList.remove('hide-circle');
    }
} else if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'major-7') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFourTen = document.getElementById('4-10').getElementsByClassName('hide-circle');

    while (addFourTen.length > 0)   {
        addFourTen[0].classList.add('note-circle');
        addFourTen[0].classList.remove('hide-circle');
    }
    var addThreeNine = document.getElementById('3-9').getElementsByClassName('hide-circle');

    while (addThreeNine.length > 0)   {
        addThreeNine[0].classList.add('note-circle');
        addThreeNine[0].classList.remove('hide-circle');
    }
    var addTwoEight = document.getElementById('2-8').getElementsByClassName('hide-circle');

    while (addTwoEight.length > 0)   {
        addTwoEight[0].classList.add('note-circle');
        addTwoEight[0].classList.remove('hide-circle');
    }
    var addOneNine = document.getElementById('1-9').getElementsByClassName('hide-circle');

    while (addOneNine.length > 0)   {
        addOneNine[0].classList.add('note-circle');
        addOneNine[0].classList.remove('hide-circle');
    }
} else if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'minor-7') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFourTen = document.getElementById('4-10').getElementsByClassName('hide-circle');

    while (addFourTen.length > 0)   {
        addFourTen[0].classList.add('note-circle');
        addFourTen[0].classList.remove('hide-circle');
    }
    var addThreeEight = document.getElementById('3-8').getElementsByClassName('hide-circle');

    while (addThreeEight.length > 0)   {
        addThreeEight[0].classList.add('note-circle');
        addThreeEight[0].classList.remove('hide-circle');
    }
    var addTwoEight = document.getElementById('2-8').getElementsByClassName('hide-circle');

    while (addTwoEight.length > 0)   {
        addTwoEight[0].classList.add('note-circle');
        addTwoEight[0].classList.remove('hide-circle');
    }
    var addOneEight = document.getElementById('1-8').getElementsByClassName('hide-circle');

    while (addOneEight.length > 0)   {
        addOneEight[0].classList.add('note-circle');
        addOneEight[0].classList.remove('hide-circle');
    }
} else if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'sus2') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFiveZero = document.getElementById('5-0').getElementsByClassName('hide-circle');

    while (addFiveZero.length > 0)   {
        addFiveZero[0].classList.add('note-circle');
        addFiveZero[0].classList.remove('hide-circle');
    }
    var addFourZero = document.getElementById('4-0').getElementsByClassName('hide-circle');

    while (addFourZero.length > 0)   {
        addFourZero[0].classList.add('note-circle');
        addFourZero[0].classList.remove('hide-circle');
    }
    var addThreeZero = document.getElementById('3-0').getElementsByClassName('hide-circle');

    while (addThreeZero.length > 0)   {
        addThreeZero[0].classList.add('note-circle');
        addThreeZero[0].classList.remove('hide-circle');
    }
    var addTwoOne = document.getElementById('2-1').getElementsByClassName('hide-circle');

    while (addTwoOne.length > 0)   {
        addTwoOne[0].classList.add('note-circle');
        addTwoOne[0].classList.remove('hide-circle');
    }
    var addOneZero = document.getElementById('1-0').getElementsByClassName('hide-circle');

    while (addOneZero.length > 0)   {
        addOneZero[0].classList.add('note-circle');
        addOneZero[0].classList.remove('hide-circle');
    }
} else if (checkNote.value === 'c' && checkChord.checked && chordVariation.value === 'sus4') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addFiveOne = document.getElementById('5-0').getElementsByClassName('hide-circle');

    while (addFiveOne.length > 0)   {
        addFiveOne[0].classList.add('note-circle');
        addFiveOne[0].classList.remove('hide-circle');
    }
    var addFourThree = document.getElementById('4-3').getElementsByClassName('hide-circle');

    while (addFourThree.length > 0)   {
        addFourThree[0].classList.add('note-circle');
        addFourThree[0].classList.remove('hide-circle');
    }
    var addThreeZero = document.getElementById('3-0').getElementsByClassName('hide-circle');

    while (addThreeZero.length > 0)   {
        addThreeZero[0].classList.add('note-circle');
        addThreeZero[0].classList.remove('hide-circle');
    }
    var addTwoOne = document.getElementById('2-1').getElementsByClassName('hide-circle');

    while (addTwoOne.length > 0)   {
        addTwoOne[0].classList.add('note-circle');
        addTwoOne[0].classList.remove('hide-circle');
    }
    var addOneThree = document.getElementById('1-3').getElementsByClassName('hide-circle');

    while (addOneThree.length > 0)   {
        addOneThree[0].classList.add('note-circle');
        addOneThree[0].classList.remove('hide-circle');
    }
    
/* C sharp/D flat chords*/
} else if (checkNote.value === 'db' && checkChord.checked && chordVariation.value === 'major') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for Db Chord
    var addFourEleven = document.getElementById('4-11').getElementsByClassName('hide-circle');

    while (addFourEleven.length > 0)   {
        addFourEleven[0].classList.add('note-circle');
        addFourEleven[0].classList.remove('hide-circle');
    }
    var addThreeTen = document.getElementById('3-10').getElementsByClassName('hide-circle');

    while (addThreeTen.length > 0)   {
        addThreeTen[0].classList.add('note-circle');
        addThreeTen[0].classList.remove('hide-circle');
    }
    var addTwoNine = document.getElementById('2-9').getElementsByClassName('hide-circle');

    while (addTwoNine.length > 0)   {
        addTwoNine[0].classList.add('note-circle');
        addTwoNine[0].classList.remove('hide-circle');
    }
    var addOneEleven = document.getElementById('1-11').getElementsByClassName('hide-circle');

    while (addOneEleven.length > 0)   {
        addOneEleven[0].classList.add('note-circle');
        addOneEleven[0].classList.remove('hide-circle');
    }
} else if (checkNote.value === 'db' && checkChord.checked && chordVariation.value === 'minor') {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for Db Chord
    var addFourEleven = document.getElementById('4-11').getElementsByClassName('hide-circle');

    while (addFourEleven.length > 0)   {
        addFourEleven[0].classList.add('note-circle');
        addFourEleven[0].classList.remove('hide-circle');
    }
    var addThreeNine = document.getElementById('3-9').getElementsByClassName('hide-circle');

    while (addThreeNine.length > 0)   {
        addThreeNine[0].classList.add('note-circle');
        addThreeNine[0].classList.remove('hide-circle');
    }
    var addTwoNine = document.getElementById('2-9').getElementsByClassName('hide-circle');

    while (addTwoNine.length > 0)   {
        addTwoNine[0].classList.add('note-circle');
        addTwoNine[0].classList.remove('hide-circle');
    }
    var addOneEleven = document.getElementById('1-11').getElementsByClassName('hide-circle');

    while (addOneEleven.length > 0)   {
        addOneEleven[0].classList.add('note-circle');
        addOneEleven[0].classList.remove('hide-circle');
    }
/* Melodic Scales */
} else if (checkNote.value === 'g' && checkScales.checked && melodicScale.checked && scalesVariation.value === 'major' ) {

    //remove all note circles
    var hideCircles = document.getElementById('mando-tabs').getElementsByClassName('note-circle');

    while (hideCircles.length > 0)   {
        hideCircles[0].classList.add('hide-circle');
        hideCircles[0].classList.remove('note-circle');
    }

    //add note circles back in for C Chord
    var addThreeZero = document.getElementById('3-0').getElementsByClassName('hide-circle');

    while (addThreeZero.length > 0)   {
        addThreeZero[0].classList.add('note-circle');
        addThreeZero[0].classList.remove('hide-circle');
    }

    var addFourSeven = document.getElementById('4-7').getElementsByClassName('hide-circle');

    while (addFourSeven.length > 0)   {
        addFourSeven[0].classList.add('note-circle');
        addFourSeven[0].classList.remove('hide-circle');
    }

    var addThreeFive = document.getElementById('3-5').getElementsByClassName('hide-circle');

    while (addThreeFive.length > 0)   {
        addThreeFive[0].classList.add('note-circle');
        addThreeFive[0].classList.remove('hide-circle');
    }

    var addTwoZero = document.getElementById('2-0').getElementsByClassName('hide-circle');

    while (addTwoZero.length > 0)   {
        addTwoZero[0].classList.add('note-circle');
        addTwoZero[0].classList.remove('hide-circle');
    }

    var addTwoFive = document.getElementById('2-5').getElementsByClassName('hide-circle');

    while (addTwoFive.length > 0)   {
        addTwoFive[0].classList.add('note-circle');
        addTwoFive[0].classList.remove('hide-circle');
    }


    var addOneZero = document.getElementById('1-0').getElementsByClassName('hide-circle');

    while (addOneZero.length > 0)   {
        addOneZero[0].classList.add('note-circle');
        addOneZero[0].classList.remove('hide-circle');
    }

    var addOneFour = document.getElementById('1-4').getElementsByClassName('hide-circle');

    while (addOneFour.length > 0)   {
        addOneFour[0].classList.add('note-circle');
        addOneFour[0].classList.remove('hide-circle');
    }

    var addFiveOne = document.getElementById('5-0').getElementsByClassName('hide-circle');

    while (addFiveOne.length > 0)   {
        addFiveOne[0].classList.add('note-circle');
        addFiveOne[0].classList.remove('hide-circle');
    }
}
  /*
  Use this code to check the value is working
  alert(checkNote.value);
  */

}