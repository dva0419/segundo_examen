import React, { Component } from 'react'
import second_examService from '../../services/second_examService'

export class second_exam extends Component {

    state = {
        second_exam: []
    }

    componentDidMount() {
        this.setState({
            second_exam: second_examService.getExam()
        });
    }

    render() {

        const second_exam = this.state.second_exam;
        return (
            <React.Fragment>

                <h1 className="animated fadeIn fast">Segundo examen (16%)</h1>
                <hr />
                <p className="animated fadeIn">
                    <p><h2 className="animated fadeIn fast">Indicaciones:</h2></p>
                    <div>
                        <ol>
                            <li>Descargar todo el proyecto de Heroes-React.</li>
                            <li>En este espacio, usted debe crear una página que tenga que ver con su proyecto de clase.</li>
                            <li>Entre los integrantes del proyecto no pueden existir paginas iguales, ni similares.</li>
                            <li>El proyecto completo debe adicionarse al GitHub.</li>
                            <li>En un documento ubicado en el Google Drive cada uno escribirá el enlace suministrado por GitHub para una posterior descarga.</li>
                            <li>El contenido de la página como mínimo debe tener algo similar a la página de "Heroes"; es decir, varias imagenes, enlaces, divisiones, lo que usted considere pertinente para ganarse un 5.0.</li>
                            <li>A las 12 m. del día de hoy debe estar el enlace en el Google Drive.</li>
                        </ol>
                    </div>
                </p>


                <h1>Arma tu pc <small>Ram</small></h1>
                <hr></hr>

                <div className="card-columns">

                    {second_exam.map(second_exam => {
                        return (
                            <div className="card animated fadeIn fast">
                                <img src={second_exam.img} alt={second_exam.nombre} className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h4 className="card-title">{second_exam.nombre}</h4>
                                    <p className="card-text">{second_exam.despricion}}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{second_exam.precio}}</small>
                                    </p>
                                    <button type="button" className="btn btn-outline-primary btn-block">
                                        Ver más...
                            </button>
                                </div>
                            </div>
                        )
                    })}

                </div>




            </React.Fragment>
        )
    }



}





export default second_exam
