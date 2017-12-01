/**
 * Created by chenzhongying on 2017/11/15.
 */
import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory, hashHistory, Location} from 'react-router';
import {
    Gallery,
    GalleryDelete,
    Uploader,
    ButtonArea,
    Button,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
    VCode,
    Agreement,
    Toptips,
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
    Tab,
    TabBody,
    NavBar,
    NavBarItem,
    Article
} from 'react-weui/build/packages';
import weui from 'weui.js';
import '../static/css/advertisementAdd.css'
import {initskip, inittop, validForm,XHR, xhrurl} from '../static/js/common';
import CellMore from '../coustomComponent/more';
import update from 'react-addons-update';
let searchText = ''; //搜索内容
let skip = initskip; //从第几位开始加载


class AdvertisementAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: 'a',
            Id:this.props.params.id,
            form: {      //表单验证
                Description: {
                    valid: true
                },
                Name: {
                    valid: true
                }
            },
            material: { //添加材料临时储存数据用
                Name: '',
                Order:'',
                Type:'',
                Description:'',
                demoFiles:[]
            },
            results:{ //表单提交信息
                Description:'',
                Name:''
            },
            relativeData: { //关联公众号及素材列表
                Gongzhonghaos: [ //初始化公众号
                    {GongzhonghaoId: 7, Name: "硅谷创业者联盟", WeChatId: "svace-org"},
                    {GongzhonghaoId: 5, Name: "魔力伞", WeChatId: "魔力伞", Description: "魔力伞公众号，提供天气解决方案"}
                ],
                materials: [ //初始化素材
                    {Name: "硅谷创业者联盟"}
                ]
            },
            gallery: false,
            tab: 0,
            Gongzhonghaos: [ //搜索结果公众号

                {GongzhonghaoId: 5, Name: "魔力伞", WeChatId: "魔力伞", Description: "魔力伞公众号，提供天气解决方案"},

                {GongzhonghaoId: 7, Name: "硅谷创业者联盟", WeChatId: "svace-org"},

                {GongzhonghaoId: 8, Name: "硅谷天使会SVCAngel", WeChatId: "SVCAngel"}
            ]

        }
    }

    returnList() { //返回列表按钮
        hashHistory.push('/home/advertisement');
    }

    renderGallery() {
        let _this =  this;
        if (!this.state.gallery) return false;
        let srcs = this.state.material.demoFiles.map(file => file.url);
        console.log(srcs);
        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery.id}
                onClick={e => {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation();
                    this.setState({gallery: false})
                }}
            >

                <GalleryDelete onClick={(e, id) => {
                    this.setState({
                        material:update(_this.state.material,{demoFiles:{$set:this.state.demoFiles.filter((e, i) => i != id)}}),
                        gallery: this.state.material.demoFiles.length <= 1 ? true : false
                    })
                }}/>

            </Gallery>
        )
    };

    handleSearch(text, e) { //搜索结果数据
        e.preventDefault();
        let url = '';
        skip = 0;
        searchText = text;
        if ($.trim(searchText) == '') { //判断搜索内容是否为空，如果为空就显示全部数据
            url = xhrurl + '/odata/Gongzhonghaos?&$skip=' + skip + '&$top=' + inittop
        } else {
            url = xhrurl + '/odata/Gongzhonghaos?$filter=Name eq \'' + searchText + '\'&$skip=' + skip + '&$top=' + inittop
        }
        XHR(this, url,'Gongzhonghaos');
    }

    moreList() { //加载更多
        skip = skip + inittop;
        let url = '';
        if ($.trim(searchText) == '') { //判断搜索内容是否为空，如果为空就显示全部数据
            url = xhrurl + '/odata/Gongzhonghaos?&$skip=' + skip + '&$top=' + inittop
        } else {
            url = xhrurl + '/odata/Gongzhonghaos?$filter=Name eq \'' + searchText + '\'&$skip=' + skip + '&$top=' + inittop
        }
        XHR(this, url, 'Gongzhonghaos','more');
    }

    addItem(name, id, type) { //添加绑定公众号/素材
        const _this = this;
        switch (type) {
            case 'subscription':
                for (let i = 0; i < _this.state.relativeData.Gongzhonghaos.length; i++) {
                    if (id == _this.state.relativeData.Gongzhonghaos[i].GongzhonghaoId) {
                        weui.alert('此公众号已绑定');
                        return;
                    }
                };

                weui.confirm('确定添加' + name + '吗？', {
                    buttons: [{
                        label: '取消',
                        type: 'default',
                        onClick: function () {
                            console.log('no')
                        }
                    }, {
                        label: '确定',
                        type: 'primary',
                        onClick: function () {
                            _this.setState({
                                relativeData: update(_this.state.relativeData, {
                                    Gongzhonghaos: {$push: [{GongzhonghaoId: id, Name: name}]}
                                })
                            })
                        }
                    }]
                });
                break;
            case 'material':
                console.log(this.state.material);
                for(let key in  _this.state.material){
                    if(! _this.state.material.hasOwnProperty(key)) continue;//跳过继承的属性
                    if($.trim(_this.state.material[key]) && this.state.material.demoFiles.length>=1){

                    }else{
                        weui.alert('请填写完整');
                        return;
                    }
                }
                weui.confirm('确定添加' + name + '吗？', {
                    buttons: [{
                        label: '取消',
                        type: 'default',
                        onClick: function () {
                            console.log('no')
                        }
                    }, {
                        label: '确定',
                        type: 'primary',
                        onClick: function () {
                            _this.setState({
                                relativeData: update(_this.state.relativeData, {
                                    materials: {$push: [{Name: _this.state.material.Name}]}
                                }),
                                material:{
                                    Name: '',
                                    Order:'',
                                    Type:'',
                                    Description:'',
                                    demoFiles:[]
                                }
                            });

                        }
                    }]
                });


        }

    }

    removeItem(name, id, type) { //删除关联公众号
        const _this = this;
        weui.confirm('确定删除' + name + '吗？', {
            buttons: [{
                label: '取消',
                type: 'default',
                onClick: function () {
                    console.log('no')
                }
            }, {
                label: '确定',
                type: 'primary',
                onClick: function () {
                    switch (type) {
                        case 'subscription':
                            _this.setState({
                                relativeData: update(_this.state.relativeData, {
                                    Gongzhonghaos: {
                                        $apply: function () {
                                            for (let i = 0; i < _this.state.relativeData.Gongzhonghaos.length; i++) {
                                                if (id == _this.state.relativeData.Gongzhonghaos[i].GongzhonghaoId) {
                                                    _this.state.relativeData.Gongzhonghaos.splice(i, 1)
                                                }
                                            }
                                            return _this.state.relativeData.Gongzhonghaos;
                                        }
                                    }
                                })
                            })
                            break;
                        case 'material':
                            _this.setState({
                                relativeData: update(_this.state.relativeData, {
                                    materials: {
                                        $apply: function () {
                                            for (let i = 0; i < _this.state.relativeData.materials.length; i++) {
                                                if (id == _this.state.relativeData.materials[i].GongzhonghaoId) {
                                                    _this.state.relativeData.materials.splice(i, 1)
                                                }
                                            }
                                            return _this.state.relativeData.materials;
                                        }
                                    }
                                })
                            })
                            break;
                    }


                }
            }]
        });
    }

    handleChange(type, itemName, e) {
        const _this = this;
        switch(type){
            case 'material':
                _this.setState({
                    [type]: update(_this.state[type], {
                        [itemName]: {$set: e.target.value}
                    })
                });
                break;
            case 'subscriptipn':
                _this.setState({
                    [type]: e.target.value
                });
                break;
            case 'results':
                _this.setState({
                    [type]: update(_this.state[type], {
                        [itemName]: {$set: e.target.value}
                    })
                });
        }

    }

    handleSubmit(){ //提交广告
        const _this = this;
        let validMark = true;
        const formData = this.state.results;
        if(this.props.params.id){
            if (validForm(_this,formData,validMark)) { //编辑页面
                weui.confirm('确认提交?', {
                    buttons: [{
                        label: '取消',
                        type: 'default'
                    }, {
                        label: '确定',
                        type: 'primary',
                        onClick: function () {
                            $.ajax({
                                url:'#',
                                type:'POST',
                                data:_this.state.results,
                                complete:function(){
                                    alert('编辑成功');
                                    window.location.reload();
                                }
                            })
                        }
                    }]
                });
            }
        }else{
            if (validForm(_this,formData,validMark)) { //添加页面
                weui.confirm('添加成功', {
                    buttons: [{
                        label: '返回广告列表',
                        type: 'default',
                        onClick: function () {
                            hashHistory.push('/home/advertisement');
                        }
                    }, {
                        label: '继续编辑',
                        type: 'primary',
                        onClick: function () {
                            hashHistory.push('/advertisement/edit/5');
                            location.reload();
                            console.log(_this.props)
                        }
                    }]
                });
            }
        }

    }

    render() {
        return (

            <div>
                {this.renderGallery()}
                <CellsTitle>元素项</CellsTitle>
                <Form>
                    <FormCell warn={!this.state.form.Name.valid}>
                        <CellHeader>
                            <Label>名称</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="" value={this.state.results.Name}
                                   onChange={this.handleChange.bind(this, 'results', 'Name')}/>
                        </CellBody>
                    </FormCell>
                </Form>
                <CellsTitle>描述</CellsTitle>
                <Form>
                    <FormCell warn={!this.state.form.Description.valid}>
                        <CellBody>
                            <TextArea placeholder="不超过50字" rows="3" maxlength="50" value={this.state.results.Description}
                                      onChange={this.handleChange.bind(this, 'results', 'Description')}></TextArea>
                        </CellBody>
                    </FormCell>
                </Form>
                {this.props.params.id?(
                    <div>
                        <CellsTitle className="clearfix">关联公众号</CellsTitle>
                        {this.state.relativeData.Gongzhonghaos.map((item, index) => {
                            return (
                                <MediaBox>
                                    {item.Name}<Button size="small" type="warn" className="pull-right"
                                                       onClick={this.removeItem.bind(this, item.Name, item.GongzhonghaoId, 'subscription')}>删除</Button>
                                </MediaBox>
                            )
                        })}

                        <CellsTitle className="clearfix">相关素材</CellsTitle>
                        {this.state.relativeData.materials.map((item, index) => {
                            return (
                                <MediaBox>
                                    {item.Name}<Button size="small" type="warn" className="pull-right"
                                                       onClick={this.removeItem.bind(this, item.Name, item.GongzhonghaoId, 'material')}>删除</Button>
                                </MediaBox>
                            )
                        })}
                        <Tab>
                            <NavBar>
                                <NavBarItem active={this.state.tab == 0}
                                            onClick={e => this.setState({tab: 0})}>添加绑定公众号</NavBarItem>
                                <NavBarItem active={this.state.tab == 1}
                                            onClick={e => this.setState({tab: 1})}>添加素材</NavBarItem>
                            </NavBar>
                            <TabBody>
                                <div style={{display: this.state.tab == 0 ? null : 'none'}}>
                                    <div>
                                        <SearchBar
                                            onSubmit={this.handleSearch.bind(this)}
                                            placeholder="公众号名称"
                                            lang={{
                                                cancel: 'Cancel'
                                            }}
                                        />

                                        <Panel>
                                            <PanelHeader>
                                                搜索结果
                                            </PanelHeader>
                                            <PanelBody>
                                                {
                                                    this.state.Gongzhonghaos.map((item, index) => {
                                                        return (
                                                            <MediaBox type="appmsg"
                                                                      onClick={this.addItem.bind(this, item.Name, item.GongzhonghaoId, 'subscription')}>
                                                                <MediaBoxBody>
                                                                    {item.Name}
                                                                </MediaBoxBody>
                                                            </MediaBox>
                                                        )
                                                    })
                                                }
                                            </PanelBody>
                                            {this.state.showMore ? (
                                                <PanelFooter onClick={this.moreList.bind(this)} href="javascript:void(0);">
                                                    <CellMore text='加载更多...' more={true}/>
                                                </PanelFooter>
                                            ) : (
                                                <PanelFooter href="javascript:void(0);">
                                                    <CellMore text='无更多...' more={false}/>
                                                </PanelFooter>
                                            )}

                                        </Panel>
                                    </div>
                                </div>
                                <div style={{display: this.state.tab == 1 ? null : 'none'}}>
                                    <div>
                                        <CellsTitle className='clearfix'>
                                            <span className='pull-left'>元素项</span>
                                            <Button size='small' className='pull-right'
                                                    onClick={this.addItem.bind(this, this.state.material.Name, 1, 'material')}>添加素材</Button>
                                        </CellsTitle>
                                        <Form>
                                            <FormCell>
                                                <CellHeader>
                                                    <Label>名称</Label>
                                                </CellHeader>
                                                <CellBody>
                                                    <Input type="tel" placeholder="" value={this.state.material.Name}
                                                           onChange={this.handleChange.bind(this, 'material', 'Name')}/>
                                                </CellBody>
                                            </FormCell>
                                            <FormCell>
                                                <CellHeader>
                                                    <Label>显示顺序</Label>
                                                </CellHeader>
                                                <CellBody>
                                                    <Input type="number" placeholder="" value={this.state.material.Order}
                                                           onChange={this.handleChange.bind(this, 'material', 'Order')}/>
                                                </CellBody>
                                            </FormCell>
                                            <FormCell>
                                                <CellHeader>
                                                    <Label>类型</Label>
                                                </CellHeader>
                                                <CellBody>
                                                    <Input type="text" placeholder="" value={this.state.material.Type}
                                                           onChange={this.handleChange.bind(this, 'material', 'Type')}/>
                                                </CellBody>
                                            </FormCell>
                                        </Form>
                                        <CellsTitle>描述</CellsTitle>
                                        <Form>
                                            <FormCell>
                                                <CellBody>
                                            <TextArea placeholder="不超过50字" rows="3" maxlength="50"
                                                      value={this.state.material.Description}
                                                      onChange={this.handleChange.bind(this, 'material', 'Description')}
                                            ></TextArea>
                                                </CellBody>
                                            </FormCell>
                                        </Form>
                                        <CellsTitle>素材图片</CellsTitle>
                                        <Form>
                                            <Cell>
                                                <CellBody>
                                                    <Uploader
                                                        title="上传图片"
                                                        maxCount = {1}
                                                        files={this.state.material.demoFiles}
                                                        onError={msg => alert(msg)}
                                                        onChange={(file, e) => {
                                                            console.log(file);
                                                            let newFiles = [...this.state.material.demoFiles, {url: file.data}];
                                                            this.setState({
                                                            material:update(this.state.material,{demoFiles:{$set:newFiles}})
                                                            });
                                                        }}
                                                        onFileClick={
                                                            (e, file, i) => {
                                                                console.log('file click', file, i);
                                                                this.setState({
                                                                    gallery: {
                                                                        url: file.url,
                                                                        id: i
                                                                    }
                                                                })
                                                            }
                                                        }
                                                        lang={{
                                                            maxError: maxCount => `最多传 ${maxCount} 张图片`
                                                        }}
                                                    />
                                                </CellBody>
                                            </Cell>
                                        </Form>

                                    </div>
                                </div>

                            </TabBody>
                        </Tab>
                    </div>
                ):('')}

                <ButtonArea direction="horizontal">
                    <Button onClick={this.handleSubmit.bind(this)}>提交</Button>

                    <Button type="default" onClick={this.returnList.bind(this)}>返回广告列表</Button>
                </ButtonArea>
            </div>
        )
    }
}

export default AdvertisementAdd;