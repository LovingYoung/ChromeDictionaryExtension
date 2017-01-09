chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    if( request.message === "getSelection" ) {
        data = window.getSelection().toString();
        sendResponse({data:data});
    }
});
