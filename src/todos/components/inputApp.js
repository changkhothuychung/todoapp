import React from 'react'

import { Input } from 'antd';

const { Search } = Input;

export const InputApp = (props) => {
    return (
        <React.Fragment>
            <Search
                placeholder="Enter your work"
                enterButton="Add"
                size="large"
                onSearch={value => props.add(value)}
            />
        </React.Fragment>
    )
}

export default React.memo(InputApp); 