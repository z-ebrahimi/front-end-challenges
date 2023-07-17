const password = prompt("پسورد خود را وارد کنید...")
if(password.length < 6){
    document.write(`
        <div style="margin:20px;color:red;font-size:30px;">ضعیف</div>
    `)
}
else if(password.length >=6 && password.length <= 10){
    document.write(`
    <div style="margin:20px;color:yellow;font-size:30px;">متوسط</div>
`)
}
else if(password.length > 10 && password.length <=15 ){
    document.write(`
    <div style="margin:20px;color:green;font-size:30px;">قوی</div>
`)
}
else{
    document.write(`
    <div style="margin:20px;color:red;font-size:30px;">غیر قابل قبول</div>
`)
}


