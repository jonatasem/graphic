import React, { Component } from "react";
import Chart from "react-apexcharts";
import 'font-awesome/css/font-awesome.min.css';
import './Main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                },
                xaxis: {
                    categories: [""]
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    },
                },
                colors: ["#ffa500"]
            },
            series: [{
                name: "Avaliações",
                data: [0, 0, 0, 0, 0, 0] // Inicializa com zeros
            }]
        };
    }

    componentDidMount() {
        this.updateChartData(this.props.comments);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.comments !== this.props.comments) {
            this.updateChartData(this.props.comments);
        }
    }

    updateChartData(comments) {
        const ratingsCount = [0, 0, 0, 0, 0]; // Para 1 a 5 estrelas
        let notRatedCount = 0;

        comments.forEach(comment => {
            const rating = parseInt(comment.rating);
            if (rating >= 1 && rating <= 5) {
                ratingsCount[rating - 1] += 1;
            } else {
                notRatedCount += 1; // Incrementa para "Não Avaliaram"
            }
        });

        this.setState({
            series: [{
                name: "Avaliações",
                data: [...ratingsCount, notRatedCount]
            }]
        });
    }

    renderStars(rating) {
        return Array.from({ length: 5 }, (_, i) => (
            <i key={i + 1} className={`fa fa-star ${i < rating ? 'star-check' : ''}`}></i>
        ));
    }

    render() {
        return (
            <main className="container-main">
                <section>
                    <article className="avaliation-list">
                        <h2>{this.props.comments.length} Avaliações</h2>
                        <ul>
                            {[5, 4, 3, 2, 1].map(rating => (
                                <li key={rating}>
                                    <strong>{rating}.0</strong>
                                    <p>{this.renderStars(rating)}</p>
                                </li>
                            ))}
                            <li>
                                <strong>Não Avaliaram</strong>
                                <p></p>
                            </li>
                        </ul>
                    </article>
                    <article className="avaliation-graphic">
                        <Chart
                            className="chart"
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="100%"
                            height="330"
                        />
                    </article>
                </section>
            </main>
        );
    }
}

export default Main;