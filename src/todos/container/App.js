import React from 'react'
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {appToDoWork, appToDoDelete, appToDoFinish, appToDoFinishAll, appToDoDeleteAll, appToDoUnfinishedAll} from '../action/index';
import InputApp from '../components/inputApp';
import ListWork from '../components/listWork'; 
import {listWorkReselect} from '../reselect/todoReselect';
import DeleteAll from '../components/deleteAll';
import FinishAll from '../components/finishAll';
import UnfinishedAll from '../components/unfinishedAll';
import './App.css';
class App extends React.PureComponent{
    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col span={12} offset={6}>
                        <InputApp
                            add={this.props.add}
                        />
                        <div className = "action"> 
                            <FinishAll finishAll={this.props.finishAll}>Finish All</FinishAll>
                            <DeleteAll deleteAll = {this.props.deleteAll}>Delete All</DeleteAll>
                            <UnfinishedAll unfinishedAll = {this.props.unfinishedAll}>Unfinish All</UnfinishedAll>
                        </div>
                        <ListWork work={this.props.listWork} delete={this.props.delete} finish={this.props.finish}/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    listWork: listWorkReselect
    
});



const mapDispatchToProps = dispatch => ({
    add: nameWork => dispatch(appToDoWork(nameWork)),
    delete: id => dispatch(appToDoDelete(id)),
    finish: (id,done) => dispatch(appToDoFinish(id,done)) , 
    finishAll: () => dispatch(appToDoFinishAll()), 
    deleteAll: () => dispatch(appToDoDeleteAll()),
    unfinishedAll: () => dispatch(appToDoUnfinishedAll()), 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);