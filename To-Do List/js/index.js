var i=1;
// checks whether there is data in localstorage

const maindiv=document.getElementById('main');        

// this function executes when the page loads
function fetchdata()
{
    if(localStorage.length !==0)
    {
        // Getting all the keys
        const keys = Object.keys(localStorage);
        keys.sort();
        for(var j=0;j<keys.length;j++)
        {
            const div=document.createElement('div');
            // Id will be the same value of the key that's returned
            div.id=keys[j];   
            div.className="taskdiv mt-3";
            // delete button
            
            const del=document.createElement('button');
            del.innerHTML="Delete";
            // Assigning value to the div
            div.innerHTML+=localStorage.getItem(keys[j]);
            // Assigning id to div
            del.id=keys[j];
            del.className="delbtn ms-3 btn btn-light";
            div.appendChild(del);
            maindiv.appendChild(div);
            // onclick event for delete button
            del.addEventListener("click",delbutton);
            
        }
        // Getting the last key and incrementing it by 1 to start from next value
        i=keys[keys.length-1];
        i=Number(i)+1;
    }
}
function display()
{ 
    // Getting value from textbox
    var val=document.getElementById('input');
    // Checking for empty value
    if(val.value.trim()==='')
    {
        alert("Please enter a value");
    }
    else
    {
        // task display
        const div=document.createElement('div');
        div.id=i;
        div.className="taskdiv mt-3";
        // console.log(div.id);
        
        // delete button
        const del=document.createElement('button');
        del.innerHTML="Delete";
        // del.onclick = delbutton();
        div.innerHTML+=val.value;
        localStorage.setItem(i,document.getElementById('input').value);
        val.value='';
        // assigning id & class to del button
        del.id=i;
        del.className="delbtn ms-3 btn btn-light";
        // appending delete button with created div
        div.appendChild(del);
        // appending this div with button to main div
        maindiv.appendChild(div);
        del.addEventListener("click",delbutton);
        i++;
    }            
}
function delbutton()
{
    var btnid=event.target.id;
    // console.log(btnid);
    localStorage.removeItem(btnid);
    // console.log(typeof(btnid));  
    // event.target.id will return the id in string datatype
    var d=document.getElementById(btnid);
    console.log(d);
    d.remove();
    window.location.reload();
}