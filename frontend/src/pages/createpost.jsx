import React from "react";

const CreatePost=()=>{
    return (
        <section class="create">
            <h1>createpost</h1>
            <form >
                <input type="file" name="image" accept="image/*">
                </input>
                <input type="text" name="caption" placeholder="enter caption" required/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default CreatePost