import './Home.css'
import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'
export function Home(){

    let descripcionBanda="Blackpink es un grupo femenino surcoreano formado por YG Entertainment. Está integrado por cuatro miembros: Jisoo, Jennie, Rosé y Lisa, el grupo debutó el 8 de agosto de 2016, con su álbum sencillo titulado Square One, el cual está compuesto por «Whistle», su primera canción número uno en Corea del Sur,Blackpink es el primer grupo de k-pop femenino con la posición más alta en Billboard Hot 100 con su sencillo «Ice Cream», canción realizada en colaboración con Selena Gomez, en la decimotercera posición,1​ y en la lista Billboard 200, en el segundo puesto con su primer álbum larga duración The Album.2​ Son el primer y único grupo femenino de k-pop en ingresar y encabezar las listas de artistas emergentes de Billboard, también son el primer grupo femenino de k-pop en tener cuatro canciones en la lista World Digital Song Sales."

    return(
        <>
            <div className="banner">
                
            </div>
            <div>
               <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">BLACK PINK</h1>
                            <p className='text-center'>{descripcionBanda}</p>
                        </div>
                    </div>
               </div>
            </div>
            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}