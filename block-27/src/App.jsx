import { useState, useEffect } from 'react';

import './App.css'

function App() {

  const [allPosts, setAllPosts] = useState([]);

const [newPostTitle, setNewPostTitle] = useState("");
const [newPostBody, setNewPostBody] = useState("");

    useEffect(() => {
      async function fetchBlogPosts() {
        try {
          const response = await fetch("https://dummyjson.com/posts");
          const translatedData = await response.json();
          setAllPosts(translatedData.posts);
          console.log(translatedData);

        } catch(error) {
          console.log(error);
        }
      }
      fetchBlogPosts();
    }, []);

  async function sendPostRequest(event) {
    event.preventDefault();
    try {

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <h2>hello world</h2>
        {/* 
        STEP 4: Now we have to render the data onto our site. However, we have to be careful. During the mounting of our site, there will be a brief moment in time where our state will have no blog post data inside of it. We don't want our site to crash when that inevitably happens. So we'll want to write some JavaScript that can do something when there is blog post data in our getter, and something else when there isn't. 

        STEP 4a: If you haven't guessed it yet, we'll use a ternary operator! Our logical condition will be whether there is a truthy or falsy length to our allPosts state getter. If the length is truthy, we want to map through all of the array and render some HTML for each post. Go ahead and just render each blog post's title and blog data. Be sure to set a unique key value to the container element for this HTML. 
        // STEP 4b: If the length is falsy, we can just render a basic "Loading" text in a paragraph, or something similar. 

        Note: This part of writing the truthy condition with the mapping can be tricky, so be sure to refer to my demo code for an example of how you might perform a similar operation for a different dataset. 

        If you've done everything correctly, you should see all of the posts data show up on your site!
        Write your code below:  
        */
        
        allPosts.length ? allPosts.map((post) => {
          return (
            <div key={post.id}> 
              <p>Title: {post.title}</p>
              <p>Blog: {post.body}</p>
            </div>
          )
      }) : <p>Loading</p>
    }
            
        


        <form>
          <input 
            name="title"
            type="text" 
            placeholder="New Title"
            value={newPostTitle}
            onChange={(event) => {
              setNewPostTitle(event.target.value)
            }} />

          <input 
            name="body"
            type="text"
            placeholder="New Body"
            value={newPostBody}
            onChange={(event) => {
              setNewPostBody(event.target.value)
            }} />
            <button type="submit">Post</button>
        </form>

      </div>
    </>
  )
}

export default App