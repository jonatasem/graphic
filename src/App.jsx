import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { comments } from "./components/api/api";

function App() {
    const [filters, setFilters] = useState({});

    const filteredComments = comments.filter(comment => {
        const matchesUnidad = filters.unidad ? comment.unidad === filters.unidad : true;
        const matchesProfessional = filters.professional ? comment.professional === filters.professional : true;
        const matchesRating = filters.rating ? comment.rating === filters.rating : true;

        return matchesUnidad && matchesProfessional && matchesRating;
    });

    return (
        <>
            <Header onFilterChange={setFilters} />
            <Main comments={filteredComments} />
            <Footer comments={filteredComments} />
        </>
    );
}

export default App;
