import React from 'react'
import { Button } from 'antd';

const FinishAll = (props) => {
    return(
        <React.Fragment>
             <Button type="dashed" onClick={() => props.finishAll()}>{props.children}</Button>
        </React.Fragment>
    )
}

export default React.memo(FinishAll);