/**
 * Created by lovingyoung on 1/9/17.
 */

chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "getSelection"}, function (data) {
        if(data.data != undefined) {
            url = "http://www.learnersdictionary.com/definition/" + data.data;
            var iframe = document.createElement("iframe");
            iframe.src = url;
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            iframe.setAttribute('id', 'mwDictExtension');
            document.body.appendChild(iframe);
        }
    });
});

