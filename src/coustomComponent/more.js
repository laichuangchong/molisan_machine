import React from 'react';
import {
    Cell,
    CellBody,
    CellFooter,
} from 'react-weui/build/packages';
 class CellMore extends React.Component {
     constructor(props){
         super(props);
     }
     render(){
         return (
             <Cell access link>
                 <CellBody>{this.props.text}</CellBody>
                 {this.props.more?(
                     <CellFooter/>
                 ):('')}

             </Cell>
         )
     }
 }

export default CellMore;