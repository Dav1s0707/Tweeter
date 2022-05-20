document.getElementById("btnAdd").addEventListener("click", function () {
    var tweets = document.getElementById("tweets");
    var texto = document.getElementById("texto").value;
    var user = document.getElementById("user").value;
    var li = document.createElement("li");
    var li2 = document.createElement("li");
    li2.setAttribute("class", "bold")


    li.textContent = texto;
    li2.textContent = user;
    tweets.appendChild(li2);
    tweets.appendChild(li);//como adciona uma string antes do valor?

});





