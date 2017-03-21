import React, { Component, PropTypes } from 'react'
import moment from 'moment';
const formatData = (date)=>{
    return moment(new Date(date)).format("DD.MM.YYYY HH:mm");
};
export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    render() {
        const { item  } = this.props;
        return (
            <div className="item--flight">
                <div className="direction">
                    <div className="from">
                        <i className="fa fa-plane"></i>
                        <span>{item.direction.from}</span></div>
                    <div className="to">
                        <i className="fa fa-plane"></i>
                        <span>{item.direction.to}</span></div>
                </div>
                <div className="when">
                    <dl>
                        <dt>Вылет:</dt>
                        <dd>Прибытие:</dd>
                        <dt>{formatData(item.departure)}</dt>
                        <dd>{formatData(item.arrival)}</dd>
                    </dl>
                </div>
                <div className="carrier">
                    <dl>
                        <dt>Перевозчик:</dt>
                        <dd>{item.carrier}</dd>
                    </dl>
                </div>
            </div>
        )
    }
}
