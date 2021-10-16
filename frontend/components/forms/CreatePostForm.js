import {Avatar} from "antd";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(()=> import("react-quill"), {ssr: false});
import "react-quill/dist/quill.snow.css"

const CreatePostForm = ({content, setContent, postSubmit}) =>{

    return (
        <div className="card">
            <div className="card-body pb-3">
                <form className="form-group">
                    <ReactQuill
                        theme="snow"
                        className="form-control"
                        value={content}
                        onChange={(e)=> setContent(e)}
                        placeholder="Write here your moment..."/>
                </form>
            </div>
            <div className="card-footer">
                <button disabled={!content} onClick={postSubmit} className="btn btn-primary btn-sm mt-1">Post</button>
            </div>
        </div>
    )
}

export default CreatePostForm;
