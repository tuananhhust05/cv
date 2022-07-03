/*toggle style*/
const styleSwitcherToggle= document.querySelector(".style-switcher-toggler")
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open"); // click vào thì thêm class open vào element; chú ý cả đoạn css liền ông open nữa nhé!
})  //Thêm open vào danh sách class

//hidden style switcher when scroll
window.addEventListener("scroll",()=>{
    // check xem có trong danh sách class hay không 
    if( document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

// theme color
// logic: Lấy tất cả các element có class alternative-style 
// sau đó cho chạy; so sánh với đầu vào của hàm setActive 
const alternativeStyles= document.querySelectorAll(".alternative-style");
function setActiveStyle(color){
    alternativeStyles.forEach((style)=>{ // map mảng ra thành các style sau đó so sánh tứng thằng 1 
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
}

// light dark 

// query class thì thêm dấu chấm; id thì dùng dấu # thẻ bình thường thì thôi
const dayNight =document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    // đoạn lệnh này có thể là hai trường hợp; nếu đang moon thì sun; nếu sun thì chuyển moon
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{ // load là bật trang lên là thực thi lệnh 
    // cài đặt cho icon dựa vào nền mày đươcj quy định bởi class dark 
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})