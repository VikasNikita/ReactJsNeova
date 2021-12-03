import React, { Component } from 'react';

export default class FragmentSample extends Component {
    myList=[1,2,3,4];
    render() {
        return this.myList.map((ListItem,index) => {
            return <React.Fragment key={index}>{ListItem}</React.Fragment>;
        });
        
    }
}

