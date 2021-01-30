
prender = (IdDiv) => {
    let divs = [ 'DescripcionPersonal', 'ExperienciasLaborales', 'Skills', 'Educacion', 'Hobbies']            
    divs.forEach(div => {
        if(div !== IdDiv) document.querySelector(`#${div}`).style.display = 'none'
    });
    document.getElementById('spiner').style.display = 'block';
    setTimeout(() => {
        document.getElementById('spiner').style.display = 'none';
        document.getElementById(IdDiv).style.display = 'block';
    }, 500);    
}

descripcion = () => {    
    prender('DescripcionPersonal');
}

experiencia =  () => {    
    prender('ExperienciasLaborales');
}
skills = () => {    
    prender('Skills');
}
educacion = () => {    
    prender('Educacion');
}
hobbies = () => {    
    prender('Hobbies');
}

prender('Hobbies');
document.getElementById('spiner').style.display = 'none';