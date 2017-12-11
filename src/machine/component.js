/**
 * Created by chenzhongying on 2017/11/15.
 */
import React from 'react';
import {connect} from 'react-redux';
import weui from 'weui.js';
import {Router, Route, IndexRoute, Link, browserHistory,hashHistory, Location} from 'react-router';
import {
    Flex,
    FlexItem,
    Button,
    SearchBar,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxBody,
    FormCell,
    CellHeader,
    CellBody,
    Input,
    Label
} from 'react-weui/build/packages';
import store from '../store';
import {initskip, inittop, xhrurl, XHR} from '../static/js/common';
class MatchineUi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Province : '',
            City: '',
            results:[]
        }
    }
    componentWillReceiveProps(props){
        console.log(props);
    }
    chooseProvince() {
        const _this = this;
        // 级联picker
        weui.picker(this.props.locations.locations, {
            className: 'custom-classname',
            container: 'body',
            defaultValue: [1, 3],
            onConfirm: function (result) {
                console.log(result);
                _this.setState({
                    Province:result[0].label,
                    City:result[1].label
                })
            },
            id: 'doubleLinePicker'
        });
    }
    handleChange(text, e){
        console.log(text);
    }

    componentDidMount(){
        let _this = this;
        store.dispatch({ //导航状态
            type:'TABBAR',
            tab:'machine'
        });
        $.ajax({ //测试数据
            url:'./machine.json',
            complete:function(response){
                console.log(response);
                const results = JSON.parse(response.responseText).value;
                _this.setState({
                    results:results
                });
            }
        });

    }
    render(){
        return(

            <div>
                <FormCell>
                    <CellHeader>
                        <Label>选择省市</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="text" onClick={this.chooseProvince.bind(this)} value={this.state.Province+' '+this.state.City}/>
                    </CellBody>
                </FormCell>
                <SearchBar
                    //onSubmit={this.handleSearch.bind(this)}
                    // onChange={this.handleChange.bind(this)}
                    placeholder="设备名称"
                    lang={{
                        cancel: 'Cancel'
                    }}
                />

                <Panel>
                    <PanelHeader>
                        <div className="clearfix">
                            <span className='pull-left'>
                                搜索结果
                            </span>
                            <Link to="/machine/add" className="pull-right">
                                <Button  type="primary" size="small" plain>添加设备</Button>
                            </Link>
                        </div>

                    </PanelHeader>
                    <PanelBody>
                        <MediaBox type="appmsg" href='/#/machine/add'>
                            <MediaBoxBody>
                                <Link to={'/machine/edit/5'}>22222</Link>
                            </MediaBoxBody>
                        </MediaBox>
                        {
                            this.state.results.map((item, index) => {
                                return (
                                    <MediaBox type="appmsg">
                                        <MediaBoxBody>
                                            <Link
                                                to={'/machine/edit/' + item.VendingMachineId}>{item.Name}</Link>
                                        </MediaBoxBody>
                                    </MediaBox>
                                )
                            })
                        }
                    </PanelBody>
                </Panel>
            </div>
           
        )
    }
}
function mapStateToProps(state){
    return {
        locations:state.locations
    }
}
const Matchine = connect(
    mapStateToProps
)(MatchineUi);

export default Matchine