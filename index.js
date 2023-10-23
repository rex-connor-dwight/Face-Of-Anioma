document.addEventListener("DOMContentLoaded", function () {
    const openBlog = document.getElementById("openBlog");
    
    openBlog.addEventListener("click", function () {
        // Specify the URL of the new page you want to open
        const blogPage = "blog.html";

        // Open the new page in a new tab or window
        window.open(blogPage, "_blank");
    });
});
