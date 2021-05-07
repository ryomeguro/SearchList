function dateToString(){
    var today = new Date();

    var text = String(today.getFullYear());
    text += ('0' + (today.getMonth() + 1)).slice(-2);
    text += ('0' + today.getDate()).slice(-2);

    return text;
}

function dateToStringForDisplay(){
    var today = new Date();

    var text = ('' + (today.getMonth() + 1)) + '月';
    text += today.getDate() + '日';

    return text;
}