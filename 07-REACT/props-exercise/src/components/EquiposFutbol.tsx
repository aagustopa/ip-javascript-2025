const equipos = [
    {
        nombre: "Barça",
        fundado: 1895,
        campeonatos: 90,
        jugadores: 40,
    },
    {
        nombre: "Madrid",
        fundado: 1900,
        campeonatos: 110,
        jugadores: 40,
    }
];
// console.log(equipos);
// function nombre(nombre) {
// console.log(nombre)
// }

function EquiposFutbol() {
    return (
        <>
            {
                equipos.map((element) => {
                    return (

                        // <p onClick={() => nombre(element.nombre)} key={element.nombre}
                        // >{element.nombre}</p>

                    );
                })
            }
        </>
    )
}
export default EquiposFutbol;