import React,{Component} from 'react';
import ReactDataGrid from 'react-data-grid';
import pageContainer from '../../../hoc/PageContainer/PageContainer'
import connection from '../../../connection'



class Search extends Component {
    state ={_rows:null}
    
      rowGetter = (i) => {
        return this.state.rows[i];
      };

      componentDidMount() {
        connection.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            this.setState({_rows : res.data}) ;
        })
      }

    

      render() {
        
        const _columns = [
            { key: 'id', name: 'ID' },
            { key: 'body', name: 'Name' },
            { key: 'title', name: 'Title' } ];
    return ( 
        
        (<ReactDataGrid
        columns={_columns}
        rowGetter={this.rowGetter}
        rowsCount={this._rows?this._rows.length:0}
        minHeight={500} />)) 
    };
}
 
export default pageContainer(Search);