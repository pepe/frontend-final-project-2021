function enableBtn() {
    var nl = document.getElementsByName("nick")[0].value.length;
    var ml = document.getElementsByName("message")[0].value.length;
    var btn = document.getElementById("post-btn"); 
    if ((nl > 0) && (ml > 0)) {
      btn.disabled = false
    } else {
      btn.disabled = "disabled"
    }
  }