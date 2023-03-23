let textArea = document.getElementById("text-area");
const postBtn = document.getElementById("post-btn");
const postContainer = document.getElementById("post-container");
let data = {};

// accept data
let acceptData = () => {
  data["text"] = textArea.value;
  //   console.log(data);
  //   call post data function
  postData();
};

// data validation
let dataValidation = () => {
  let data = textArea.value;
  let warningEle = document.getElementById("warning");
  if (textArea.value === "" || textArea.value.length < 4) {
    warningEle.innerText = "Input field can not be empty!";
    // console.log("Falure");
  } else {
    // console.log("Sucesss");
    acceptData();
    warningEle.innerText = "";
  }
};

// post data on the dom
let postData = () => {
  postContainer.innerHTML += `
  <!-- post content start  -->
  <div class="flex flex-col justify-between items-center w-full px-2 flax-wrap my-4 border py-2 rounded border-gray-400">
    <!-- main data start  -->
    <p class="w-full">${data.text}</p>
    <!-- main data end -->
    <!-- edit and delete btn section start  -->
    <p class="flex w-full text-center mt-2">
      <!-- edit button  -->
      <span class="edit-btn" class="px-2 hover:border-2 border-red-400"
        ><img
          class="w-6 hover:animate-bounce hover:bg-green-600 rounded-full text-center"
          src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/pen-checkbox-256.png"
          alt="edit-img-btn"
      /></span>
      <!-- delete button  -->
      <span class="delete-btn px-8"
        ><img
          class="w-6 hover:animate-bounce hover:bg-red-600 rounded-full"
          src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/trashcan_delete_remove-256.png"
          alt="delete-btn-img"
      /></span>
    </p>
    <!-- edit and delete btn section end -->
  </div>
  <!-- post content end  -->
  `;
  // gettting all buttons delete and edit
  const editBtns = document.querySelectorAll(".edit-btn");
  const deleteBtns = document.querySelectorAll(".delete-btn");
  // delete post function
  const deletePost = (eve) => {
    let text = "Press Ok! for delete \n Or cancel!";
    if (confirm(text) == true) {
      eve.currentTarget.parentElement.parentElement.remove();
    }
  };
  //   addEventListener to all delete buttons
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      deletePost(e);
    });
  });
};

// addEventListener to btn
postBtn.addEventListener("click", () => {
  dataValidation();
  textArea.value = "";
});

// addEventListener on enter button
textArea.addEventListener("keypress", (eve) => {
  if (eve.key === "Enter") {
    eve.preventDefault();
    postBtn.click();
  }
});
