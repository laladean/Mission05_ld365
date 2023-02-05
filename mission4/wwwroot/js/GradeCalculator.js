$("#submit-btn").click(function () {

    //constant variables based on weights provided by the syllabus
    const A = .5;
    const P = .1;
    const Q = .1;
    const M = .1;
    const F = .1;
    const I = .1;

    //pulling input from the html form and assigning to jquery variables
    var assignment = $("#assign").val();
    var project = $("#proj").val();
    var quizzes = $("#quiz").val();
    var midterm = $("#mid").val();
    var final = $("#final").val();
    var intex = $("#intex").val();

    //calculating the final grade based on the constant weights and input scores
    var finalGrade = (assignment * A) + (project * P) + (quizzes * Q) + (midterm * M) + (final * F) + (intex * I);

    //determing letter grade based on final grade
    var letterGrade = ""
    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //returning the final grade as an alert once the form is submitted
    alert("Your final grade is: " + finalGrade.toString() + "\t" + letterGrade);

})