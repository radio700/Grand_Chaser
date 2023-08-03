export const today = () => {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    
    if(month.toString().length === 1){
        month = "0"+month.toString();
    }

    let date = today.getDate();  // 날짜

    return (`${year}-${month}-${date}`);
}

export const todayWithYoil = () => {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    
    if(month.toString().length === 1){
        month = "0"+month.toString();
    }

    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    
    let yoil = {};
        yoil["0"] = "일";
        yoil["1"] = "월";
        yoil["2"] = "화";
        yoil["3"] = "수";
        yoil["4"] = "목";
        yoil["5"] = "금";
        yoil["6"] = "토";

    return (`${year}-${month}-${date} ${yoil[day]}`);
}