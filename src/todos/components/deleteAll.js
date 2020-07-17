import React from 'react'
import { Button } from 'antd';

const DeleteAll = (props) => {
    return(
        <React.Fragment>
             <Button type="dashed" onClick = {() => props.deleteAll()}>{props.children}</Button>
        </React.Fragment>
    )
}

export default React.memo(DeleteAll);