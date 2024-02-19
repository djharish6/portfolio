// SHOW MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')

const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//function sendEmail(){
   
 //   Email.send({
         // SecureToken : "fbed60d7-7926-48ba-aaac-0212212734af",
          //To : 'djharishharish3@gmail.com',
        //  From : "djharishharish3@gmail.com",
      //    Subject : "This is the subject",
    //      Body : "meaage"
  //    }).then(
  //      message => alert(message)
   //   );
//}