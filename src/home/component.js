/**
 * Created by chenzhongying on 2017/11/15.
 */
import React from 'react'
import {connect} from 'react-redux';
import {Router, Route, Link} from 'react-router';
import {Tab, TabBar, TabBarItem, TabBarIcon, TabBarLabel} from 'react-weui/build/packages';
import advertisingIcon from '../static/img/advertising.png';
import subscriptionIcon from '../static/img/subscription.png';
import machineIcon from '../static/img/machine.png';
import IconButton from '../static/img/icon.png';
import store from '../store';


class HomeUi extends React.Component {
  constructor(props){
      super(props);
  }

    render() {
        const{data}= this.props;
        return (
            <div>
                {this.props.children}
                <Tab>
                    <TabBar>
                        <TabBarItem active={data.tab == 'subscription'}>
                            <Link to={'/home/subscription'}>
                                <TabBarIcon>
                                    <img src={subscriptionIcon} />
                                </TabBarIcon>
                                <TabBarLabel>公众号</TabBarLabel>
                            </Link>
                        </TabBarItem>

                        <TabBarItem active={data.tab == 'advertisement'}>
                            <Link to={'/home/advertisement'}>
                                <TabBarIcon>
                                    <img src={advertisingIcon} />
                                </TabBarIcon>
                                <TabBarLabel>广告</TabBarLabel>
                            </Link>
                        </TabBarItem>
                        <TabBarItem active={data.tab == 'machine'}>
                            <Link to={'/home/machine'}>
                                <TabBarIcon>
                                    <img src={machineIcon} />
                                </TabBarIcon>
                                <TabBarLabel>设备</TabBarLabel>
                            </Link>
                        </TabBarItem>
                    </TabBar>
                </Tab>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        data:state.tabBar
    }
}

const Home = connect(
    mapStateToProps
)(HomeUi);
export default Home;
