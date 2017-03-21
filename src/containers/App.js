import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Filter from '../components/Filter'
import ListItems from '../components/ListItems'
import * as ItemsActions from '../actions'
import '../../css/style.css'
import '../../css/font-awesome.min.css';

const App = ({items, actions, filter}) => (
    <div className="container">
        <Filter items={items} actions={actions} />
        <ListItems items={items} filterName={filter}/>
    </div>
);

App.propTypes = {
    items: PropTypes.array.isRequired,
    filter: PropTypes.string,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    items: state.items.flights,
    filter: state.items.filterName
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
