function addParagraph() {
    const para = document.createElement('p');
    para.innerHTML = "<b>This is a new Paragraph</b>"
    para.style.color = 'blue';

    const div = document.querySelector('#root')
    div.appendChild(para);
}

function removeParagraph() {
    const div = document.querySelector('#root');
    const para = document.querySelector('p')
    div.removeChild(para);
}

function removeAllParagraph() {
    const div = document.querySelector('#root');
    const paras = document.querySelectorAll('p')
    // for(i of paras){
    //     div.removeChild(i);
    // } 
    
    paras.forEach((i) => {
        div.removeChild(i);
    });
}