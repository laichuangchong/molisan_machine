/**
 * Created by chenzhongying on 2017/11/16.
 */

import React from 'react';
import {connect} from 'react-redux';

import {Router, Route, IndexRoute, Link, browserHistory, hashHistory, Location} from 'react-router';
import {
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
    Grids,
    ActionSheet,
    Cells,
    SearchBar,
    Panel,
    PanelHeader,
    PanelBody,
    CityPicker,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} from 'react-weui/build/packages';
import update from 'react-addons-update';
import weui from 'weui.js';
import '../static/css/machine_add.css'
import {initskip, inittop, xhrurl, XHR,validForm} from '../static/js/common';
let searchText = ''; //搜索内容
let skip = initskip; //从第几位开始加载
let locations = [];//省市数据

const resetGoodsFn = function(Level,Channel,obj){ //定义重置货架函数
    let testobj = [];
    const vendId = obj.props.params.id;
    for(let i=0; i<Level;i++){
        for(let j=0; j<Channel; j++){
            let objItem = {
                level:i+1,
                Channel:j+1,
                VendingMachineId : vendId
            };
            testobj.push(objItem);
        }
    }
    console.log(testobj);
    $.ajax({
        url:xhrurl+'/odata/MachineCapacities?$filter=VendingMachineId eq '+vendId,
        type:'POST',
        data:testobj,
        complete:function(response){
            console.log(response);
            obj.setState({
                MachineCapacities:response
            })
        }
    })

};

