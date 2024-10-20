import './header.css';
import logo from '../../assets/images/logo.png';


function Header(){
   return(
      <div class="header">
        <div class="headerbar">
        <img src={logo} width="50" height="50"/>
        <nav>
            <h2>Home</h2>
            <h2>Notes</h2>
            <h2>Profile</h2>
            <h2>Notication</h2>
        </nav>
        <section>
            <h2 onClick={()=>window.location.href="/login"}>Login</h2>
            <h2 onClick={()=>window.location.href="/signup"}>Signup</h2>
        </section>
        </div>

    </div>
    );
}

export default Header;