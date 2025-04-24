
function Header({ onToggle, isOpen , onSelectKomoditas, onToggleTheme, currentTheme}){
    
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
          <div className="divider">
            <i onClick={onToggle} className={`fa-solid ${isOpen ? "fa-play fa-rotate-180" : "fa-play"}`}></i>
            <span>Topik</span>
            <button onClick={onToggleTheme} className="theme-toggle">
              {currentTheme=== 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div> 
        </div>
        
        </>
    )
}

export default Header