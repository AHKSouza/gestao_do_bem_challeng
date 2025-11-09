// ---------------------------------------------------------------------------------------------------------------------------------------


// Menu Navegação
openMenu.addEventListener("click", () => {
  menu.style.display = "flex"

  menu.style.right = menu.offsetWidth * -1 + "px"

  openMenu.style.display = "none"

  setTimeout(() => {
    menu.style.opacity = "1"

    menu.style.right = "0"
  }, 10)
})

closeMenu.addEventListener("click", () => {
  menu.style.opacity = "0"

  menu.style.right = menu.offsetWidth * -1 + "px"

  setTimeout(() => {
    menu.removeAttribute("style")
    openMenu.removeAttribute("style")
  }, 200)
});

// ---------------------------------------------------------------------------------------------------------------------------------------

// Carrossel Imagens Turma do Bem
document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".slider img");
  let indice = 0;

  if (imagens.length > 0) {
    imagens[indice].classList.add("active");

    setInterval(() => {
      imagens[indice].classList.remove("active");
      indice = (indice + 1) % imagens.length;
      imagens[indice].classList.add("active");
    }, 3000);
  }
});

//---------------------------------------------------------------------------------------------------------------------------------------

// Watson Assistant
function _0x4d05(_0x4ca40d,_0x3c9015){const _0x178a87=_0x178a();return _0x4d05=function(_0x4d051d,_0x2f2fb3){_0x4d051d=_0x4d051d-0x83;let _0x385c2f=_0x178a87[_0x4d051d];return _0x385c2f;},_0x4d05(_0x4ca40d,_0x3c9015);}function _0x178a(){const _0x3aabf0=['9YwaeWl','clientVersion','/WatsonAssistantChatEntry.js','1966398HWNCKL','1fyXkgb','bd895952-3d57-499f-b61f-d5be8403c01b','appendChild','456184gKqbRT','2219910yAvuTe','https://web-chat.global.assistant.watson.appdomain.cloud/versions/','head','2885238EwXyci','3f90c1ee-2bff-42ce-a52c-c913159d6f24','render','794922JeEtkR','16645xpUaGw','createElement','watsonAssistantChatOptions','779914cOfJPe','516mWeAAS'];_0x178a=function(){return _0x3aabf0;};return _0x178a();}const _0x4d4e4b=_0x4d05;(function(_0x34132c,_0x225566){const _0x5de984=_0x4d05,_0x52b940=_0x34132c();while(!![]){try{const _0x4bf82d=-parseInt(_0x5de984(0x86))/0x1*(-parseInt(_0x5de984(0x94))/0x2)+parseInt(_0x5de984(0x90))/0x3+parseInt(_0x5de984(0x95))/0x4*(-parseInt(_0x5de984(0x91))/0x5)+parseInt(_0x5de984(0x8d))/0x6+-parseInt(_0x5de984(0x85))/0x7+-parseInt(_0x5de984(0x89))/0x8*(-parseInt(_0x5de984(0x96))/0x9)+-parseInt(_0x5de984(0x8a))/0xa;if(_0x4bf82d===_0x225566)break;else _0x52b940['push'](_0x52b940['shift']());}catch(_0x484269){_0x52b940['push'](_0x52b940['shift']());}}}(_0x178a,0x3f981),window[_0x4d4e4b(0x93)]={'integrationID':_0x4d4e4b(0x87),'region':'us-south','serviceInstanceID':_0x4d4e4b(0x8e),'onLoad':async _0x430e05=>{const _0x15cded=_0x4d4e4b;await _0x430e05[_0x15cded(0x8f)]();}},setTimeout(function(){const _0x51198f=_0x4d4e4b,_0x2db5f1=document[_0x51198f(0x92)]('script');_0x2db5f1['src']=_0x51198f(0x8b)+(window['watsonAssistantChatOptions'][_0x51198f(0x83)]||'latest')+_0x51198f(0x84),document[_0x51198f(0x8c)][_0x51198f(0x88)](_0x2db5f1);}));


//---------------------------------------------------------------------------------------------------------------------------------------

// Click FAQ
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

//---------------------------------------------------------------------------------------------------------------------------------------

// Fale Conosco
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-cadastro");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome && email) {
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
});

//---------------------------------------------------------------------------------------------------------------------------------------

// Formulário de cadastro

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-cadastro");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar-senha").value;

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
});