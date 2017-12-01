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
            results: {
                Description: '',
                Name: '',
                ReplyString: '',
                URL: ''
            },
            qrImg: '', //二维码图片展示地址
            form: {      //表单验证
                Description: {
                    valid: true
                },
                Name: {
                    valid: true
                },
                ReplyString: {
                    valid: true
                },
                URL: {
                    valid: true
                }
            }
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
                            }
                        })
                    }
                }]
            });
        }


    }

    returnList() { //返回列表
        console.log(this.state);
        hashHistory.push('/home/subscription');
    }

    showQrCodeImg() { //展示二维码图片
        console.log(this.state.results);
        this.setState({
            qrImg: this.state.results.URL
        })
    }

    handleChange(type, mark, e) { //监听数据变化
        let _this = this;
        this.setState({
            [type]: update(_this.state.results, {[mark]: {$set: e.target.value}})
        });
        if (mark == 'URL') {
            this.setState({
                qrImg: ''
            });
        }
    }

    componentDidMount() {
        let _this = this;
        if (this.props.params.id) { //如果有ID表明是详情页或者是编辑页
            $.ajax({
                url: 'http://localhost:8080/odata/Gongzhonghaos?$filter=GongzhonghaoId  eq ' + _this.props.params.id,
                type: 'GET',
                complete: function (response) {
                    if (response.status == 200) {
                        let data = response.responseJSON.value;
                        if (data.length > 0) {
                            _this.setState({
                                results: data[0]
                            });
                            _this.refs.qrImg.src = _this.state.results.URL;
                        } else {
                            weui.alert('信息不存在');
                        }

                    } else {

                    }

                }
            })
        }

    }

    render() {
        return (
            <div>
                <CellsTitle>元素项</CellsTitle>
                <Form>
                    <FormCell warn={!this.state.form.Name.valid}>
                        <CellHeader>
                            <Label>名称</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="公众号名称" value={this.state.results.Name}
                                   onChange={this.handleChange.bind(this,'results','Name')}/>
                        </CellBody>
                    </FormCell>
                    <FormCell warn={!this.state.form.URL.valid}>
                        <CellHeader>
                            <Label>二维码地址</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="url" placeholder="http://" value={this.state.results.URL}
                                   onChange={this.handleChange.bind(this,'results','URL')}/>
                        </CellBody>
                        <CellFooter>
                            <Button type="vcode" onClick={this.showQrCodeImg.bind(this)}>展示</Button>
                        </CellFooter>
                    </FormCell>
                </Form>
                <div style={{textAlign:'center'}}>
                    <img width="50%" src={this.state.qrImg} alt="二维码图片展示"/>
                </div>
                <CellsTitle>描述</CellsTitle>
                <Form>
                    <FormCell warn={!this.state.form.Description.valid}>
                        <CellBody>
                            <TextArea placeholder="不超过200字" rows="3" maxlength="200"
                                      value={this.state.results.Description}
                                      onChange={this.handleChange.bind(this,'results','Description')}>
                            </TextArea>
                        </CellBody>
                    </FormCell>
                </Form>
                <CellsTitle>回复信息</CellsTitle>
                <Form>
                    <FormCell  warn={!this.state.form.ReplyString.valid}>
                        <CellBody>
                            <TextArea placeholder="不超过200字" rows="3" maxlength="200"
                                      value={this.state.results.ReplyString}
                                      onChange={this.handleChange.bind(this,'results','ReplyString')}>
                            </TextArea>
                        </CellBody>
                    </FormCell>
                </Form>

                <ButtonArea direction="horizontal">
                    <Button onClick={this.handleSubmit.bind(this)}>{this.props.params.id ? ('编辑') : ('添加')}</Button>
                    <Button type="default" onClick={this.returnList.bind(this)}>返回公众号列表</Button>
                </ButtonArea>

            </div>
        )
    }
}
export default SubscriptionAdd;