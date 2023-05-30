let form=document.getElementById('user-list');
let addData=document.getElementById('userDetails');
form.addEventListener('submit',addDetails);
function addDetails(e){
  e.preventDefault();
  let Name_user=document.getElementById('name').value;
  let Email_user=document.getElementById('userEmail').value;
  let Phone_user=document.getElementById('userNumber').value;
  let li=document.createElement('li');
  li.className='user-name';
  li.appendChild(document.createTextNode(Name_user));
  li.appendChild(document.createTextNode(" - "+Email_user));
  li.appendChild(document.createTextNode(" - "+Phone_user));
  let deleteBtn=document.createElement('button');
  deleteBtn.className='delete';
  deleteBtn.appendChild(document.createTextNode('delete'));
  li.appendChild(deleteBtn);
  let editBtn=document.createElement('button');
  editBtn.className='edit';
  editBtn.appendChild(document.createTextNode("edit"));
  li.appendChild(editBtn);
  addData.appendChild(li);
  let obj={
    Name_user,
    Email_user,
    Phone_user
  }
  axios.post("https://crudcrud.com/api/3e37c2d1895c4645ba3a7e02e85b65bc/appointmentDetails",obj)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })

}
addData.addEventListener('click',removeItem);
function removeItem(e){
    e.preventDefault();
    //console.log(1);
    if(e.target.classList.contains('delete')){
            let li=e.target.parentElement;
            addData.removeChild(li);

            const deleteData = async (id) => {
              try {
                const response = await axios.delete(`https://crudcrud.com/api/3e37c2d1895c4645ba3a7e02e85b65bc/appointmentDetails/64756d98456f2b03e80b9323`);
                console.log('Data deleted successfully:', response.data);
              } catch (error) {
                console.error('Error deleting data:', error);
              }
            };
            const idToDelete = '64756d98456f2b03e80b9323';
            deleteData(idToDelete);

    }
}
addData.addEventListener('click',EditItem);
function EditItem(e){
    e.preventDefault();
    if(e.target.classList.contains('edit')){
        let li=e.target.parentElement;
        addData.removeChild(li);
    }
}
window.addEventListener('DOMContentLoaded',()=>{
  axios.get("https://crudcrud.com/api/3e37c2d1895c4645ba3a7e02e85b65bc/appointmentDetails")
  .then((response)=>{
    console.log(response.data)
    for(let i=0;i<response.data.length;i++){
      let li=document.createElement('li');
      li.className='detailsOfUser';
      li.appendChild(document.createTextNode(JSON.stringify (response.data[i].Name_user+"-")));
      li.appendChild(document.createTextNode(JSON.stringify (response.data[i].Email_user+"-")));
      li.appendChild(document.createTextNode(JSON.stringify (response.data[i].Phone_user+"-")));
      let deleteBtn=document.createElement('button');
      deleteBtn.className='delete';
      deleteBtn.appendChild(document.createTextNode('delete'));
      li.appendChild(deleteBtn);
      let editBtn=document.createElement('button');
      editBtn.className='edit';
      editBtn.appendChild(document.createTextNode("edit"));
      li.appendChild(editBtn);
      addData.appendChild(li);
    }
      
  }).catch((error)=>{
    console.log(error);
  })
})
