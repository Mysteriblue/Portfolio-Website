
$(document).ready(function(){

var client = contentful.createClient({
    space: 'pq2sjdzw367p',
    accessToken: '9LQ6-cB0mn3dXYGsLGlFdxr8KcA_dJfxtrNAdDXGfIo',
  });


  
  client.getEntries().then(function (entries) {
    console.log(entries)
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if (entry.fields.titel) {
        let html_content = '<div class="projekte-full Projekt1"><ul><li><a href="./projektdetail.html">' + entry.fields.titel + '</a></li></ul></div>'
        $("#projekte").append(html_content) //jquery append
        console.log($("#projekte"));
      }
    });
  });

  //console.log(entries)

});