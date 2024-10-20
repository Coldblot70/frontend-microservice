import Header from '../../components/header/header';
import './page.css';
import background from '../../assets/images/image.png';


function Homepage(){
   return(
      <div>
        <Header/>
        <section className="firstcontent">
           <h1>
               The simplest way to <br/>keep notes
           </h1>
           <h2>
           All your notes, synced on all your devices. Get Simplenote now for iOS,<br/> 
           Android, Mac, Windows, Linux, or in your browser.
           </h2>
        </section>
        <section className="backgroundimage">
         <img src={background}/>
        </section>
     </div>
    );
}

export default Homepage;