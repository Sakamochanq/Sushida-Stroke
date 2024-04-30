var message;

const Calculate = (index, count) => {
    if(index > count){
        var result = index - count;
        message = result + "円分 お得でした！"
        return message;
    }
    else if(index < count){
        var result = count - index;
        message = result + "円分 損でした..."
        return message;
    }
}

const Written = (index, count, key, average, mistake) => {
    const current = new Date();
    const year = current.getFullYear();
    const month = ('0'+(current.getMonth()+1)).slice(-2);
    const day = ('0'+current.getDate()).slice(-2);

    //Calculate
    var message;
    if(index < count){
        var result = count - index;
        message = result + "円分 お得でした！";
    }
    else if(index > count){
        var result = index - count;
        message = result + "円分 損でした...";
    }

    //Result
    const filename = year + "-" + month + "-" + day + ".md";

    var Templates = `<div align="center">
    <br>
    <h2>今回の記録 🍵</h2>
    <br>
</div>

### 日付

${year} / ${month} / ${day}

<br>

### 成績

${index} 円 払って...  
${count} 円分のお寿司をゲット！

**${message}**

<br>

#### 正しく打ったキーの数

> ${key} 回

<br>

#### 平均キータイプ数

> ${average} 回/秒

<br>

#### ミスタイプ数

> ${mistake} 回

<br>
`;
    //download to markdown
    var blob = new Blob([Templates], {type: "text/markdown"});
    var downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(blob);

    downloadLink.click();
}

const generateMarkdown = () => {
    //selectedindex
    var selectBox = document.querySelector('select');
    var index = parseInt(selectBox.value);

    //document
    var count = document.getElementById("Count").value;
    var key = document.getElementById("Key").value;
    var average = document.getElementById("Average").value;
    var mistake = document.getElementById("Mistake").value;

    //Validation
    if(count == "" && key == "" && average == "" && mistake == ""){
        alert("全ての項目を入力する必要があります。");
        return;
    }

    if(index == 3000){
        Written(index, count, key, average, mistake);
    }
    else if(index == 5000){
        Written(index, count, key, average, mistake);
    }
    else if(index == 10000){
        Written(index, count, key, average, mistake);
    }
}