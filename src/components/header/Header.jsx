import React, { useState } from "react";
import './Header.scss';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header({ onFilterChange }) {
    const [unidadFilter, setUnidadFilter] = useState("");
    const [professionalFilter, setProfessionalFilter] = useState("");
    const [ratingFilter, setRatingFilter] = useState("");
    const [menuMobile, setMenuMobile] = useState(false);

    const handleFilterChange = () => {
        onFilterChange({ unidad: unidadFilter, professional: professionalFilter, rating: ratingFilter });
        if (unidadFilter || professionalFilter || ratingFilter) {
            toggleMenu(); // Fecha o menu apenas se algum filtro foi aplicado
        }
    };

    const toggleMenu = () => {
        setMenuMobile(prevState => !prevState);
    };

    return (
        <header className='container-header'>
            <h1>Avaliações</h1>
            <button className="btn-mobile" onClick={toggleMenu} aria-label="Menu Móvel">
                {menuMobile ? <AiOutlineClose /> : <FaBars />}
            </button>
            <nav className={`nav-bar ${menuMobile ? 'active' : 'inactive'}`}>
                <section>
                    <select value={unidadFilter} onChange={(e) => setUnidadFilter(e.target.value)}>
                        <option value="">Unidades</option>
                        <option value="Unidade A">Unidade A</option>
                        <option value="Unidade B">Unidade B</option>
                        <option value="Unidade C">Unidade C</option>
                    </select>
                    <select value={professionalFilter} onChange={(e) => setProfessionalFilter(e.target.value)}>
                        <option value="">Profissionais</option>
                        <option value="Maria Silva">Maria Silva</option>
                        <option value="João Pereira">João Pereira</option>
                        <option value="Ana Costa">Ana Costa</option>
                        <option value="Carlos Oliveira">Carlos Oliveira</option>
                        <option value="Fernanda Santos">Fernanda Santos</option>
                        <option value="Ricardo Almeida">Ricardo Almeida</option>
                    </select>
                    <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
                        <option value="">Notas</option>
                        <option value="1">5.0</option>
                        <option value="2">4.0</option>
                        <option value="3">3.0</option>
                        <option value="4">2.0</option>
                        <option value="5">1.0</option>
                        <option value="Não Avaliaram">Não Avaliaram</option>
                    </select>
                </section>
                <button className="btn-filter" onClick={handleFilterChange} aria-label="Aplicar filtros">Filtrar</button>
            </nav>
        </header>
    );
}