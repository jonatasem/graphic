import React, { useState } from "react";
import './Header.scss';

export default function Header({ onFilterChange }) {
    const [unidadFilter, setUnidadFilter] = useState("");
    const [professionalFilter, setProfessionalFilter] = useState("");
    const [ratingFilter, setRatingFilter] = useState("");

    const handleFilterChange = () => {
        onFilterChange({ unidad: unidadFilter, professional: professionalFilter, rating: ratingFilter });
    };

    return (
        <header className='container-header'>
            <h1>Avaliações</h1>
            <nav className="nav-bar">
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
                        <option value="Não Avaliaram">Não Avaliaram</option> {/* Adicionando opção */}
                    </select>
                </section>
                <button className="btn-filter" onClick={handleFilterChange} aria-label="Aplicar filtros">Filtrar</button>
            </nav>
            <button className="btn-mobile"></button>
        </header>
    );
}