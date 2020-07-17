import React from 'react'
import { List, Typography , Checkbox} from 'antd';
import { AiFillDelete } from "react-icons/ai";
const { Text } = Typography;


const ListWork = (props) => {
    console.log(props.work);
    console.log(props.delete);
    console.log(props.finish);
    return (
        <React.Fragment>
            <List
                itemLayout="horizontal"
                dataSource={props.work}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                       
                        avatar={ <Checkbox checked={item.done}  onClick ={() => props.finish(item.id,item.done)} />}
                        title={ !item.done  ? 
                            (<Text  onClick = {() => props.finish(item.id,item.done)}>{item.name}</Text>) 
                            : 
                            (<Text delete onClick={() => props.finish(item.id,item.done)}>{item.name}</Text>)}
                    />


                    <div>
                        <AiFillDelete onClick={() => props.delete(item.id)} />
                    </div>
                </List.Item >
                )}
            />
        </React.Fragment>
    ) 
}

export default ListWork;