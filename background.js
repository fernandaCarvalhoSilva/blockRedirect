chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function (tabs) {
        let myTabUrl = tabs[0].url;
        let count = (myTabUrl.match(/https/g) || []).length;

        if(count > 1){
            let myNewUrl = ReplaceString(myTabUrl);
            chrome.tabs.update(null, {url: myNewUrl});
            alert("redirect to " + myNewUrl);
        }
    });

    /**
     * @return {string}
     */
    function ReplaceString(url) {
        let maliciousUrl = url;
        let firstPositionUrl = maliciousUrl.indexOf("https");
        let lastPositionUrl = maliciousUrl.indexOf("s=");

        for (i = firstPositionUrl; i <= lastPositionUrl + 2; i++) {
            var newUrl = maliciousUrl.substr(i);
        }
        return newUrl;
    }
});