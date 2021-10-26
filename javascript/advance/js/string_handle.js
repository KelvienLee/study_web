let ps = document.querySelector("[name='password]");
ps.addEventListener("keyup", function () {
  console.log(this.value.length);
});
