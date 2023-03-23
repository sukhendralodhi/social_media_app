let textArea = document.getElementById("text-area");
const postBtn = document.getElementById("post-btn");
const postContainer = document.getElementById("post-container");

const postData = () => {
  let data = textArea.value;
  postContainer.innerHTML += `
    <!-- post content start  -->
    <div class="flex justify-between items-center w-full px-8 h-10">
      <!-- main data start  -->
      <p class="w-3/5">${data}</p>
      <!-- main data end -->
      <!-- edit and delete btn section start  -->
      <p class="flex classw-2/5">
        <!-- edit button  -->
        <span class="edit-btn" class="px-2 hover:border-2 border-red-400"
          ><img
            class="w-6"
            src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/pen-checkbox-256.png"
            alt="edit-img-btn"
        /></span>
        <!-- delete button  -->
        <span class="delete-btn"
          ><img
            class="w-6"
            src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/trashcan_delete_remove-256.png"
            alt="delete-btn-img"
        /></span>
      </p>
      <!-- edit and delete btn section end -->
    </div>
    <!-- post content end  -->
    `;

  const editBtns = document.querySelectorAll(".edit-btn");
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      e.currentTarget.parentElement.parentElement.remove();
    });
  });
};

postBtn.addEventListener("click", () => {
  postData();
  textArea.value = "";
});
