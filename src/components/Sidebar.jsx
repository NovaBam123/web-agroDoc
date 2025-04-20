import { Link } from 'react-router-dom'

const topics= [
    {title: 'Pengertian Hidroponik', path: '/'},
    {title: 'Teknik Hidroponik', path: '/teknik'},
    {title: 'Media Tanam Hidroponik', path: '/media'},
    {title: 'Electrical Conductivity(EC), pH dan Suhu', path: '/ec'},
    {title: 'Syarat Tumbuh', path: '/syarat-tumbuh'},
]

function Sidebar({ isOpen, onToggle }){
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

