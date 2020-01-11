window.addEventListener('beforeunload', function(){

   chrome.runtime.sendMessage({ from: 'content_script', message: 'Redirect this malicious url' });

});
