const nombre = "Adrián";

const apellido = "Fernández Rosa";

const persona = {nombre: nombre, apellido: apellido};

sessionStorage.setItem("persona", JSON.stringify(persona));

console.log(JSON.parse(sessionStorage.getItem("persona")));

localStorage.setItem("persona",JSON.stringify(persona));

console.log("***");

console.log(JSON.parse(localStorage.getItem("persona")))

// Cookies

// document.cookie = JSON.stringify(persona)+ ";max-age=120; sameSite: 'strict' "


//Cookies.set('personaA', JSON.stringify(persona), {sameSite: 'strict', secure: false, } )

//document.cookie = "persona="+JSON.stringify(persona)+ ";max-age=1; SameSite=Strict "