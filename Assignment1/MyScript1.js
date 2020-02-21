var qualificationlist = document.getElementById("qualification");
var options = ["SSC", "HSC", "UG", "PG"];
for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var qopt = document.createElement("option");
    qopt.textContent = opt;
    qopt.value = opt;
    qualificationlist.add(qopt);
}

var experiencelist = document.getElementById("experience");
var options1 = ["0", "1", "2", "3", "3 or more"];
for (var i = 0; i < options1.length; i++) {
    var opt1 = options1[i];
    var eopt = document.createElement("option");
    eopt.textContent = opt1;
    eopt.value = opt1;
    experiencelist.add(eopt);
}



var coding_language = [];
        function code_language(Name, IsEnabled) {
            this.Name = Name;
            this.IsEnabled = IsEnabled;
        }
        var language1 = new code_language("C/C++", false);
        var language2 = new code_language("Java", true);
        var language3 = new code_language("C#", true);
        var language4 = new code_language("PHP", false);
        var language5 = new code_language("Python", false);

        coding_language.push(language1); 
        coding_language.push(language2); 
        coding_language.push(language3); 
        coding_language.push(language4); 
        coding_language.push(language5); 

        var clist = document.getElementById('checkkbox')
        for (i = 0; i < coding_language.length; i++) {
            var checkbox = document.createElement('input');
            var label = document.createElement('label');
            label.htmlFor=i;
            checkbox.type = "checkbox";
            checkbox.value= coding_language[i].Name;
            checkbox.checked = coding_language[i].IsEnabled;
            checkbox.id=i;
            clist.appendChild(checkbox);
            clist.appendChild(label);
            label.appendChild(document.createTextNode(coding_language[i].Name));
            document.write("<br>");
        }

        function elements() {
            var list = [];
            if (document.getElementById('0').checked) {
                list.push(document.getElementById('0').value);
            }
            if (document.getElementById('1').checked) {
                list.push(document.getElementById('1').value);
            }
            if (document.getElementById('2').checked) {
                list.push(document.getElementById('2').value);
            }
            if (document.getElementById('3').checked) {
                list.push(document.getElementById('3').value);
            }
            if (document.getElementById('4').checked) {
                list.push(document.getElementById('4').value);
            }
            return list;
        }



function onSubmit() {
        event.preventDefault();
      
          var F= document.getElementById("f_name").value;
          var L= document.getElementById("l_name").value;
          var E= document.getElementById("e_mail").value;
          var A= document.getElementById("text_area").value;
          var U= document.getElementById("u_name").value;
          var P= document.getElementById("password").value;
          var G= document.getElementById("form").gender.value;
          var Q= document.getElementById("qualification").value;
          var E= document.getElementById("experience").value;
          
          var employee_data={
              FirstName:F,
              LastName:L,
              Email:E,
              Address:A,
              UserName:U,
              PassWord:P,
              Gender:G,
              Qualification:Q,
              Experience:E,
              CodingLanguages:elements()
          };

          var output = ' ';
          for (var x in employee_data) {
          output = x + '=' + employee_data[x];
          console.log(output);
        }
        
          
      
          
}