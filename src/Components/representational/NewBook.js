import React,{Component} from 'react';

class NewBook extends Component{
    constructor(props){
        super(props);
        this.state={
            bookName:"",
            writer:"",
            description:""
        }
    }
    handleInputChange=e=>{
        console.log(e.target);
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            [name]:value
        })
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    render() {
        //console.log(props);
return (
    <div>
        <h1>New Book Entry</h1>
        <form>
            <label>BookName:</label>
            <br/>
            <input type="text" name="bookName" value={this.state.bookName} onChange={e=>this.handleInputChange(e)}/>
            <br/>
            <label>Writer:</label>
            <br/>
            <input type="text" name="writer" value={this.state.writer} onChange={e=>this.handleInputChange(e)}/>
            <br/>
            <label>Description:</label>
            <br/>
            <textarea name="description" value={this.state.description} onChange={e=>this.handleInputChange(e)}/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
);
}

}
    


export default NewBook;