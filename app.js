let textArea = document.getElementById('text-area');
const postBtn = document.getElementById('post-btn'); 
const postContainer = document.getElementById('post-container'); 

const postData = () => {
    let data = textArea.value;
    postContainer.innerText = data;
}

postBtn.addEventListener('click', () => {
    postData();
});