import './signup.css';
import logo from '../../assets/images/logo.png';

function Login(){
   return(
    <div className='signupcontainer'>
         <section className='logowithtext' >
         <img src={logo} width='100' height='100'/>
            <h1>Sign In</h1>
          
         </section>
         <section className='formsection'>
            <form method="post" action=''>
                <input type="text" name="email" placeholder='Email'/>
                <input type="password" name="password" placeholder='Password'/>
                <button>Sign In</button>
            </form>
         </section>
         <section className='logowithtext'>
            <h2>Not registered yet? <a href ="/signup">Sign Up</a></h2>
         </section>
    </div>
   );
}

export default Login;