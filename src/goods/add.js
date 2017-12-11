/**
 * Created by chenzhongying on 2017/11/15.
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
    Toptips
} from 'react-weui/build/packages';
import 'weui';
import weui from 'weui.js';
import update from 'react-addons-update';
import {validForm} from '../static/js/common';

class SubscriptionAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {},
        }
    }

    handleSubmit() { //提交表单
        const formData = this.state.results;
        let _this = this;
        let validMark = true;
        if (validForm(_this,formData,validMark)) {
            weui.confirm('确认添加?', {
                buttons: [{
                    label: '取消',
                    type: 'default'
                }, {
                    label: '添加',
                    type: 'primary',
                    onClick: function () {
                        $.ajax({
                            url:'#',
                            type:'POST',
                            data:_this.state.results,
                            complete:function(){
                                alert('添加成功');
                                hashHistory.push('/home/goods');
                            }
                        })
                    }
                }]
            });
        }


    }

    returnList() { //返回列表
        console.log(this.state);
        hashHistory.push('/home/goods');
    }


    handleChange(type, mark, e) { //监听数据变化
        let _this = this;
        this.setState({
            [type]: update(_this.state.results, {[mark]: {$set: e.target.value}})
        });
    }

    componentDidMount() {
        let _this = this;
        if (this.props.params.id) { //如果有ID表明是详情页或者是编辑页
            $.ajax({
                url: '/odata/Items?$filter=ItemId  eq ' + _this.props.params.id,
                type: 'GET',
                complete: function (response) {
                    console.log(response);
                    _this.setState({
                        results:{
                            ItemId: 1,
                            Name: "可乐",
                            Description: "可口可乐",
                            Price: 3.5,
                            BarCode: "623123466789",
                            Picture: "http://promotion.molisan.cn/content/images/items/58bfce03N1e4de372.jpg"
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
                            <Label>名称</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="商品名称" value={this.state.results.Name}
                                   onChange={this.handleChange.bind(this,'results','Name')}/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>价格</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="num" placeholder="数字" value={this.state.results.Price}
                                   onChange={this.handleChange.bind(this,'results','Price')}/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>图片地址</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="url" placeholder="" value={this.state.results.Picture}/>
                        </CellBody>
                    </FormCell>
                </Form>
                <CellsTitle>描述</CellsTitle>
                <Form>
                    <FormCell>
                        <CellBody>
                            <TextArea placeholder="不超过200字" rows="3" maxlength="200" value={this.state.results.Description} onChange={this.handleChange.bind(this,'results','Description')}></TextArea>
                        </CellBody>
                    </FormCell>

                </Form>

                <CellsTitle>图片</CellsTitle>
                <Form>
                    <FormCell>
                        <CellBody>
                            <div>上传图片</div>
                            <div className="weui-uploader__input-box">
                                <img src={this.state.results.Picture} alt="" width="100%"/>
                                <input type="file" ref="imgFile" className="weui-uploader__input" accept="image/*" capture=""
                                       onChange={this.handleChange.bind(this,'imgFile')}
                                />
                            </div>
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea direction="horizontal">
                    <Button onClick={this.handleSubmit.bind(this)}>{this.props.params.id ? ('编辑') : ('添加')}</Button>
                    <Button type="default" onClick={this.returnList.bind(this)}>返回商品列表</Button>
                </ButtonArea>

            </div>
        )
    }
}
export default SubscriptionAdd;