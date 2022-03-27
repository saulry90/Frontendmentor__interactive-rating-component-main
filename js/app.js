function verradiovalue() {
      
      for(i=0;i<document.form.radionum.length;i++) {
            if(document.form.radionum[i].checked) {
                  marcado=i;
            }
      }
      let numselect = document.form.radionum[marcado].value;

      document.querySelector(".card").style.display="none";
      document.querySelector(".card-thk").style.display="flex";
      document.querySelector(".card-thk span").innerHTML=`You selected ${numselect} out 5`;

}

document.querySelector("#formulario").addEventListener("submit", function(e){
      e.preventDefault();
      verradiovalue();
  });