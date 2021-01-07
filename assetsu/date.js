const currentDate = document.querySelector(".js-date");

function getCurrentDate() {
    const date = new Date();
    const fullYear = date.getFullYear();
    const month = date.getMonth() + 1;
    const gdate = date.getDate(); //일
    // var options = { month: 'long'};
    // console.log(new Intl.DateTimeFormat('ko-KR', options).format(date));
    currentDate.innerText = `${fullYear}년 ${
    month<10 ? ` ${month}` : month}월 ${
    gdate<10 ? ` ${gdate}` : gdate}일
    `
}

function init() {
    getCurrentDate();
}

init();
