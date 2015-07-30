//when submit clicked call addNewItem
//when item clicked call itemComplete
//when item hovered append text for remove
  //when remove clicked, remove item



//FUCNTIONS

//function to mark item complete
//function to remove item
//function for clear list
//function to reset input form

//function to add new item
function addNewItem(event) {

  event.preventDefault();
  
  var item = $('#item').val();

  $('#list').append("<li><input type='checkbox' value='done' class='checkbox'>" + item + "</li>");
}

