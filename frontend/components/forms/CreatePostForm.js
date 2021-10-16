import {Avatar} from "antd";

const CreatePostForm = ({content, setContent, postSubmit}) =>{

    return (
        <div className="card">
            <div className="card-body pb-3">
                <form className="form-group">
                    <textarea
                        className="form-control"
                        value={content}
                        onChange={(e)=> setContent(e.target.value)}
                        placeholder="Write here your moment..."></textarea>
                </form>
            </div>
            <div className="card-footer">
                <button onClick={postSubmit} className="btn btn-primary btn-sm mt-1">Post</button>
            </div>
        </div>
    )
}

export default CreatePostForm;
