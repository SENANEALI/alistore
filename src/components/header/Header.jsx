import {Link}from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';

function Header(){
    return(

        <div className="home">
        
            <nav>
                
                <Link to='/product'>THES</Link>
                <Link to='/great vintages'>GRANDS CRUS</Link>
                <Link to='/grocery'>EPICERIE</Link>
                <Link to='/about'>NOTRE HISTOIRE</Link>
            </nav>
            
            <img src={logo} alt='Logo Cup of Tea'/>
        </div>
    )
}


export default Header;