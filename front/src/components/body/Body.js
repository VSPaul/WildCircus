import React, { Component } from 'react';
import './Body.css';
import perf1 from '../assets/perf1.png';
import perf2 from '../assets/perf2.png';
import perf3 from '../assets/perf3.png';

import ScrollableAnchor from 'react-scrollable-anchor'


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <ScrollableAnchor id={'section1'}>
            <div className="performance">
                <h2>Performance</h2>
                <ul>
                    <li><img className="perf1" src={perf2} alt='circ'></img><h3>Laugh</h3><p>As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</p></li>
                    <li><img className="perf2" src={perf1} alt='circ'></img><h3>Dream</h3><p>Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.</p></li>
                    <li><img className="perf3" src={perf3} alt='circ'></img><h3>Marvel</h3><p>Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.</p></li>
                </ul>
                
            </div >
            </ScrollableAnchor>
        );
    }
}

export default Body;