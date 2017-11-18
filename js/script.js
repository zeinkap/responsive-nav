var navToggle = document.querySelector('#main-nav-toggle');
var navList = document.querySelector('#main-nav-list');

// lets do a if statement to check if the ids we selected exist
if (navToggle && navList) {
  console.log('foo'); // if code runs, it means elements we selected exist
  navToggle.addEventListener('click', function() {
    // this checks to see if element has the class of close on it
    if (navToggle.classList.contains('close')) {
      // if element has the close class that means the nav is open so to close it we need to remove the open class from the nav list and remove the class
      navToggle.classList.remove("close");
      navList.classList.remove("open");
      // you could also use the .toggle method wihich would make this code simpler
    } else {
      console.log("bar");
      navToggle.classList.add("close");
      navList.classList.add("open");
    }
  });
}
