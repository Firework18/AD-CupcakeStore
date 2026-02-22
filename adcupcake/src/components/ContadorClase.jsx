import React, { Component } from 'react'

export default class ContadorClase extends Component {

    constructor(props) {
        super(props),
            this.state = {
                count: 0
            }
    }

    incrementar = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className='bg-black text-white font-bold p-2'>
                <h2 className='text-3xl font-extrabold uppercase'>Contador (Clase)</h2>
                <p className='text-2xl m-10'>{this.state.count}</p>
                <button onClick={this.incrementar} className='bg-red-600 p-3 rounded-sm hover:scale-105 transition-all'>
                    Incrementar
                </button>
            </div>
        )
    }
}
