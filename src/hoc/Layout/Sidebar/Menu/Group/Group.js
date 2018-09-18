import React from 'react';
import Item from '../Item/Item';
import {Link} from 'react-router-dom'


const group = (props) => {
    return (
        <li  className={[props.options.active?"active":"","treeview"].join(' ')}>
            <a href={props.options.route}>
                <i className={props.options.icon}></i> 
                <span>{props.options.caption}</span>
                <span className="pull-right-container">
                    {
                        props.options.labels!=null?
                        props.options.labels.map((label) => {
                        return (<span key={label.key} className={["label", label.class, "pull-right"].join(' ')}>{label.caption}</span>)}):
                        props.options.items?<i className="fa fa-angle-left pull-right"></i>:null
                    }
                </span>
            </a>
            {
                props.options.items?
                (<ul className="treeview-menu">
                {
                    props.options.items.map((item) => {
                        return <Item key={item.key} options={item}></Item>
                    })
                }
                </ul>):null
            }
        </li>
    );
}
 
export default group;