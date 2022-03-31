import './navbar.css'

export default function Navbar(){
    return(
        <nav className="nav">
            <div className="left">
                <div className='nav-element'>Click Me</div>
                <div className='nav-element'>Click Me</div>
            </div>
            <div className="nav-element log">Profile</div>
        </nav>
    )
}