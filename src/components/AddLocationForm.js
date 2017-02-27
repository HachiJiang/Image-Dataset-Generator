import React, { Component, PropTypes } from 'react';

export default class AddLocationForm extends Component {
    static propTypes = {
        pos: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired,
        addLocation: PropTypes.func.isRequired
    };

    state = { name: '' };

    onNameChange(e) {
        const name = e.target.value;
        this.setState({ name });
    }

    addLocation(e) {
        if (e) e.preventDefault();
        this.props.addLocation(this.state.name);
        this.setState({ name: '' });
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        const { x, y } = this.props.pos;
        const style = {
            left: x + 'px',
            top: y + 'px'
        };
        return (
            <div className="add-location-form" style={ style }>
                <form onSubmit={ this.addLocation.bind(this) }>
                    <input type="text"
                           value={ this.state.name }
                           onChange={ this.onNameChange.bind(this) }
                           placeholder="Location Name"
                           ref={ (input) => { this.nameInput = input; }}
                    />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}