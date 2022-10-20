export function Musicos(){

    //un arreglo de objetos es formato comun al consumir un api
    let musicos=[
        {
            nombre:"Lalisa Manobal",
            rol:"Vocalista, Bailarina, Rapera, Maknae",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/lisa3.webp?alt=media&token=d6b4a85e-57e0-4a77-9663-08f26206d7c6"
        },
        {
            nombre:"Kim Jennie",
            rol:"Vocalista, Bailarina, Rapera",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/jennie3.webp?alt=media&token=39eba287-3b8b-46d2-8f19-976f92548405"
        },
        {
            nombre:"Roseanne Park",
            rol:"Vocalista, Bailarina",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/rose3.gif?alt=media&token=3092c33f-e430-4e35-8ec0-b2a58de5a633"
        },
        {
            nombre:"Kim Ji-soo",
            rol:"Vocalista, Bailarina",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Jiso2.gif?alt=media&token=c89a39ea-ed0f-4fb2-93fe-9adede7f860a"
        }
    ]

    let conciertosMemorables=[
        {
            fecha:"20/07/2017",
            país:"Japón",
            descripción:"BLACKPINK Japan Premium Debut Showcase es el primer concierto en solitario de Black Pink. Se llevó a cabo en Tokio, Japón, el 20 de julio de 2017 en el Nippon Budokan frente a 14 000 fanáticos. Se ha informado que más de 200.000 fans solicitaron entradas para el espectáculo",
            foto:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/2concierto.png?alt=media&token=4be741bb-c63a-49aa-9dce-810ba8f32403"
        },
        {
            fecha:"10/09/2018",
            país:"Japón",
            descripción:"Blackpink Arena Tour 2018 es la primera gira de conciertos del grupo surcoreano Blackpink, que se realizó en varias ciudades de Japón, entre ellas Osaka, Fukuoka y Chiba. La gira comenzó el 24 de julio de 2018 y finalizó con un concierto especial en el Kyocera Dome Osaka el 24 de diciembre de 2018",
            foto:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/1gira.jpg?alt=media&token=b6128b09-6f47-46b4-bae9-e3596c282a9f"
        },
        {
            fecha:"10/11/2018",
            país:"Seúl, Corea del Sur",
            descripción:"BLACKPINK 2018 Tour [In Your Area] Seoul x BC Card es el primer concierto en solitario de Black Pink en Seúl. Se llevó a cabo el 10 y 11 de noviembre de 2018 en el Olympic Gymnastics Arena con capacidad para 15,000. YG Entertainment anunció la noticia a través de la zona BLINK oficial coreana de BLACKPINK",
            foto:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/3concierto.jpg?alt=media&token=8e8e7fa7-bff4-4234-ae85-026b3c9c1e0b"
        },
        {
            fecha:"02/10/2020",
            país:"Corea del Sur",
            descripción:"Blackpink: The Show, titulado oficialmente como YG Palm Stage ― 2021 Blackpink: The Show, o conocido simplemente como The Show, fue el primer concierto en línea del grupo femenino surcoreano Blackpink, como parte de la promoción de su primer álbum de estudio titulado The Album, lanzado el 2 de octubre de 2020. Se llevó a cabo en Corea del Sur el 31 de enero de 2021 y fue emitido para todo el mundo a través del sistema PPV de YouTube Music.",
            foto:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/THE-SHOW-Press-Photo-9.webp?alt=media&token=17190bed-7d65-4082-96d1-92ec2bc19399"
        },
        {
            fecha:"18/11/2018",
            país:"Asia, Norteamérica, Europa",
            descripción:"Blackpink World Tour (In Your Area) es el nombre de la primera gira mundial de conciertos del grupo surcoreano Blackpink, la cuál recorrió Asia, Norteamérica, Europa y Oceanía en 33 fechas, comenzando en Seúl el 10 de noviembre de 2018 y finalizando en Fukuoka el 22 de febrero de 2020.",
            foto:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/BlackPink-tour.jpg?alt=media&token=ffc02b87-9778-4b0e-aded-8026c881d1e4"
        }
    ]

    //mapeando un arreglo para hacer render
    return(
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
              musicos.map(function(musico){
                return(
                    <>
                        <div className="col mt-3">
                            <div className="card h-100">
                                <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"/>
                                <h1 className="text-center">{musico.nombre}</h1>
                                <h2 className="text-center">{musico.rol}</h2>
                            </div>
                        </div>
                    </>
                )
              })
            }
            {
              conciertosMemorables.map(function(conciertoMemorable){
                return(
                    <>
                        <div className="col mt-3">
                            <div className="card h-100">
                                <img src={conciertoMemorable.foto} className="img-fluid w-100 h-100" alt="foto"/>
                                <h3 className="text-center">{conciertoMemorable.fecha}</h3>
                                <h1 className="text-center">{conciertoMemorable.país}</h1>
                                <h3 className="text-center">{conciertoMemorable.descripción}</h3>
                            </div>
                        </div>
                    </>
                )
              })
            }
        </div>
        
    )
}