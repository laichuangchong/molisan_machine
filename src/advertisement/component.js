/**
 * Created by chenzhongying on 2017/11/15.
 */
import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory,hashHistory, Location} from 'react-router';
import {connect} from 'react-redux';
import {
    //main component
    SearchBar,
    //for display data
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    Cell,
    CellBody,
    CellFooter,
    Button,
    LoadMore
} from 'react-weui/build/packages';
import store from '../store';
import CellMore from '../coustomComponent/more';
import {initskip, inittop, xhrurl, XHR} from '../static/js/common';

let searchText = ''; //搜索内容
let skip = initskip; //从第几位开始加载
class Advertisement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            results: [],
            loading:true
        }
    }
    componentDidMount(){
        store.dispatch({
            type:'TABBAR',
            tab:'advertisement'
        });
        const url = xhrurl + '/odata/AdvContents?&$skip=' + skip + '&$top=' + inittop;
        XHR(this, url,'results');
    }
    handleSearch(text, e) { //搜索结果数据
        e.preventDefault();
        let url = '';
        skip = 0;
        searchText = text;
        if ($.trim(searchText) == '') { //判断搜索内容是否为空，如果为空就显示全部数据
            url = xhrurl + '/odata/AdvContents?&$skip=' + skip + '&$top=' + inittop
        } else {
            url = xhrurl + '/odata/AdvContents?$filter=Name eq \'' + searchText + '\'&$skip=' + skip + '&$top=' + inittop
        }
        XHR(this, url,'results');
    }
    moreList() { //加载更多
        skip = skip + inittop;
        let url = '';
        if ($.trim(searchText) == '') { //判断搜索内容是否为空，如果为空就显示全部数据
            url = xhrurl + '/odata/AdvContents?&$skip=' + skip + '&$top=' + inittop
        } else {
            url = xhrurl + '/odata/AdvContents?$filter=Name eq \'' + searchText + '\'&$skip=' + skip + '&$top=' + inittop
        }
        XHR(this, url, 'results','more');
    }
    render(){
        return(
            <div>
                <SearchBar
                    onSubmit={this.handleSearch.bind(this)}
                    placeholder="广告名称"
                    lang={{
                        cancel: 'Cancel'
                    }}
                />

                <Panel>
                    <PanelHeader>
                        <div className='clearfix'>
                            <span className='pull-left'>
                           搜索结果
                        </span>
                            <Link to="/advertisement/add" className='pull-right'>
                                <Button type="primary" size="small" plain>添加广告</Button>
                            </Link>
                        </div>

                    </PanelHeader>
                    <PanelBody>
                        <MediaBox type="appmsg" >
                            <MediaBoxBody>
                                <Link to={'/advertisement/edit/5'}>22222</Link>
                            </MediaBoxBody>
                        </MediaBox>
                        {
                            this.state.results.map((item, index) => {
                                return (
                                    <MediaBox type="appmsg">
                                        <MediaBoxBody>
                                            <Link
                                                to={'/advertisement/edit/' + item.AdvContentId}>{item.Name}</Link>
                                        </MediaBoxBody>
                                    </MediaBox>
                                )
                            })
                        }
                    </PanelBody>
                    {this.state.showMore ? (
                        <PanelFooter onClick={this.moreList.bind(this)}>
                            {this.state.loading?(
                                <div>
                                    <LoadMore loading>Loading</LoadMore>
                                </div>
                            ):(
                                <CellMore text='加载更多...' more={true}/>
                            )}


                        </PanelFooter>
                    ) : (
                        <PanelFooter>

                            <CellMore text='无更多...' more={false}/>

                        </PanelFooter>
                    )}
                </Panel>
            </div>
        );
    }
}

export default Advertisement;