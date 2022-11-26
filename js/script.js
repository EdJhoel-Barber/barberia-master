window.addEventListener('load', () => {
    const contenedor = document.querySelector('.contenedor-loader');
    contenedor.style.opacity = 0;
    contenedor.style.visibility = 'hidden';
})


let i = parseInt(document.getElementsByClassName('visible')[0].id);

document.querySelector('.derecha').addEventListener('click', ()=>{
    if(document.getElementById(i).nodeName === 'VIDEO') {
        document.getElementById(i).pause();
        document.getElementById(i).currentTime = 0;
    }
    document.getElementById(i).classList.remove('visible');
    if (i < 6) {
        i++;
    } else {
        i = 1;
    }
    document.getElementById(i).classList.add('visible');
});
document.querySelector('.izquierda').addEventListener('click', ()=>{
    if(document.getElementById(i).nodeName === 'IMG') {
        document.getElementById(i).pause();
        document.getElementById(i).currentTime = 0;
    }
    document.getElementById(i).classList.remove('visible');
    if (i > 1) {
        i--;
    } else {
        i = 6;
    }
    document.getElementById(i).classList.add('visible');
})

//Para videos
let j = document.getElementsByClassName('visible2')[0].id;

document.querySelector('.derecha2').addEventListener('click', ()=>{
    if(document.getElementById(j).nodeName === 'VIDEO') {
        document.getElementById(j).pause();
        document.getElementById(j).currentTime = 0;
    }
    document.getElementById(j).classList.remove('visible2');
    if (j < 18) {
        j++;
    } else {
        j = 10;
    }
    document.getElementById(j).classList.add('visible2');
});
document.querySelector('.izquierda2').addEventListener('click', ()=>{
    if(document.getElementById(j).nodeName === 'VIDEO') {
        document.getElementById(j).pause();
        document.getElementById(j).currentTime = 0;
    }
    document.getElementById(j).classList.remove('visible2');
    if (j > 10) {
        j--;
    } else {
        j = 18;
    }
    document.getElementById(j).classList.add('visible2');
})
//mostrar imágenes

document.querySelector('.titulo-seccion').addEventListener('click', () => {
    document.querySelector('.slider-container').classList.remove('mostrar');
    document.querySelector('.titulo-seccion').classList.add('mostrar')
})

document.querySelector('.slider').addEventListener('click', () => {
    document.querySelector('.titulo-seccion').classList.remove('mostrar');
    document.querySelector('.slider-container').classList.add('mostrar')
})

//mostrar videos

document.querySelector('.titulo-seccion2').addEventListener('click', () => {
    document.querySelector('.slider-container2').classList.remove('mostrar2');
    document.querySelector('.titulo-seccion2').classList.add('mostrar2')
})

document.querySelector('.slider2').addEventListener('click', () => {
    document.querySelector('.titulo-seccion2').classList.remove('mostrar2');
    document.querySelector('.slider-container2').classList.add('mostrar2')
})
