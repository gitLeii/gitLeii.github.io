$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toogle menu navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


fetch("https://api.github.com/users/gitLeii/repos")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((element) => {
      let div = document.createElement("div")  
      let h5 = document.createElement("span");
      let a = document.createElement("a");
      let i = document.createElement("i")
      let hr = document.createElement("hr")

      div.setAttribute("class", "container project-content")

      h5.setAttribute("id", "repo-name");
      h5.textContent = element.name;

      a.setAttribute("class", "repo-url");
      let url = element.html_url;
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      a.textContent = "Visit Page";

      i.setAttribute("class", "fa fa-github-alt")
      i.setAttribute("aria-hidden", "true")
      
      let section = document.getElementById("project-content");
      div.append(i, h5, a);
      section.append(div, hr)
    })
  );

