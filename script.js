window.addEventListener('DOMContentLoaded', ()=>{
    const containerDiv= document.createElement('div');
    containerDiv.classList.add('container');

    const demoSpan = window.document.createElement('span');
    demoSpan.id = "demo";

    const textarea = window.document.createElement('textarea');
    textarea.name = 'area';
    textarea.id = 'area';
    textarea.placeholder="Írd be a jelszavadat:"
    textarea.addEventListener('keyup', ()=> jelszo(textarea, demoSpan));

    containerDiv.append(demoSpan, textarea);

    console.log(containerDiv);

    document.body.append(containerDiv)
});

function jelszo(textarea, demoSpan){
    let csillag = '';

    for (let i = 0; i< textarea.value.length; i++) {
        csillag+='*';

    }

    demoSpan.textContent = csillag;
}