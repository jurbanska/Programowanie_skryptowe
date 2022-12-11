function add() {
    const asideStyle = document.querySelector('aside');
    const headerStyle = document.querySelector('header');
    const header_h1Style = document.querySelector('header h1');
    const navStyle = document.querySelector('nav');
    const aside_h2Style = document.querySelector('aside h2');
    const aside_h1Style = document.querySelector('aside h1');
    const mainStyle = document.querySelector('main');
    const footerStyle = document.querySelector('footer');
    const azureStyle = document.querySelectorAll(".azure");
    const bordersStyle = document.querySelectorAll(".borders");
    const marginsStyle = document.querySelectorAll(".margins");
    const headerssizeStyle = document.querySelectorAll(".headerssize");


    asideStyle.style.cssText = 'clear: right; float: right; width: 400px; margin-bottom: 10px;'
    headerStyle.style.cssText = 'margin-bottom: 10px; height: 50px;'
    header_h1Style.style.cssText = 'margin: 5px;'
    navStyle.style.cssText = 'margin-bottom: 10px; clear: left; float: left;'
    aside_h2Style.style.cssText = 'clear: right; float: right; width: 400px; margin-bottom: 10px;'
    aside_h1Style.style.cssText = 'margin: 0 10px; animation: red_blue 3s infinite; animation-direction: alternate;'
    mainStyle.style.cssText = 'text-align: left; margin-bottom: 5px; clear: left; float: left;'
    footerStyle.style.cssText = 'clear: both;'

    for (let i = 0; i < azureStyle.length; i++) {
        azureStyle[i].style.backgroundColor = 'azure';
    }
    for (let i = 0; i < bordersStyle.length; i++) {
        bordersStyle[i].style.borderWidth = 'thin';
        bordersStyle[i].style.borderStyle = 'solid';
        bordersStyle[i].style.borderColor = 'black';
        bordersStyle[i].style.boxShadow = '0px 0px 2px 1px grey';
    }
    for (let i = 0; i < marginsStyle.length; i++) {
        marginsStyle[i].style.marginLeft = '10px';
        marginsStyle[i].style.marginRight = '10px';
    }
    for (let i = 0; i < headerssizeStyle.length; i++) {
        headerssizeStyle[i].style.fontSize = '35px'
    }
}

    function remove(){
        const asideStyle = document.querySelector('aside');
        const headerStyle = document.querySelector('header');
        const header_h1Style = document.querySelector('header h1');
        const navStyle = document.querySelector('nav');
        const aside_h2Style = document.querySelector('aside h2');
        const aside_h1Style = document.querySelector('aside h1');
        const mainStyle = document.querySelector('main');
        const footerStyle = document.querySelector('footer');
        const azureStyle = document.querySelectorAll(".azure");
        const bordersStyle = document.querySelectorAll(".borders");
        const marginsStyle = document.querySelectorAll(".margins");
        const headerssizeStyle = document.querySelectorAll(".headerssize");


        asideStyle.style.cssText = ''
        headerStyle.style.cssText = ''
        header_h1Style.style.cssText = ''
        navStyle.style.cssText = ''
        aside_h2Style.style.cssText = ''
        aside_h1Style.style.cssText = ''
        mainStyle.style.cssText = ''
        footerStyle.style.cssText = ''

        for (let i = 0; i < azureStyle.length; i++) {
            azureStyle[i].style.backgroundColor = '';
        }
        for (let i = 0; i < bordersStyle.length; i++) {
            bordersStyle[i].style.borderWidth = '';
            bordersStyle[i].style.borderStyle = '';
            bordersStyle[i].style.borderColor = '';
            bordersStyle[i].style.boxShadow = '';
        }
        for (let i = 0; i < marginsStyle.length; i++) {
            marginsStyle[i].style.marginLeft = '';
            marginsStyle[i].style.marginRight = '';
        }
        for (let i = 0; i < headerssizeStyle.length; i++) {
            headerssizeStyle[i].style.fontSize = ''
        }
    }


