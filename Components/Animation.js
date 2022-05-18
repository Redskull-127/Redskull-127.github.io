import styles from '../styles/Animation.module.css';

export default function reveal() {
    var reveals = document.querySelectorAll(styles.reveal);
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    return(
        reveal()
    );
  }
