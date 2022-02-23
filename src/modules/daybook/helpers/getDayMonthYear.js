const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

const getDayMonthYear = ( dateString ) => {

    // el new date ya parsea el argumento pasado
    const date = new Date ( dateString )
    
    return {
        day: date.getDate(),
        month: months [ date.getMonth() ],
        yearDay: `${ date.getFullYear() }, ${ days[date.getDay()] }`
    }
    // le pasamos una fecha y nos lo devuelve por separado tal y como queremos

}


export default getDayMonthYear