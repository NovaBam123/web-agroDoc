
function Header({ onToggle, isOpen , onSelectKomoditas}){
    
    return (
        <>
          <div className="header-container">
          <header>
            <h1>Agro docs</h1>
            <label htmlFor="tanaman">Komoditas
              <select 
              name="tanaman" 
              id="tanaman"
              onChange={e=> onSelectKomoditas(e.target.value)}
              onClick={onToggle}
              >
                <option value="garlic">Garlic</option>
                <option value="jagung">Jagung</option>
              </select>
            </label>
          </header>
          <div className="divider" onClick={onToggle}>
            <i className={`fa-solid ${isOpen ? "fa-play fa-rotate-180" : "fa-play"}`}></i>
            <span>Topik</span>
          </div> 
        </div>
        </>
    )
}

export default Header