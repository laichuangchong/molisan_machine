import update from 'react-addons-update';
import weui from 'weui.js';
import store from '../../store';
const inittop = 10;//一页显示几条
const location =[];//地域数组
$.ajax({ //获取省市
    url:'./province',
    type:'GET',
    complete:function(data){
        console.log(data);
        const province = JSON.parse(data.responseText).value;
        for(let i=0; i<province.length;i++){
            location.push({value:province[i].ProvinceId,label:province[i].Name});
        }
        console.log(location);
        $.ajax({//获取城市
            url:'./city.json',
            type:'GET',
            complete:function(data){
                const city = JSON.parse(data.responseText).value;
                for(let i=0; i<location.length;i++){
                    location[i].children= [];
                    for(let j=0; j<city.length;j++){

                        if(location[i].value == city[j].ProvinceId){

                            location[i].children.push({label:city[j].Name,value:city[j].CityId});
                        }
                    }

                }
                console.log(location);
                store.dispatch({
                    type:'LOCATIONS',
                    locations:location
                })

            }
        });
    }
});

module.exports = {
    initskip: 0, //翻页初始值
    inittop: inittop, //一页显示几条
    xhrurl: 'http://localhost:80', //ajax 请求域名
    validForm: function (_this, formData, validMark) { // 表单验证函数
        let validData = {}; //临时验证数据结果
        for (let key in formData) {
            if (!formData.hasOwnProperty(key)) continue;
            validData[key] = {};
            if ($.trim(formData[key]) == '' || formData[key].length == 0) {
                validMark = false;
                validData[key].valid = false;
            } else {
                validData[key].valid = true;
            }
        }
        _this.setState({
            form: update(_this.state.form, {$set: validData})
        });
        return validMark;
    },
    XHR: function (obj, url, key, mark) { //请求列表数据
        $.ajax({
            url: url,
            type: 'GET',
            complete: function (response) {
                if (response.status == 200) {
                    const data = response.responseJSON.value;
                    console.log(data.length);
                    if (data.length == inittop) {
                        obj.setState({
                            showMore: true
                        })
                    } else {
                        obj.setState({
                            showMore: false
                        })
                    }
                    switch (mark) {
                        case 'more': //如果是加载更多，追加数据
                            obj.setState({
                                [key]: obj.state[key].concat(data)
                            });
                            break;
                        default: //默认为更新数据
                            obj.setState({
                                [key]: data
                            })
                    }

                } else {
                    weui.alert('数据访问失败');
                }
            }
        });
    }
}