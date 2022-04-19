const changeMode =() =>{
    changeClasses();
    changeTexts();
    // console.log('clicou')
    
}

const changeClasses = () => {
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

const changeTexts = () => {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode"
    if(body.classList.contains(darkModeClass))
    {
        botao.innerHTML = lightMode
        h1.innerHTML = darkMode + ' ON'
        return;
    }
  
        botao.innerHTML = darkMode
        h1.innerHTML = lightMode + ' ON'
       
    
}

// `h1`, `button`, `footer` e `body`
const darkModeClass = 'dark-mode';
const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

botao.addEventListener('click', changeMode);
