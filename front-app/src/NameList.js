import React, { Component } from 'react';

class NameList extends Component
{
    render() {
        const numberList=[1,2,3,4,5];
        const listItem=numberList.map((number)=><h1 key={number.toString()}>{number}</h1>);
        return(
            <>
                <h1>{listItem}</h1>
            </>
        );
        
    }
}

export default NameList;