import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { comments } from "./components/api/api"; // Importando os comentários do api.js

function App() {
    const [filters, setFilters] = useState({});
    
    // Função para aplicar os filtros
    const filteredComments = comments.filter(comment => {
        const matchesUnidad = filters.unidad ? comment.unidad === filters.unidad : true;
        const matchesProfessional = filters.professional ? comment.professional === filters.professional : true;
        const matchesRating = filters.rating ? comment.rating === filters.rating : true;

        return matchesUnidad && matchesProfessional && matchesRating;
    });

    return (
        <>
            <Header onFilterChange={setFilters} />
            <Main filters={filters} comments={filteredComments} />
            <Footer comments={filteredComments} />
        </>
    );
}

export default App;