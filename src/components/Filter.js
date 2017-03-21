import React, { Component, PropTypes } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class Filter extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };
    setChange(val) {
        const {setFlights, showAll} = this.props.actions;
        if(val!==null){
            if(val.value === 'Все'){
                showAll();
            }else{
                setFlights(val.value);
            }
            this.setState({value: val.value});
        }else{
            showAll();
            this.setState({value: 'Все'});
        }
    }

    state = {value: 'Все'};

    render() {
        const { items  } = this.props;
        const { value  } = this.state;
        const tmpoptions = ["Все"];
        const options = [];
        items.map((item)=>{
            if(tmpoptions.indexOf(item.carrier) === -1){
                tmpoptions.push(item.carrier);
            }
        });
        tmpoptions.map((option)=>{
            options.push({value:option, label: option});
        });
        return (
            <div className="filter">
                <Select
                    name="form-field-name"
                    value={value}
                    options={options}
                    onChange={this.setChange.bind(this)}
                />
            </div>
        )
    }
}
