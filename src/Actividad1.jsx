import React from 'react'


function Actividad1({reyes}) {
  const url="http://www.html6.es/img/rey_";
    const resultado=reyes.map((e)=><div key={e.nombre} className='rey'><span className='rojo'>{e.nombre.toUpperCase()} </span>ha comido {e.reinado*e.vacasComidas*365} vacas en sus {e.reinado} años de reinado.
   <img src={url+e.nombre.toLowerCase()+".png"}></img></div>)
  return (
    <>
    {resultado}
    </>
  )
}

export default Actividad1;
// const Mapa = () => {

//        const resultado1 = reyes
//           .find(valor => valor.vacasComidas >= 8 && valor.vacasComidas<=12)
//           // .map(valor =>        
//           //     <div key={valor.nombre}>{valor.nombre} come {valor.vacasComidas} vacas al dia </div>
//           // );
//   return (
//     <>
//     <div className="caja">
//         {resultado1.nombre} come {resultado1.vacasComidas} vacas al dia
//     </div>
//     </>
//   )
// }

// export default Mapa
// // valor => valor.nombre.includes("E"))