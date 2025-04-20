
function Header({ onToggle, isOpen }){
    
    return (
        <>
          <div className="header-container">
          <header>
            <h1>Agro docs</h1>
            <label htmlFor="tanaman">Komoditas
              <select name="tanaman" id="tanaman">
                <option value="">Garlic</option>
                <option value="">Jagung</option>
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