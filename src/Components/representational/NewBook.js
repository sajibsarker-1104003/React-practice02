import React,{Component,createRef} from 'react';

class NewBook extends Component{
    constructor(props){
        super(props);
        this.bookName=createRef();
        this.writer=createRef();
        this.description=createRef();
        this.handleSubmit=this.handleSubmit.bind(this);
    }
   
    handleSubmit=e=>{
        console.log(this.bookName.current.value);
        console.log(this.writer.current.value);
        console.log(this.description.current.value);
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
            <input type="text" name="bookName" ref={this.bookName}/>
            <br/>
            <label>Writer:</label>
            <br/>
            <input type="text" name="writer" ref={this.writer}/>
            <br/>
            <label>Description:</label>
            <br/>
            <textarea name="description" ref={this.description}/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
);
}

}
    


export default NewBook;