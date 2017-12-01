/**
 * Created by chenzhongying on 2017/11/15.
 */
import React from 'react';
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
import {skip,top,rooturl,xhrurl} from '../static/js/common';
class Matchine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Province : '',
            City: ''
        }
    }
    chooseProvince() {
        const _this = this;
        // 级联picker
        weui.picker([
            {
                label: '山东',
                value: 0,
                children: [
                    {
                        label: '济南',
                        value: 1
                    },
                    {
                        label: '威海',
                        value: 2
                    }
                ]
            },
            {
                label: '河北',
                value: 1,
                children: [
                    {
                        label: '石家庄',
                        value: 1,
                        disabled: true // 不可用
                    },
                    {
                        label: '北戴河',
                        value: 2
                    },
                    {
                        label: '廊坊',
                        value: 3
                    }
                ]
            }
        ], {
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
        store.dispatch({
            type:'TABBAR',
            tab:'machine'
        })
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
                    </PanelBody>
                </Panel>
            </div>
           
        )
    }
}
export default Matchine