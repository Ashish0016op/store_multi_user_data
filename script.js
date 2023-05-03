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
  addData.appendChild(li);
  localStorage.setItem(Name_user,Name_user);
  localStorage.setItem(Email_user,Email_user);
  localStorage.setItem(Phone_user,Phone_user);

}
addData.addEventListener('click',removeItem);
function removeItem(e){
    e.preventDefault();
    //console.log(1);
     if(e.target.classList.contains('delete')){
            let li=e.target.parentElement;
            addData.removeChild(li);
    }
    localStorage.removeItem(Name_user);
    localStorage.removeItem(Email_user);
    localStorage.removeItem(Phone_user);
}