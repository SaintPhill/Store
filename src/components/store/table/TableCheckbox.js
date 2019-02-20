import React from 'react'

export default class TableCheckbox extends React.PureComponent {
    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.handleCheckbox}/>
                <span/>
            </label>
        )
    }
}