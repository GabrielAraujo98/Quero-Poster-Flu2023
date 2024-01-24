/* https://wa.me/5581996258369?text=Olá%20sou%20{fulano}!%20Gostaria%20de%20comprar%20um%20poster%20{formato}.%20Meu%20e-mail%20é%20{email} */

const botao = document.querySelector("#enviar");

botao.addEventListener("click", function(e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    var formatos = [];
    var els = document.getElementsByName('formato');
    for (var i=0; i<els.length; i++){
    if ( els[i].checked ) {
        formatos.push(els[i].value);
    }
    }
    console.log(nome, email, formatos);

    window.location.href = "https://wa.me/5581996258369?text=Olá%20sou%20"+nome+"!%20Gostaria%20de%20comprar%20um%20poster%20"+formatos+".%20Meu%20e-mail%20é%20"+email
});