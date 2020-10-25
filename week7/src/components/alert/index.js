import React from 'react';
import './index.css';

class Alert extends React.Component {
    render() {
        return (
            <div class="alert">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                {this.props.alertText}
            </div>
        );
    }
}

export default Alert;