	var list = document.getElementById("list");

function addTodo(){
	var todo_item = document.getElementById("todo-item");
	
	// Create li tag
	var li = document.createElement('li');
	var liText = document.createTextNode(todo_item.value);
	li.setAttribute("class","li");
	li.appendChild(liText)
	
	// Create delete btn
	var delBtn = document.createElement("button")
	var delText = document.createTextNode("Delete")
	delBtn.setAttribute("class","delbtn");
	delBtn.setAttribute("onclick","deleteItem(this)");
	delBtn.appendChild(delText)
	
	// Create edit btn
	var editBtn = document.createElement("button")
	var editText = document.createTextNode("Edit")
	editBtn.setAttribute("class","editbtn");
	editBtn.setAttribute("onclick","editItem(this)");
	editBtn.appendChild(editText)
	
	
	
	li.appendChild(delBtn)
	li.appendChild(editBtn)
	
	list.appendChild(li)
	
	todo_item.value = "";
	
}


function deleteItem(e){
	e.parentNode.remove()
}

function editItem(e){
	var editValue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue);
	editValue.setAttribute("class","prompt");
	e.parentNode.firstChild.nodeValue = editValue;
}


function deleteAll(){
	list.innerHTML = ""
}






















