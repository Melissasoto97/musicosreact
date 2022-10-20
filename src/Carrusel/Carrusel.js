export function Carrusel(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/blackpink1.jpg?alt=media&token=53b7e185-2e00-4ca2-92e0-15d851fc9ad4" class="d-block w-100" height="900" className="w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/blackpink2.jpg?alt=media&token=221f7520-9ff2-4723-b14b-d62ed8445e18" class="d-block w-100" height="900" className="w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/blakpink3.webp?alt=media&token=80db4066-3c89-44a8-9bf8-d4958538bdca" class="d-block w-100" height="900" className="w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}