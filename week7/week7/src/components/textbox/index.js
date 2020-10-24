import React from 'react';
import './index.css';

class Textbox extends React.Component {
    render() {
        return (
            <div className="textBox">
                <p>{this.props.textboxLabel}</p>
                <input type={this.props.number} id={this.props.id} value={this.props.value} onChange={this.props.onchange}/>
            </div>
        );
    }
}

export default Textbox;