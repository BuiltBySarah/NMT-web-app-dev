export class post {
    constructor (title, content) {
        this.title = title;
        this.content = content;
    }

    addPost() {
        const postContainer = document.getElementById("postContainer");
        const post = document.createElement("div");
        post.className = "post";
        const postTitle = document.createElement("h3");
        postTitle.textContent = this.title;

        const postContent = document.createElement("p");
        postContent.textContent = this.content;

        post.appendChild(postTitle);
        post.appendChild(postContent);
        postContainer.appendChild(post);
    }
}