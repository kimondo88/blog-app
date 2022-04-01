import './navbar.css'

export default function Navbar(){
    return(
        <nav className="nav">
            <div className="left">
                <div className='nav-element flex-center'>Click Me</div>
                <div className='nav-element flex-center'>Click Me</div>
            </div>
            <div className="nav-element flex-center log">Profile</div>
        </nav>
    )
}