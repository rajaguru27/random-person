var gallery = [{
    imgsrc: "image/abd.jpeg",
    head: "AB de Villiers",
    para:"Abraham Benjamin de Villiers is a former South African international cricketer. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019."
    
    
},

{
    imgsrc: "image/kws.jpeg",
    head: "Kane Williamson",
    para:"Kane Stuart Williamson is a New Zealand cricketer who is currently the captain of the New Zealand national team in limited overs cricket. On 27 February 2023, Williamson became the all-time leading runscorer for New Zealand in test cricket. He is a right-handed batsman and an occasional off spin bowler."
   
    
},
{
    imgsrc: "image/msd.jpeg",
    head: "MS Dhoni",
    para:"Mahendra Singh Dhoni is an former Indian cricketer. He was captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He plays as a right-handed wicket-keeper-batsman and is also the current captain of Chennai Super Kings in the Indian Premier League."
    
   
},
{

    imgsrc: "image/vk.jpeg",
    head: "Virat Kohli",
    para:"Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for Delhi in Indian domestic cricket"

}]

var image=document.getElementById("image-person");
var head1=document.getElementById("head-person");
var para1=document.getElementById("para-person");
var btn=document.getElementById("button-person");

btn.addEventListener("click",function(){
    var person = Math.round(Math.random()*3);
    image.src =gallery[person].imgsrc;
    head1.innerHTML=gallery[person].head;
    para1.innerHTML=gallery[person].para;
    
})

