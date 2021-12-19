import React, {Component} from 'react'

export default class ItemDescription extends Component {
    render() {
        const {name, description} = this.props;
        return (
            <div>
                <p>{name}</p>
                <p>
                    <i>{description}</i>
                </p>
            </div>
        )
    }
}