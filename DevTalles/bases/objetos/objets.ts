(()=>{
    let flash ={
        nombre: 'Barry Allen',
        edad: 24,
        poderes: ['Puede correr muy rápido', 'Viajar en el tiempo']
    }

    flash = {
        nombre: 'Clark Kent',
        edad: 500,
        poderes: ['Puede volar']
    }


    //En typescript cuando definimos un objetos, luego si queremos editar sus propiedades, no podemos hacerlo, ya que typescript lo toma como un objeto inmutable, para solucionar esto, debemos definir las propiedades como opcionales, para que luego podamos editarlas
})()