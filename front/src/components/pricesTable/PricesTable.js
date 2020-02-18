import React, { Component } from 'react';
import './PricesTable.css';



class PricesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div >
                <section id="section__prices">
                    <div className="container-border">
                        <div className="container-price">
                            <div className="container-inner">
                                <h2 className="prices-title">Prices</h2>

                                <table>
                                    <tr>
                                        <td></td>
                                        <th scope="col">Adults</th>
                                        <th scope="col">Children under 12</th>
                                        <th scope="col">Groups (more than 10)</th>
                                        <th scope="col">Schools</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Weels (without wed.)</th>
                                        <td>55€</td>
                                        <td>30€</td>
                                        <td>35€</td>
                                        <td>20€</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Weekend and wednesday</th>
                                        <td>75€</td>
                                        <td>40€</td>
                                        <td>55€</td>
                                        <td>30€</td>
                                    </tr>
                                    
                                </table>
                                <button className="buy-tiket">Buy a Ticket</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default PricesTable;