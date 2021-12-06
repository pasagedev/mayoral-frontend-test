const getArticulos = () => (
  window.fetch('./api/articulos.json')
    .then(res => res.json())
)

export default { getArticulos }
