$("#submit-btn").click(function () {

    const A = .5;
    const P = .1;
    const Q = .1;
    const M = .1;
    const F = .1;
    const I = .1;

    var assignment = $("#assign").val();
    var project = $("#proj").val();
    var quizzes = $("#quiz").val();
    var midterm = $("#mid").val();
    var final = $("#final").val();
    var intex = $("#intex").val();

    var finalGrade = (assignment * A) + (project * P) + (quizzes * Q) + (midterm * M) + (final * F) + (intex * I);

    var message = "Your Final Grade is: " + finalGrade.toString() + "%";
    alert(message);

})