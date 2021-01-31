var score=0;
const questions = [{
    ques : `A complete graph can have`,
    opt1 : `n*2 spanning trees`,
    opt2 : `n*n  spanning trees`,
    opt3 : `n*(n-2)  spanning trees`,
    opt4 : `n*(n+1)  spanning trees`,
    ans :  `n*(n-2)  spanning trees`
}, {
    ques : 'What is the full form of CSS',
    opt1 : 'Color Style Sheets',
    opt2 : 'Cascade Sheets Style',
    opt3 : 'Cascade Style Sheet',
    opt4 : 'Cascading Style Sheets',
    ans : 'Cascading Style Sheets'
}, {
    ques : 'How to include javaScript in HTML document',
    opt1 : 'From javascript:encoding',
    opt2 : 'External file specified by the src attribute of a “script” tag',
    opt3 : 'By using a header tag',
    opt4 : 'By using body tag',
    ans : 'External file specified by the src attribute of a “script” tag'
}, {
    ques : 'How to include variable in JavaScript',
    opt1 : 'int',
    opt2 : 'var',
    opt3 : 'String',
    opt4 : 'char',
    ans : 'var'
}, {
    ques : 'What => means in javaScript',
    opt1 : 'function',
    opt2 : 'Double function',
    opt3 : 'Arrow function',
    opt4 : 'implements',
    ans : 'Arrow function'
}, {
    ques : 'Which of these is not a javaScript framework',
    opt1 : 'Rico',
    opt2 : 'Django',
    opt3 : 'MongoDB',
    opt4 : 'JQuery',
    ans : 'Django'
}, {
    ques : 'How do you define objects in javaScript',
    opt1 : '()',
    opt2 : '{}',
    opt3 : '=',
    opt4 : '[]',
    ans :  '{}'
}, {
    ques : 'What\'s the output of 2 + "2" ?',
    opt1 : '22',
    opt2 : '4',
    opt3 : 'NaN',
    opt4 : 'error',
    ans : '22'
}, {
    ques : 'What\s the output of "2"-1 ?',
    opt1 : '21',
    opt2 : '3',
    opt3 : '1',
    opt4 : 'error',
    ans : '3'
}, {
    ques : 'How to check if a value is Nan in JavaScript',
    opt1 : 'isNan(val)',
    opt2 : 'val == NaN',
    opt3 : 'gives error of NaN',
    opt4 : 'val.equals(NaN)',
    ans : 'isNan(val)'
}];


var question_no=0;
quesRendering();


function quesRendering(){
    if(question_no < questions.length){
        document.getElementById("score").innerHTML = "Quiz";
        document.getElementById("ques").innerHTML = questions[question_no].ques;
        document.getElementById("r0").innerHTML  = `<label><input type="radio" class="form-check-input" id="radio1"  name="r1" value="${questions[question_no].opt1}">${questions[question_no].opt1}</label>`;
        document.getElementById("r1").innerHTML = `<label><input type="radio" class="form-check-input" id="radio2" name="r1" value="${questions[question_no].opt2}">${questions[question_no].opt2}</label>`;
        document.getElementById("r2").innerHTML = `<label><input type="radio" class="form-check-input" id="radio3" name="r1" value="${questions[question_no].opt3}">${questions[question_no].opt3}</label>`;
        document.getElementById("r3").innerHTML = `<label><input type="radio" class="form-check-input" id="radio4" name="r1" value="${questions[question_no].opt4}">${questions[question_no].opt4}</label>`;
        document.getElementById("submit").onclick = function() {
            //console.log(1)
            let checkAns = document.querySelector('input[name="r1"]:checked');
            //console.log(checkAns)
            if(checkAns != null){
                output(check(checkAns.value))
            }
            else{
                alert("Please select any option");
            }
        }
    }
    else{
        answerKeyRender();
    }
}


function check(selected){
    if(selected === questions[question_no].ans){
        return true;
    }
    else{
        return false;
    }
}

function output(bol){
    var dis = document.querySelector('input[name="r1"]:checked');
    dis.disabled = true;

    if(bol){
        document.getElementById("correct").removeAttribute("hidden");
        try {
            document.getElementById("incorrect").setAttribute("hidden", "true");    
        } catch (error) {
            
        }
        
        score = score + 10;
    }
    else{
        document.getElementById("incorrect").removeAttribute("hidden");
        try {
            document.getElementById("correct").setAttribute("hidden", "true");    
        } catch (error) {
            
        }
    }

    document.getElementById("submit").setAttribute("hidden", "true");
    document.getElementById("next").removeAttribute("hidden");
    document.getElementById("next").onclick = function(){
        nexxt();
    }
}

function nexxt(){
    try {
        document.getElementById("correct").setAttribute("hidden", "true");    
    } catch (error) {}


    try {
        document.getElementById("incorrect").setAttribute("hidden", "true");    
    } catch (error) {}

    document.getElementById("next").setAttribute("hidden", "true");
    document.getElementById("submit").removeAttribute("hidden");
    question_no = question_no + 1;
    quesRendering();
}

function answerKeyRender(){
    document.getElementById("startqz").removeAttribute("hidden");
    document.getElementById("restart").removeAttribute("hidden");
    document.getElementById("card1").setAttribute("hidden", "true");
    document.getElementById("card2").removeAttribute("hidden");
    var l = document.getElementById("list");
    for(var i = 0; i < questions.length; i++){
        var ele = document.createElement("li");
        var text = document.createTextNode(questions[i].ques+" - ");

        ele.appendChild(text);

        var spa = document.createElement("span");

        spa.classList.add("badge");
        spa.classList.add("badge-success");

        text = document.createTextNode(questions[i].ans);
        spa.appendChild(text);

        ele.appendChild(spa);
        l.appendChild(ele)
        if(i != questions.length - 1)
        l.appendChild(document.createElement("br"));
    }

    document.getElementById("score").innerHTML = "Score = "+ score;
    document.getElementById("restart").onclick = function(){
        document.getElementById("card2").setAttribute("hidden", "true");
        document.getElementById("card1").removeAttribute("hidden");
        document.getElementById("startqz").setAttribute("hidden", "true");
        document.getElementById("restart").setAttribute("hidden", "true");
        score = 0;
        question_no = 0;
        quesRendering();
    }
}