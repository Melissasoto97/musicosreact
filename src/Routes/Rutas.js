import { Routes, Route, Link } from "react-router-dom";

import { Home } from "../Home/Home.js"
import { Historia } from "../Historia/Historia.js"
import { Integrantes } from "../Integrantes/Integrantes.js"
import { Albumes } from "../Albumes/Albumes.js"
import { Menu } from "../Menu/Menu.js"
import { Musicos } from "../Musicos/Musicos.js"
import { Footer } from "../Footer/Footer.js";

export function Rutas() {
    return (
      <div classNameName="App">
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="integrantes" element={<Musicos />} />
          <Route path="albumes" element={<Albumes />} />
        </Routes>
      </div>
    );
  }