/**
 * Created by chenzhongying on 2017/11/15.
 */
import React from 'react';
import {connect} from 'react-redux';
import weui from 'weui.js';
import {Link, Location} from 'react-router';
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
import {initskip, inittop, xhrurl, XHR} from '../static/js/common';
import CellMore from '../coustomComponent/more';

let searchText = ''; //搜索内容
let skip = initskip; //从第几位开始加载


class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            results: [],
            showMore: false, //是否显示加载更多
            loading: false
        }
    }

    componentDidMount() {
        let _this = this;
        store.dispatch({ //初始化导航状态
            type: 'TABBAR',
            tab: 'goods'
        });
        const url = xhrurl + '/odata/Items?&$skip=' + skip + '&$top=' + inittop;
        XHR(this, url,'results');
        $.ajax({ //测试专用
            url:'./item.json',
            complete:function(response){
                console.log(response.responseJSON.value);
                _this.setState({
                    results:response.responseJSON.value
                })
            }
        })
    }

    /*handleChange(text, e) {
     let _this = this;
     let url = '';
     if (text == '') {
     url = xhrurl+'/odata/Gongzhonghaos'
     } else {
     url = xhrurl+'/odata/Gongzhonghaos?$filter=Name eq \'' + text + '\''
     }

     $.ajax({
     url: url,
     type: 'GET',
     complete: function (response) {
     console.log(response);
     if (response.status == 200) {
     const data = response.responseJSON.value;
     _this.setState({
     results: data
     })
     } else {
     // weui.alert('数据访问失败');
     }
     }
     })
     }*/
    handleSearch(text, e) { //搜索结果数据
        e.preventDefault();
        let url = '';
        skip = 0;
        searchText = text;
        if ($.trim(searchText) == '') { //判断搜索内容是否为空，如果为空就显示全部数据
            url = xhrurl + '/odata/Items?&$skip=' + skip + '&$top=' + inittop
        } else {
            url = xhrurl + '/odata/Items?$filter=Name eq \'' + searchText + '\'&$skip=' + skip + '&$top=' + inittop
        }
        XHR(this, url,'results');
    }

    moreList() { //加载更多
        skip = skip + inittop;
        let url = '';
        if ($.trim(searchText) == '') { //判断搜索内容是否为空，如果为空就显示全部数据
            url = xhrurl + '/odata/Items?&$skip=' + skip + '&$top=' + inittop
        } else {
            url = xhrurl + '/odata/Items?$filter=Name eq \'' + searchText + '\'&$skip=' + skip + '&$top=' + inittop
        }
        XHR(this, url, 'results','more');
    }

    render() {
        return (
            <div>
                <SearchBar
                    // onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleSearch.bind(this)}
                    placeholder="商品名称"
                    lang={{
                        cancel: 'Cancel'
                    }}
                />

                <Panel>
                    <PanelHeader>
                        <div className='clearfix'>
                            <span class="pull-left">
                                搜索结果
                            </span>
                            <Link className='pull-right' to="/goods/add">
                                <Button type="primary"
                                        size="small"
                                        plain>添加商品</Button>
                            </Link>
                        </div>


                    </PanelHeader>
                    <PanelBody>
                        {
                            this.state.results.map((item, index) => {
                                return (
                                    <MediaBox type="appmsg">
                                        <MediaBoxBody>
                                            <Link
                                                to={'/goods/edit/' + item.ItemId}>{item.Name}</Link>
                                        </MediaBoxBody>
                                    </MediaBox>
                                )
                            })
                        }
                    </PanelBody>
                    {this.state.showMore ? (
                        <PanelFooter onClick={this.moreList.bind(this)}>
                            {this.state.loading ? (
                                <LoadMore loading>Loading</LoadMore>
                            ) : (
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

export default Subscription;