$.get('http://localhost:3000/api/questions', data => {
    data.forEach(element => {
        $("#questionsDiv").append("<h2>${element.question}</h2>");
        var newOption = $("<select class='form-control' id='exampleFormControlSelect1'>");
        var options = newOption.append("<option>" + element.option + "</option>");
        newQuestion.append(options);
});
});