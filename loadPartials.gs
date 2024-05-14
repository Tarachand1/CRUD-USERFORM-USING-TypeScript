
function doGet(request) {
  let html = HtmlService.createTemplateFromFile('main.html').evaluate();
  let htmlOutput = HtmlService.createHtmlOutput(html);
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return htmlOutput;
}



function loadPartialHTML_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial);
  return htmlServ.evaluate().getContent();
}

function loadSearchView(){

  return loadPartialHTML_("search");

}


function loadCustomersView(){

  return loadPartialHTML_("addcustomers");

}


function loadEditCustomersView(){

  return loadPartialHTML_("editcustomer");

}

function loadHomeView(){
  return loadPartialHTML_("home");
}
