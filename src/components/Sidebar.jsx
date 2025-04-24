import { Link } from 'react-router-dom'

function Sidebar({ isOpen, onToggle, topics}){
    return (
        <div className={`sidebar ${isOpen ? "show" : ""}`}>
            {topics.map(({ title, path }, idx)=> (
                <div className='topik' key={idx}>
                    <p>
                        <Link to={path} onClick={onToggle}>{title}</Link>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Sidebar

