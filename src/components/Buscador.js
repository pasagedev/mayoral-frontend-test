export const Buscador = ({ handleFilterChange, value }) => {
  return (
      <div className="buscador">
        <input
        type="search"
        placeholder="Buscar"
        onChange={handleFilterChange} value={value}/>
      </div>
  )
}
