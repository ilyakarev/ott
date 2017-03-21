import React, { Component, PropTypes } from 'react'
import Item from './Item'

export default class ListItems extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        let { items, filterName } = this.props;
        if(filterName !== ''){
            items = items.filter(item=>
               item.carrier === filterName
            );
        }

        return (
            <div className="list--flights">
                {items.map(item =>
                    <Item key={item.id} item={item}/>
                )}
            </div>
        )
    }
}
