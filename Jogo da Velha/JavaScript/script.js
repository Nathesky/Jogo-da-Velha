function res() {
    var q1 = document.getElementById("i1").value.toLowerCase();
    var q2 = document.getElementById("i2").value.toLowerCase();
    var q3 = document.getElementById("i3").value.toLowerCase();
    var q4 = document.getElementById("i4").value.toLowerCase();
    var q5 = document.getElementById("i5").value.toLowerCase();
    var q6 = document.getElementById("i6").value.toLowerCase();
    var q7 = document.getElementById("i7").value.toLowerCase();
    var q8 = document.getElementById("i8").value.toLowerCase();
    var q9 = document.getElementById("i9").value.toLowerCase();

    if (q1 == 'x' && q2 == 'x' && q3 == 'x') {
        alert("X ganhou")
    }
    else if (q4 == 'x' && q5 == 'x' && q6 == 'x') {
        alert("X ganhou")
    }
    else if (q7 == 'x' && q8 == 'x' && q9 == 'x') {
        alert("X ganhou")
    }
    else if (q1 == 'o' && q2 == 'o' && q3 == 'o') {
        alert("O ganhou")
    }
    else if (q4 == 'o' && q5 == 'o' && q6 == 'o') {
        alert("O ganhou")
    }
    else if (q7 == 'o' && q8 == 'o' && q9 == 'o') {
        alert("O ganhou")
    }
    else if (q1 == 'o' && q5 == 'o' && q9 == 'o') {
        alert("O ganhou")
    }
    else if (q3 == 'o' && q5 == 'o' && q7 == 'o') {
        alert("O ganhou")
    }
    else if (q1 == 'x' && q5 == 'x' && q9 == 'x') {
        alert("X ganhou")
    }
    else if (q3 == 'x' && q5 == 'x' && q7 == 'x') {
        alert("X ganhou")
    }
    else if (q1 == 'x' && q4 == 'x' && q7 == 'x') {
        alert("x ganhou")
    }
    else if (q2 == 'x' && q5 == 'x' && q8 == 'x') {
        alert("X ganhou")
    }
    else if (q3 == 'x' && q6 == 'x' && q9 == 'x') {
        alert("X ganhou")
    }
    else if (q1 == 'o' && q4 == 'o' && q7 == 'o') {
        alert("O ganhou")
    }
    else if (q2 == 'o' && q5 == 'o' && q8 == 'o') {
        alert("O ganhou")
    }
    else if (q3 == 'o' && q6 == 'o' && q9 == 'o') {
        alert("O ganhou")
    }
    else {
        alert("Empate")
    }
}


