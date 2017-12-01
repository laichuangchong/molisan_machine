/**
 * Created by chenzhongying on 2017/11/16.
 */

import React from 'react';
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

const resetGoodsFn = function(Level,Channel,obj){ //定义重置货架函数
    let testobj = [];
    for(let i=0; i<Level;i++){
        let objItem = {
            Level:i+1,
            children:[]
        };
        for(let j=0; j<Channel; j++){
            const child = {
                Channel:j+1,
                total:0,
                num:0,
                name:''

            };
            objItem.children.push(child);
        }
        testobj.push(objItem);
    }
    console.log(testobj);
    obj.setState({
        results:update(obj.state.results,{goods:{$set:testobj}})
    })
};

class MachineAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results:{
                Name:'',
                ProvinceId:'',
                CityId:'',
                Description:'',
                Address:'',
                goods: []
            },
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
            goodItem: false,
            subscriptionItem: false,
            subscriptionName: '公众号1',
            city_show: false,
            city_value: '',
            Level: 2,
            Channel: 2,
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
        if(this.props.params.id){ //如果是编辑页，先获取初始值
            const testobj = [ //商品货架初始值
                {
                    Level: 1,
                    children:[
                        {
                            Channel:1,
                            total: 10,
                            num: 1,
                            name: '矿泉水'
                        },
                        {
                            Channel:2,
                            total: 10,
                            num: 2,
                            name: '雪碧'
                        }
                    ]
                },
                {
                    Level: 2,
                    children:[
                        {
                            Channel:1,
                            total: 12,
                            num: 2,
                            name: '可乐'
                        },
                        {
                            Channel:2,
                            total: 12,
                            num: 2,
                            name: '面包'
                        }
                    ]
                }
            ];
            this.setState({
                results:update(_this.state.results,{goods:{$set:testobj}})
            });
        }

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

    showGoodsItem(total,num,name,Level,Channel) {
        this.setState({
            mask: true,
            goodItem: true,
            editGoodItemData:{
                total: total,
                num:num,
                name:name,
                Level:Level,
                Channel:Channel
            }
        })
    }

    handleChange(arg1,arg2,arg3) { //监听输入变化
        let _this = this;
        this.setState({
            [arg1]: update(_this.state[arg1], {
                [arg2]: {$set: arg3.target.value}
            })
        });

        console.log(arguments.length);

    }

    chooseProvince = () => { //省市选择
         let _this = this;
        // 级联picker
        weui.picker([
            {
                label: '飞机票',
                value: 0,
                children: [
                    {
                        label: '经济舱',
                        value: 1
                    },
                    {
                        label: '商务舱',
                        value: 2
                    }
                ]
            },
            {
                label: '火车票',
                value: 1,
                children: [
                    {
                        label: '卧铺',
                        value: 1,
                        disabled: true // 不可用
                    },
                    {
                        label: '坐票',
                        value: 2
                    },
                    {
                        label: '站票',
                        value: 3
                    }
                ]
            },
            {
                label: '汽车票',
                value: 3,
                children: [
                    {
                        label: '快班',
                        value: 1
                    },
                    {
                        label: '普通',
                        value: 2
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
        const {total,num,name,Level,Channel} = this.state.editGoodItemData;
        this.setState({
            results:update(_this.state.results,{goods:{[Level-1]: {children:{[Channel-1]:{name:{$set:name},total:{$set:total},num:{$set:num}}}}}}),
            mask: false,
            goodItem: false
        });

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

        if(Level && Channel){
            if(this.state.results.goods.length){
                weui.confirm('点击确定后所有物品重新输入，确定重置吗？', {
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
                            resetGoodsFn(Level,Channel,_this);
                        }
                    }]
                });
            }else{
                weui.confirm('务必确认排数和列数填写正确，如果重置所有商品将重新填写', {
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
                            resetGoodsFn(Level,Channel,_this);
                        }
                    }]
                });
            }

        }else{
            weui.alert('请输入行和列');
        }

    }
    render() {

        return (
            <div>
                <CellsTitle>元素项</CellsTitle>
                <Form>

                    <FormCell warn={!this.state.form.Name.valid}>
                        <CellHeader>
                            <Label>机器名称</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="" name="Name" onChange={this.handleChange.bind(this,'results','Name')}/>
                        </CellBody>
                    </FormCell>
                    <FormCell warn={!(this.state.form.ProvinceId.valid && this.state.form.CityId.valid)}>
                        <CellHeader>
                            <Label>省市</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" onClick={this.chooseProvince} value={this.state.Province+' '+this.state.City} />
                        </CellBody>
                    </FormCell>
                    <FormCell warn={!this.state.form.Address.valid}>
                        <CellHeader>
                            <Label>详细地址</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="" name="Address" onChange={this.handleChange.bind(this,'results','Address')} />
                        </CellBody>
                    </FormCell>
                </Form>
                <CellsTitle className="clearfix">货架设置
                    <Button
                        className="pull-right"
                        plain size="small"
                        onClick= {this.resetGoods.bind(this,this.state.Level, this.state.Channel)}
                    >设置</Button>
                </CellsTitle>
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
                <div>
                    <CellsTitle>货架展示</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <Grids>
                                    {
                                        this.state.results.goods.map((item,index)=>(
                                            item.children.map((subItem,index) => (
                                                <div className='weui-grid' onClick={this.showGoodsItem.bind(this, subItem.total, subItem.num,subItem.name,item.Level,subItem.Channel)} key={index}>
                                                    <span>排：{item.Level}</span>
                                                    <span> 列：{subItem.Channel}</span> <br/>
                                                    <span>库存：{subItem.num}/{subItem.total}</span>
                                                    <p className="weui-grid__label">商品：{subItem.name}</p>
                                                </div>
                                            ))

                                        ))
                                    }
                                </Grids>

                            </CellBody>
                        </FormCell>
                    </Form>
                </div>
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
                                               value={this.state.editGoodItemData.total}
                                               onChange={this.handleChange.bind(this, 'editGoodItemData','total')}/>
                                    </CellBody>
                                </FormCell>
                                <FormCell>
                                    <CellHeader>
                                        <Label>当前库存</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="number" placeholder=""  max="20"
                                               value={this.state.editGoodItemData.num}
                                               onChange={this.handleChange.bind(this, 'editGoodItemData','num')}
                                        />
                                    </CellBody>
                                </FormCell>
                                <FormCell>
                                    <CellHeader>
                                        <Label>物品名称</Label>
                                    </CellHeader>
                                    <CellBody>
                                        <Input type="text" placeholder=""  max="20"
                                               value={this.state.editGoodItemData.name}
                                               onChange={this.handleChange.bind(this, 'editGoodItemData','name')}
                                        />
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

export default MachineAdd;