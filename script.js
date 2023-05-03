
function saveLocalStorage(e){
    e.preventDefault();
    let name=e.target.name.value;
    let email=e.target.email.value;
    let phoneNumber=e.target.phone_number.value;
    let obj={
        name,
        email,
        phoneNumber
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showUserOnScreen(obj);

}
function showUserOnScreen(obj){
    let pareentElm=document.getElementById('userInput');
    let childElm=document.createElement('li');
    childElm.textContent=obj.name +'-'+obj.email+'-'+obj.phoneNumber;
    pareentElm.appendChild(childElm);
}