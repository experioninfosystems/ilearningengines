import React from 'react';
import Header from '../../components/UI/Header/Header';
import Aux from '../../hoc/Auxi/Auxi'
import AppSettings from '../../..//src/AppSettings.json'

const pageContainer = (Page,caption,description) => {
    return (props) => {
        const AppSttings = AppSettings.layout.Content.header;
        return (
            <Aux>
                {AppSttings.required?
                (<Header header={caption} description ={description} options = {AppSttings} ></Header>):null}
    
                <section className="content container-fluid">
                    <Page {...props}/>
                    
                </section>
            </Aux>
        )
    }
}


        

 
export default pageContainer;