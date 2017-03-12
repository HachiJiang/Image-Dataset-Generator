import React, { Component, PropTypes } from 'react';

export default class AddLocationForm extends Component {
    static propTypes = {
        pos: PropTypes.shape({
            screenX: PropTypes.number.isRequired,
            screenY: PropTypes.number.isRequired,
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired,
        addLocation: PropTypes.func.isRequired
    };

    state = { name: '' };

    onNameChange(name) {
        this.setState({ name });
    }

    addLocation(e) {
        if (e) e.preventDefault();
        const  { x, y } = this.props.pos;
        this.props.addLocation(this.state.name, { x, y });
        this.setState({ name: '' });
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        const { screenX, screenY } = this.props.pos;
        const style = {
            left: screenX + 'px',
            top: screenY + 'px'
        };
        return (
            <div className="add-location-form" style={ style }>
                <form onSubmit={ e => this.addLocation(e) }>
                    <input type="text"
                           value={ this.state.name }
                           onChange={ e => this.onNameChange(e.target.value) }
                           placeholder="Location Name"
                           ref={ (input) => { this.nameInput = input; }}
                    />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}