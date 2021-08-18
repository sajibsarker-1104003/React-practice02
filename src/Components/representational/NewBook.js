import React,{Component} from 'react';

class NewBook extends Component{
    constructor(props){
        super(props);
        this.state={
            bookName:"",
            writer:"",
            description:""
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInputChange=e=>{
        console.log(e.target);
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            [name]:value
        })
    }
    handleSubmit=e=>{
        console.log(this.state);
        e.preventDefault();
        
    }
    
    render() {
        //console.log(props);
return (
    <div>
        <h1>New Book Entry</h1>
        <form onSubmit={this.handleSubmit}>
            <label>BookName:</label>
            <br/>
            <input type="text" name="bookName" value={this.state.bookName} onChange={this.handleInputChange}/>
            <br/>
            <label>Writer:</label>
            <br/>
            <input type="text" name="writer" value={this.state.writer} onChange={this.handleInputChange}/>
            <br/>
            <label>Description:</label>
            <br/>
            <textarea name="description" value={this.state.description} onChange={this.handleInputChange}/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
);
}

}
    


export default NewBook;