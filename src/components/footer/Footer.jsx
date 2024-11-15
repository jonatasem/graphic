import React, { useState } from 'react';
import './Footer.scss';

export default function Footer({ comments }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const commentsPerPage = 3;
    const totalPages = Math.ceil(comments.length / commentsPerPage);

    const nextComments = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + commentsPerPage, comments.length - 1));
    };

    const previousComments = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - commentsPerPage, 0));
    };

    const displayedComments = comments.slice(currentIndex, currentIndex + commentsPerPage);

    return (
        <footer className="container-footer">
            <table border='1'>
                <thead>
                    <tr className='title-footer'>
                        <th>Data</th>
                        <th>Contato</th>
                        <th>Avaliação</th>
                        <th>Profissional</th>
                        <th>Unidade</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedComments.map((comment, index) => (
                        <tr className='item' key={index}>
                            <td>{comment.date}</td>
                            <td>{comment.contact}</td>
                            <td>{comment.rating}</td>
                            <td>{comment.professional}</td>
                            <td>{comment.unidad}</td>
                            <td>{comment.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-controls">
                <button onClick={previousComments} disabled={currentIndex === 0} aria-label="Mostrar comentários anteriores">
                    Anterior
                </button>
                <button onClick={nextComments} disabled={currentIndex + commentsPerPage >= comments.length} aria-label="Mostrar próximos comentários">
                    Próximo
                </button>
            </div>
            <div>
                Página {Math.floor(currentIndex / commentsPerPage) + 1} de {totalPages}
            </div>
        </footer>
    );
}