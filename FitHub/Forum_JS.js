
//Selector Changes
var selectElement = document.querySelector('select[name="Topic"]');
var select_divs = document.querySelectorAll('.forum_categories > div');

for (var i = 0; i < select_divs.length; i++) {
    select_divs[i].style.display = 'none';
  }



selectElement.addEventListener('change', function() {

    var selectedValue = this.value;

    for (var i = 0; i < select_divs.length; i++) {
        select_divs[i].style.display = 'none';
    }

    var divToShow = document.getElementById(selectedValue);

    divToShow.style.display = 'block';
  
});

//Submit Button

var submitButton= document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', function() {

    console.log("Button Clicked");
 
    var displayName= document.querySelector('input[name="name"]').value;
    var message= document.querySelector('textarea[name="message"]').value;

    console.log(displayName+" "+message);

    var divToAdd= document.getElementById(selectElement.value);

    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString();

    var forumEntry= '<div class="forum_entry"><p id="entry_name">'+displayName+'</p>'+'<p id="entry_date">'+formattedDate+'</p>'
    +'<p id="entry_message">'+message+'</p></div>';
    divToAdd.insertAdjacentHTML('beforeend', forumEntry);

});



