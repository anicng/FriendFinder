$.get('http://localhost:3000/api/questions', data => {
    data.forEach(element => {
        $("#questionsDiv").append("<h2>${element.question}</h2>");
        var answer = $("<select class='form-control' id='exampleFormControlSelect1'>");
        element.option.forEach(element => {
            answer.append("<option>" + element.option + "</option>");
        });
});
});