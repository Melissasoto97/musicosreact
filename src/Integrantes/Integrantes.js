import './integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import {useEffect} from 'react';


export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Lisa.jpg?alt=media&token=f0ca08e0-2144-427d-b365-bfb87675be5d" alt="foto1" className="img-fluid w-100 animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h2 className='text-center'>Lalisa Manobal</h2>
                    <h3 className='text-center'>Vocalista</h3>
                    <h3 className='text-center'>Bailarina</h3>
                    <h3 className='text-center'>Rapera</h3>
                    <h3 className='text-center'>Maknae</h3>
                </div>
                <div className='row mt-2'>
                    <div className='col-12' >
                     <div className="collapse" id="collapseExample">
                            <div className="card card-body text-center">
                                Conocida por su nombre artístico Lisa, es una rapera, modelo, cantante y bailarina tailandesa, nació el 27 de marzo de 1997 tiene 25 años de edad nació en Satuek District Tailandiaes , es integrante del grupo femenino Blackpink, formado en 2016 por YG Entertainment, reconocida por su talento para el rap, el baile y el canto, Lisa habla tailandés, coreano, inglés y japonés.
                            </div>
                            <div className="card card-body text-center">
                                Lisa hizo su debut en solitario con su álbum sencillo Lalisa en septiembre de 2021 el álbum vendió más de 736.000 copias en su semana de lanzamiento en Corea del Sur, convirtiéndola en la primera artista femenina en hacerlo, elvideo musical de su sencillo principal del mismo nombre registró 73.6 millones de visitas en YouTube en las primeras 24 horas de su lanzamiento, convirtiéndose en el video musical más visto en las primeras 24 horas en la plataforma por un artista en solitario superando a Taylor Swift.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center animate__animated animate__backInRight wow '>
                    <h2 className='text-center'>Kim Jennie</h2>
                    <h3 className='text-center'>Vocalista</h3>
                    <h3 className='text-center'>Bailarina</h3>
                    <h3 className='text-center'>Rapera</h3>
                </div>
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Jennie.jpg?alt=media&token=fa2eec2e-910d-43b1-839c-6fd04826c5b4" alt="foto1" className="img-fluid w-100 animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='row mt-2'>
                    <div className='col-12' >
                     <div className="collapse" id="collapseExample">
                            <div className="card card-body text-center">
                                Conocida como Jennie, es una cantante, rapera y bailarina surcoreana, nació el 16 de enero de 1996 tiene 26 años de edad, nació en Cheongdam-dong Seúl Corea del Sur es miembro del grupo femenino Blackpink formado por la discográfica YG Entertainment en 2016, debutó como solista con el sencillo «Solo» el 12 de noviembre de 2018.
                            </div>
                            <div className="card card-body text-center">
                             Cuando vivía en Nueva Zelanda, escuchaba K-pop, logrando encontrar un interés particular en los artistas de YG Entertainment wspecializada en el hip-hop y R&B, YG Entertainment tiene el sonido más occidental de las tres compañías más grandes de Corea del Sur, a Jennie le gustaba la imagen «oscura» de la empresa, por lo que quería formar parte de YGE, durante una audición realizada por la compañía, participó interpretando «Take A Bow» de Rihanna, la cual logró pasar exitosamente, uniéndose al sello en calidad de aprendiz.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Ros%C3%A9.jpg?alt=media&token=cee52cf9-5162-4ae3-8897-0be15484c22e" alt="foto1" className="img-fluid w-100 animate__animated  animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft'>
                    <h2 className='text-center'>Roseanne Park</h2>
                    <h3 className='text-center'>Vocalista</h3>
                    <h3 className='text-center'>Bailarina</h3>
                </div>
                <div className='row mt-2'>
                    <div className='col-12' >
                     <div className="collapse" id="collapseExample">
                            <div className="card card-body text-center">
                             Conocida por su nombre artístico Rosé, es una cantante, modelo, compositora y bailarina, nació el 11 de febrero de 1997 tiene 25 años de edad nació en Auckland Nueva Zelanda, es miembro del grupo femenino Blackpink formado por la discográfica YG Entertainment en 2016, su debut como solista fue el 12 de marzo de 2021, con el sencillo «On the Ground».
                            </div>
                            <div className="card card-body text-center">
                                Tras su llegada a Seúl, Rosé comenzó su entrenamiento en calidad de aprendiz, el que duró cuatro años​, el 15 de septiembre del mismo año, tuvo la oportunidad de participar en la canción «Without You» de su compañero de agencia G-Dragon, la cual estuvo incluida en el EP One of a Kind del cantante
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center aling-text-end animate__animated animate__backInRight wow'>
                    <h2 className='text-center'>Kim Ji-soo</h2>
                    <h3 className='text-center'>Vocalista</h3>
                    <h3 className='text-center'>Bailarina</h3>
                </div>
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Jisoo.webp?alt=media&token=a9dca6ed-8b24-4de2-8125-2160c2877c4d" alt="foto1" className="img-fluid w-100 animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='row mt-2'>
                    <div className='col-12' >
                     <div className="collapse" id="collapseExample">
                            <div className="card card-body text-center">
                             Más conocida como Jisoo, es una cantante, actriz, modelo y presentadora surcoreana, nació el 3 de enero de 1995 tiene 27 años de edad, nació en Sanbon-dong Gunpo Corea del Sur, es miembro del grupo Blackpink se unió a YG Entertainment en 2011 y se convirtió en aprendiz durante cinco años antes de debutar con Blackpink en agosto de 2016.
                            </div>
                            <div className="card card-body text-center">
                            Se unió a YG Entertainment en 2011 y se convirtió en aprendiz durante cinco años antes de debutar con Blackpink en agosto de 2016, gradualmente el grupo se convirtió en un fenómeno global, conquistando el mercado estadounidense y muchos otros países, además de ser cantante e ídolo de K-pop, Jisoo también es actriz y presentadora, actuó en muchos comerciales, apareció en muchas películas como cameo antes de recibir su primer protagónico en el drama Snowdrop, que fue estrenada en diciembre de 2021.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}