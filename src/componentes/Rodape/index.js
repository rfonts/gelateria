import './style.css'

export default function Rodape() {
  return(
    <footer>
      <div className=' limitar-secao container-logo-informacoes'>
        <img src='assets/logo.png' alt='logomarca'/>
        <div>
          <h3>ENDEREÇO</h3>
          <p>Rua Projetada 08, 150 "A"</p>
          <p>Petrolina, PE 56327-155</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>fontes.dev@hotmail.com</p>
          <p>Tel: (87) 98117-6674</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>08:00 - 18:00</p>
        </div>
      </div>
      <div className='limitar-secao direito-autoral'>
        <p>Gelateria. Orgulhosamente desenvolvido por "Rodrigo Fontes"</p>
      </div>
    </footer>
  )
}