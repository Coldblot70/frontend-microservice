import './signup.css';
import logo from '../../assets/images/logo.png';

function SignUp(){
   return(
    <div className='signupcontainer'>
         <section className='logowithtext' >
         <img src={logo} width='100' height='100'/>
            <h1>Sign up</h1>
          
         </section>
         <section className='formsection'>
            <form method="post" action=''>
                <input type="text" name="name" placeholder='Name'/>
                <input type="text" name="email" placeholder='Email'/>
                <input type="password" name="password" placeholder='Password'/>
                <input type="text" name="cpassword" placeholder='Confirm Password'/>
                <button>Sign Up</button>
            </form>
         </section>
         <section className='logowithtext'>
            <h2>Already have an account? <a href ="/login">Log in</a></h2>
         </section>
    </div>
   );
}

export default SignUp;