export const Card = ({ nombre, precioActual, precioAnterior, descuento, img }) => {
  const conDescuento = precioAnterior && descuento
  const classPrecioActual = conDescuento ? 'precio-actual descuento' : 'precio-actual'
  return (
        <div className="card">
          <div className="card-header">
            <img src={img}></img>
            <h4>{nombre}</h4>
          </div>
          <div className="card-body">
            {conDescuento
              ? <><div className="precio-anterior">{precioAnterior} €</div>
                <div className={classPrecioActual}>{precioActual} € (-{descuento}%)</div>
                </>
              : <div className={classPrecioActual}>{precioActual} €</div>
              }
          </div>
          <button className="card-button-add">AÑADIR</button>
        </div>
  )
}

export const Cards = ({ cards = [] }) => {
  if (!cards) { return null }

  return (
      <div className="card-container">
        {cards.map(card => <Card key={card.id} {...card}/>)}
      </div>

  )
}
