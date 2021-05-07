chrome.storage.local.get('date', function(result) {
    var today = dateToString();
    var date = result.date;

    var searchInput = document.getElementsByClassName('gLFyf gsfi')[1]; // なぜかgetElementsByClassNameは2個帰ってくる
    var searchWord = searchInput.getAttribute('value');

    if(date == null || date == undefined || date != today) // 今日の日付でない場合
    {
       chrome.storage.local.set({date:today});
       chrome.storage.local.set({words:JSON.stringify([searchWord])});
       //window.alert(searchWord);
    }
    else  // 今日の日付の場合
    {
        chrome.storage.local.get('words', function(wordResult){
            var words = JSON.parse(wordResult.words);

            // 現在の検索ワードが今まで検索されていない場合、挿入する
            let isAlreadySearched = false;
            for(let i = 0; i < words.length; i++){
                if(words[i] == searchWord){
                    isAlreadySearched = true;
                    break;
                }
            }
            if(!isAlreadySearched){
                words.push(searchWord);
            }

            chrome.storage.local.set({words:JSON.stringify(words)});

            //window.alert(words);
        });
    }
});