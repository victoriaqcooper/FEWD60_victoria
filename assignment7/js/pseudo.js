//TODO ITEM EDIT


//when submit clicked call addNewItem
$('#todo').on('submit', addNewItem);

$('#todo').on('submit', inputReset);

// when remove button is clicked, remove item
$('#list').on('click', '.remove', deleteItem);

//change item status
$('#list').on('click', '.item', itemStatus);

//edit item 
$('#list').on('click', '.edit', itemEdit);

//clear list
$('#clear').on('click', clearList);

//FUCNTIONS


//function to save edited item




//function to reset input form
function inputReset(event) {
  $('#item').val("");
}

//function to add new item
function addNewItem(event) {

  event.preventDefault();
  
  var item = $('#item').val();

  $('#list').append("<li><span class='item'>" + item + "</span><button class='edit'>edit</button><button class='remove'>remove</button></li>");
}

//function swith item complete/active
function itemStatus(event) {
  console.log("itemStatus is running");
  console.log($(this));

  var listItem = $(this).parent();
  console.log("parent is" + listItem);

  listItem.toggleClass('done');
}

//function to edit item
function itemEdit(event) {
  event.preventDefault();
  // Get the text of the to-do item; it's a sibling of the clicked link
  console.log("itemEdit is running");
}

//function to remove item
function deleteItem(event) {
  event.preventDefault;
  $(this).parent().remove();
  console.log("this function is running");
  
}


//function for clear list
function clearList(event) {
  $('#list li').remove();
  console.log("clear is running")
}












