//export const myAGetter =  ( /*state*/ ) => {
//  return state.algo
//}

export const getEntriesByTerm =  ( state ) => ( term = '' ) => {

    if ( term.length === 0 ) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLowerCase()) )
}

//recibir ID como argumento, llama a otra funcion y reconocerlo como string vacio
export const getEntryById =  ( state ) => ( id = '')=> {
    
    //nunca modificar state de manera directa a no ser que sea una mutation
    //Find permite buscar en cada una de las entradas de nuestro arreglo
    const entry = state.entries.find( entry => entry.id === id )
    
    //si no encuentra, retorna undefined
    if ( !entry ) return
    
    // desestructurar objeto entrada
    return { ...entry } // TODO: prueben
}
  
