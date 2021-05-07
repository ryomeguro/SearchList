
chrome.storage.local.get('date', function(result) {
    var today = dateToString();
    var date = result.date;

    if(date == null || date == undefined || date != today) // 今日の日付でない場合
    {
        //window.alert('hello');
        document.getElementById("dataExist").style.display = "none";
        document.getElementById("noData").style.display = "block";
    }else // 今日の日付の場合
    {
        var dateDisplay = document.getElementById("dateDisplay");
        var dateString = dateToStringForDisplay() + 'の検索ワード';
        dateDisplay.innerHTML = dateString;

        document.getElementById("dataExist").style.display = "block";
        document.getElementById("noData").style.display = "none";

        document.getElementById("searchWords").innerHTML = "Word";
        document.getElementById("searchWords").innerHTML += "Word";
        
        chrome.storage.local.get('words', function(wordResult){
            var words = JSON.parse(wordResult.words);

            var wordString = "";
            for(let i = 0; i < words.length; i++){
                if(i != 0){
                    wordString += "\n";
                }
                wordString += words[i];
            }
            document.getElementById("searchWords").innerHTML = wordString;

        });
    }
});

function copyToClipBoard(){
    document.getElementById("searchWords").select();
    var retVal = document.execCommand('copy');

    document.getElementById("copyButton").innerHTML = "コピーしました";
}

document.getElementById("copyButton").addEventListener('click', copyToClipBoard, false);