class MachineAddUi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results:{}, //设备信息
            MachineCapacities: [], //机器库存
            goods:[],//商品列表
            form: {      //表单验证
                Description: {
                    valid: true
                },
                Name: {
                    valid: true
                },
                ProvinceId: {
                    valid: true
                },
                CityId: {
                    valid: true
                },
                Address: {
                    valid: true
                }
            },
            relativeData: { //关联公众号及素材列表
                Gongzhonghaos: [ //初始化公众号
                    {GongzhonghaoId: 7, Name: "硅谷创业者联盟", WeChatId: "svace-org"},
                    {GongzhonghaoId: 5, Name: "魔力伞", WeChatId: "魔力伞", Description: "魔力伞公众号，提供天气解决方案"}
                ]
            },
            Gongzhonghaos: [ //搜索结果公众号

                {GongzhonghaoId: 5, Name: "魔力伞", WeChatId: "魔力伞", Description: "魔力伞公众号，提供天气解决方案"},

                {GongzhonghaoId: 7, Name: "硅谷创业者联盟", WeChatId: "svace-org"},

                {GongzhonghaoId: 8, Name: "硅谷天使会SVCAngel", WeChatId: "SVCAngel"}
            ],
            Province:'',
            City:'',
            mask: false,
            showGoods: false,
            showLeveLChannel:false,
            goodItem: false,
            subscriptionItem: false,
            subscriptionName: '公众号1',
            city_show: false,
            city_value: '',
            Level: '',
            Channel: '',
            editGoodItemData:{},//修改物品信息弹出框临时数据
        }
    }

    hide() {
        this.setState({
            picker_show: false,
            city_show: false
        })
    }

    componentDidMount() {
        let _this = this;
        console.log(this.props.params.id);
    }

    addItem(name, id, type) { //添加绑定公众号
        const _this = this;
        switch (type) {
            case 'subscription':
                for (let i = 0; i < _this.state.relativeData.Gongzhonghaos.length; i++) {
                    if (id == _this.state.relativeData.Gongzhonghaos[i].GongzhonghaoId) {
                        weui.alert('此公众号已绑定');
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
                                    Gongzhonghaos: {$push: [{GongzhonghaoId: id, Name: name}]}
                                })
                            })
                        }
                    }]
                });
                break;

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
    } //删除关联公众号

    showGoodsItem(ChannelCapacity,RemainCount,name,Level,Channel,ItemId,MachineCapacityId) {
        this.setState({
            mask: true,
            goodItem: true,
            editGoodItemData:{
                ChannelCapacity: ChannelCapacity,
                RemainCount:RemainCount,
                name:name,
                Level:Level,
                Channel:Channel,
                ItemId:ItemId,
                MachineCapacityId:MachineCapacityId
            }
        })
    }

    handleChange(arg1,arg2,arg3) { //监听输入变化
        let _this = this;
        console.log(arg3);
        switch (arguments.length) {
            case 2:
                _this.setState({
                    [arg1]: arg2.target.value
                });
                break;
            case 3:
                _this.setState({
                    [arg1]: update(_this.state[arg1], {
                        [arg2]: {$set: arg3.target.value}
                    })
                });
                break;
        }
        console.log(arguments.length);

    }

    chooseProvince = () => { //省市选择
         let _this = this;
        // 级联picker
        weui.picker(this.props.locations.locations, {
            className: 'custom-classname',
            container: 'body',
            defaultValue: [_this.state.results.ProviceId, _this.state.results.CityId],
            onConfirm: function (result) {
                console.log(result);
                _this.setState({
                    Province:result[0].label,
                    City:result[1].label,
                    results:update(_this.state.results,{
                        ProvinceId:{$set:result[0].value},
                        CityId:{$set:result[1].value}
                    })
                })
            },
            id: 'doubleLinePicker'
        });
    }; //选择城市


    returnList() { //返回按钮
        hashHistory.push('/home/machine');
    }


    handleSubmit() { //提交表单
        const formData = this.state.results;
        let _this = this;
        let validMark = true;
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
                        label: '返回设备列表',
                        type: 'default',
                        onClick: function () {
                            hashHistory.push('/home/machine');
                        }
                    }, {
                        label: '继续编辑',
                        type: 'primary',
                        onClick: function () {
                            hashHistory.push('/machine/edit/5');
                            location.reload();
                        }
                    }]
                });
            }
        }
    }
    editGoodItem(){ //修改商品弹出框确定修改
        let _this = this;
        console.log(this.state.editGoodItemData);
        const {ChannelCapacity,RemainCount,name,Level,Channel,ItemId,MachineCapacityId} = this.state.editGoodItemData;
        this.setState({
            mask: false,
            goodItem: false,
        });
        console.log(_this.state.editGoodItemData);
        $.ajax({
            url:xhrurl+'/odata/MachineCapacities('+MachineCapacityId+')',
            type:'POST',
            data:_this.state.editGoodItemData,
            complete:function(response){
                console.log(response);
            }
        })

    }
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
    };
    resetGoods(Level,Channel){ //重制设备货架
        const _this  = this;

        weui.confirm('确定后所有商品数据将清空，务必确认排数和列数填写正确', {
            buttons: [{
                label: '取消',
                type: 'default',
                onClick: function () {
                    console.log('取消');
                }
            }, {
                label: '确定',
                type: 'primary',
                onClick: function () {
                    _this.setState({
                        MachineCapacities:[]
                    });
                    resetGoodsFn(Level,Channel,_this);
                }
            }]
        });


    }
    setLevelChannel(){ //重制设备货架
        const _this  = this;

        _this.setState({
            showLeveLChannel:true,
        })

    }
    componentWillReceiveProps(nextProps){
        let _this  = this;
        if(nextProps.locations.locations.length != 0){  //获取省市列表
            locations = nextProps.locations.locations;
            console.log(locations);
            console.log(_this.state.results.ProviceId);
        }
        if(this.props.params.id) { //如果是编辑页，先获取初始值
            $.ajax({ //获取机器详情 '/odata/VendingMachines?$filter=VendingMachineId eq 1'
                url:'/odata/VendingMachines?$filter=VendingMachineId eq 1',
                complete:function(response){
                    console.log(response);
                    _this.setState({
                        results:{
                            "VendingMachineId": 1,
                            "MacAddress": "1C:CA:E3:37:02:39",
                            "Name": "上海总部01",
                            "Description": "上海总部测试机器01",
                            "Longitude": "10000.20",
                            "Latitude": "10002.59",
                            "DistrictId": 0,
                            "CityId": 230100,
                            "ProviceId": 230000,
                            "Address": "上海市徐汇区石龙路567-4临",
                            "MachineType": 1,
                            "IsEnable": 1,
                        }
                    });
                    for(var i=0; i<locations.length;i++){ //初始化省市
                        if(locations[i].value == _this.state.results.ProviceId){
                            _this.setState({
                                Province:locations[i].label
                            })
                            for(var j=0;j<locations[i].children.length;j++){
                                if(locations[i].children[j].value == _this.state.results.CityId){
                                    _this.setState({
                                        City:locations[i].children[j].label
                                    })
                                }
                            }
                        }
                    }
                }

            })
            $.ajax({
                url:"./item.json",
                complete:function(response){
                    console.log(response.responseJSON.value);
                    const items = response.responseJSON.value; //获取商品名称、价格、图片
                    let goods = [] ;
                    for(let i=0; i<items.length; i++){
                        goods[i] = {}
                        goods[i].value = items[i].ItemId;
                        goods[i].label = items[i].Name;
                    }
                    console.log(goods);
                    _this.setState({
                        goods:goods
                    });
                    $.ajax({
                        //'/odata/MachineCapacities?$filter=VendingMachineId%20eq%202'
                        url:'./goods.json',
                        complete:function(response){
                            console.log(response.responseJSON.value);
                            let data = response.responseJSON.value;
                            for(let i=0; i<data.length; i++){
                                for(let j=0; j<items.length; j++){
                                    if(data[i].ItemId == items[j].ItemId){
                                        data[i].Name = items[j].Name;
                                    }
                                }
                            }
                            console.log(data);
                            _this.setState({
                                MachineCapacities:data
                            })
                        }
                    })
                }
            })
        }
    }
    render() {
        return (
            <div>
                <CellsTitle>元素项</CellsTitle>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>机器名称</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="" name="Name" onChange={this.handleChange.bind(this,'results','Name')} value={this.state.results.Name} />
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>省市</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" onClick={this.chooseProvince} value={this.state.Province+' '+this.state.City} />
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>详细地址</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="" name="Address" onChange={this.handleChange.bind(this,'results','Address')} value={this.state.results.Address}  />
                        </CellBody>
                    </FormCell>
                </Form>
                {
                    this.props.params.id ? (
                        <div>
                            <CellsTitle className="clearfix">货架设置
                                <Button
                                    className="pull-right"
                                    plain size="small"
                                    onClick= {this.resetGoods.bind(this,this.state.Level, this.state.Channel)}
                                >确定</Button>
                                <Button
                                    className="pull-right"
                                    plain size="small"
                                    onClick= {this.setLevelChannel.bind(this)}
                                >重置</Button>

                            </CellsTitle>
                            {this.state.showLeveLChannel?(
                                <Form>
                                    <FormCell>
                                        <CellHeader>
                                            <Label>排</Label>
                                        </CellHeader>
                                        <CellBody>
                                            <Input type="number" placeholder="" name="name" max="20" value={this.state.Level}
                                                   onChange={this.handleChange.bind(this, 'Level')}/>
                                        </CellBody>
                                    </FormCell>
                                    <FormCell>
                                        <CellHeader>
                                            <Label>列</Label>
                                        </CellHeader>
                                        <CellBody>
                                            <Input type="number" placeholder="" name="name" max="20" value={this.state.Channel}
                                                   onChange={this.handleChange.bind(this, 'Channel')}
                                            />
                                        </CellBody>
                                    </FormCell>
                                </Form>
                            ):('')}

                            <CellsTitle>货架展示</CellsTitle>
                            <Form>
                                <FormCell>
                                    <CellBody>
                                        <Grids>
                                            {
                                                this.state.MachineCapacities.map((item,index)=>(

                                                    <div className='weui-grid' onClick={this.showGoodsItem.bind(this, item.ChannelCapacity, item.RemainCount,item.Name,item.Level,item.Channel,item.ItemId,item.MachineCapacityId)} key={index}>
                                                        <span>排：{item.Level}</span>
                                                        <span> 列：{item.Channel}</span> <br/>
                                                        <span>库存：{item.RemainCount}/{item.ChannelCapacity}</span>
                                                        <p className="weui-grid__label">商品：{item.Name}</p>
                                                    </div>

                                                ))
                                            }
                                        </Grids>

                                    </CellBody>
                                </FormCell>
                            </Form>
                        </div>

                    ):(
                        ''
                    )
                }


                <CellsTitle>描述</CellsTitle>
                <Form>
                    <FormCell warn={!this.state.form.Description.valid}>
                        <CellBody>
                            <TextArea placeholder="不超过200字" rows="3" maxlength="200" value={this.state.results.Description} onChange={this.handleChange.bind(this,'results','Description')}></TextArea>
                        </CellBody>
                    </FormCell>
                </Form>
                {this.props.params.id ? (
                    <div>
                        <CellsTitle className="clearfix">关联公众号
                            <Button size="small" plain className="pull-right"
                                    onClick={() => {
                                        this.setState({
                                            subscriptionItem: !this.state.subscriptionItem
                                        })
                                    }}
                            >添加公众号</Button>
                        </CellsTitle>
                        {this.state.relativeData.Gongzhonghaos.map((item, index) => {
                            return (
                                <MediaBox>
                                    {item.Name}<Button size="small" type="warn" className="pull-right"
                                                       onClick={this.removeItem.bind(this, item.Name, item.GongzhonghaoId, 'subscription')}>删除</Button>
                                </MediaBox>
                            )
                        })}

                        {this.state.subscriptionItem ? (
                            <div>
                                <SearchBar
                                    onSubmit={this.handleSearch.bind(this)}
                                    placeholder="公众号名称"
                                    lang={{
                                        cancel: 'Cancel'
                                    }}
                                />

                                <Panel>
                                    <PanelHeader className="clearfix">
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
                                </Panel>
                            </div>
                        ) : ('')}

                    </div>
                ) : ('')}

                <ButtonArea direction="horizontal">
                    <Button onClick={this.handleSubmit.bind(this)}>提交</Button>
                    <Button type="default" onClick={this.returnList.bind(this)}>返回设备列表</Button>
                </ButtonArea>
                <ActionSheet
                    show={this.state.mask}
                    type="android"
                    onRequestClose={e => this.setState({mask: false, goodItem: false})}
                />
                { //添加货物弹窗
                    this.state.goodItem ? (
                        <div id="goodItem">
                            <CellsTitle>货单商品</CellsTitle>
                            <Form>
                                <FormCell>
                                    <CellHeader>
                                        <Label>容量</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="number" placeholder=""  max="20"
                                               value={this.state.editGoodItemData.ChannelCapacity}
                                               onChange={this.handleChange.bind(this, 'editGoodItemData','ChannelCapacity')}/>
                                    </CellBody>
                                </FormCell>
                                <FormCell>
                                    <CellHeader>
                                        <Label>当前库存</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="number" placeholder=""  max="20"
                                               value={this.state.editGoodItemData.RemainCount}
                                               onChange={this.handleChange.bind(this, 'editGoodItemData','RemainCount')}
                                        />
                                    </CellBody>
                                </FormCell>
                                <FormCell select selectPos="after">
                                    <CellHeader>
                                        <Label>名称</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Select data={this.state.goods} onChange={this.handleChange.bind(this,'editGoodItemData','Name')}/>
                                    </CellBody>
                                </FormCell>
                                <FormCell>
                                    <Button size="small" className="pull-left" onClick={this.editGoodItem.bind(this)}>确定</Button>
                                    <Button size="small" type="default" className="pull-right"
                                            onClick={() => {
                                                this.setState({mask: false, goodItem: false})
                                            }}>取消</Button>
                                </FormCell>
                            </Form>
                        </div>) : ("")
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        locations:state.locations
    }
}
const MachineAdd = connect(
    mapStateToProps
)(MachineAddUi);
export default MachineAdd;