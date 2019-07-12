import React from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   /* handleChange(event) {
        this.setState({
            value: event.target.value
        })
    } */
    handleSubmit(e) {
        this.props.onAddComment(this.textInput.value);
        e.preventDefault();
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Comment:
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Please leave your comment"
                    /*onChange={this.handleChange}
                    value={this.state.value}*/
                     ref={(textInput) => {this.textInput = textInput}}
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <p>
                        We have {this.props.numOfComments} comments
                    </p>
                </div>
            </form>
        )
    }
}

export default CommentBox;