//var arrow = document.getElementById('arrow');
//var $arrow = $("#arrow a");

//var $off = $("main").offset().top;

//$("#arrow").on("click", function () {
	//$("body, html").animate({
	//	scrollTop: $("main").offset().top
	//}, 1000)




    // get all folders in our .directory-list
    var allFolders = $(".directory-list li > ul");
    allFolders.each(function() {

      // add the folder class to the parent <li>
      var folderAndName = $(this).parent();
      folderAndName.addClass("folder");

      // backup this inner <ul>
      var backupOfThisFolder = $(this);
      // then delete it
      $(this).remove();
      // add an <a> tag to whats left ie. the folder name
      folderAndName.wrapInner("<a href='#' />");
      // then put the inner <ul> back
      folderAndName.append(backupOfThisFolder);

      // now add a slideToggle to the <a> we just added
      folderAndName.find("a").click(function(e) {
        $(this).siblings("ul").slideToggle("slow");
        e.preventDefault();
      });

    });


  var PUS = $(".PU_P").click(function () {
      var Elem = $(this).siblings();
      if($(this).parent().hasClass('PU_R')) {
          for (i=0; i<Elem.length; i++) {
              if (Elem[i].tagName) {
                  var wart = $(Elem[i]).css('display');
                  if (wart == 'block') { Elem[i].style.display = 'none'; }
                  if (wart == 'none')  { Elem[i].style.display = 'block';  }
              }
          }
      }
  });
