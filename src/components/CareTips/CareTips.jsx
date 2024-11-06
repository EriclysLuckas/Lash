import styleCareTips from "../CareTips/CareTips.module.css"


export default function CareTips() {

const listCareArray = [
{id:1 , title:"Não esfregue os olhos" , desc:" Isso pode soltar as extensões e danificar os cílios naturais."},
{id:2 , title:"Use produtos à base de água" , desc:" Evite produtos oleosos ou à base de álcool, que podem comprometer a cola."},
{id:3 , title:"Evite maquiagem à prova d'água:" , desc:"Remova qualquer maquiagem com cuidado, usando um removedor suave."},
{id:4 , title:"Não use curvadores de cílios" , desc:" Eles podem danificar tanto as extensões quanto os cílios naturais"},
{id:5 , title:"Evite sauna e banhos quentes:" , desc:"O calor excessivo pode afetar a durabilidade das extensões."},
{id:6 , title:"Mantenha os cílios limpos:" , desc:"Use um limpador suave, específico para cílios, para remover impurezas."},
{id:7 , title:"Faça manutenções regulares: " , desc:"Visite o profissional para retoques a cada 2-4 semanas, dependendo do seu crescimento natural dos cílios."},

]
return (

  <section className = {styleCareTips.sectionCareTips} id = "cuidados">

    <div className = {styleCareTips.contentCareTips}>
      <h1>Dicas de Cuidados</h1>
      <div className = {styleCareTips.listCare}>
      <ul className= {styleCareTips.ulListCare}>

      {listCareArray.map(item=>(
        <li key={item.id}> <strong className={styleCareTips.strong}>{item.title}</strong> {item.desc} </li>
      ))}

</ul>
      </div>

    </div>
  

  </section>
)
  
}