// ON LOAD
// NEWS INDEX
// AUTHORS
let gatchi = "Gary Andrew Gatchalian";
let salin = "Michelle Salin";
let cayari = "Aaron Cayari";
let tomoro = "Maricel Tomoro";

// PROFILE PIC SRC
let gatchiProfilePic = "./images/gatchiProfile.jpg";
let salinProfilePic = "./images/salinProfile.png";
let tomoroProfilePic = "./images/tomoroProfile.png";
let cayariProfilePic = "./images/cayariProfile2.png";

// NEWS TITLES/DATES/ARTICLE DESC
let newsTitle1 = "The latest on little kids’ vaccines";
let newsImgSrc1 =
  "https://www.rappler.com/tachyon/2021/12/united-states-washington-covid-19-moderna-vaccine-january-23-2021-reuters-scaled.jpg?resize=2560%2C1813&zoom=1";
let newsDate1 = "May 23, 2022 &middot; 6 min read";
let newsDesc1 =
  "we keep close watch on discussions surrounding the emergency approval of vaccines for kids aged at least 6 months";
let newsTitle2 = "Life during lockdown";
let newsImgSrc2 = "./images/news/news2.jpg";
let newsDate2 = "May 21, 2022 &middot; 3 min read";
let newsDesc2 =
  "The continuously increasing number of COVID-19 cases in the world The government implemented a total lockdown that lasted for several months.";
let newsTitle3 = "News Title 3";
let newsDate3 = "May 15, 2022 &middot; 4 min read";
let newsDesc3 = "qwqwqwqwqw qwqwqw qwrqwrwq";
let newsTitle4 = "News Title 4";
let newsDate4 = "April 25, 2022 &middot; 4 min read";
let newsDesc4 = "wewewewewewewewewweww wewewewewewee";
let newsTitle5 = "News Title 5";
let newsDate5 = "April 12, 2022 &middot; 6 min read";
let newsDesc5 = "gagagagagag gagawggagwa gagwgawgawg e";
let newsTitle6 = "What to know about the history of coronaviruses";
let newsImgSrc6 = "./images/news/news6.jpg";
let newsDate6 = "March 23, 2022 &middot; 10 min read";
let newsDesc6 =
  "Coronavirus disease &lpar;COVID-19&rpar; is an infectious disease caused by the SARS-CoV-2 virus.";

function newsPage1() {
  // NEWS1
  document.getElementsByClassName("news-title-1")[0].innerHTML = newsTitle1;
  document.getElementsByClassName("news-img-1")[0].src = newsImgSrc1;
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-1")[0].src = gatchiProfilePic;
  document.getElementsByClassName("author-profile-1")[0].style.width = "40px";
  document.getElementsByClassName("news-date-1")[0].innerHTML = newsDate1;
  document.getElementsByClassName("news-desc-1")[0].innerHTML = newsDesc1;
  // NEWS2
  document.getElementsByClassName("news-title-2")[0].innerHTML = newsTitle2;
  document.getElementsByClassName("news-img-2")[0].src = newsImgSrc2;
  document.getElementsByClassName("author-2")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-2")[0].src = salinProfilePic;
  document.getElementsByClassName("author-profile-2")[0].style.width = "40px";
  document.getElementsByClassName("news-date-2")[0].innerHTML = newsDate2;
  document.getElementsByClassName("news-desc-2")[0].innerHTML = newsDesc2;
  // NEWS3
  document.getElementsByClassName("news-title-3")[0].innerHTML = newsTitle3;
  document.getElementsByClassName("author-3")[0].innerHTML = tomoro;
  document.getElementsByClassName("author-profile-3")[0].src = tomoroProfilePic;
  document.getElementsByClassName("author-profile-3")[0].style.width = "40px";
  document.getElementsByClassName("news-date-3")[0].innerHTML = newsDate3;
  document.getElementsByClassName("news-desc-3")[0].innerHTML = newsDesc3;
}

function newsPage2() {
  // NEWS4
  document.getElementsByClassName("news-title-4")[0].innerHTML = newsTitle4;
  document.getElementsByClassName("author-4")[0].innerHTML = cayari;
  document.getElementsByClassName("author-profile-4")[0].src = cayariProfilePic;
  document.getElementsByClassName("author-profile-4")[0].style.width = "40px";
  document.getElementsByClassName("news-date-4")[0].innerHTML = newsDate4;
  document.getElementsByClassName("news-desc-4")[0].innerHTML = newsDesc4;
  // NEWS5
  document.getElementsByClassName("news-title-5")[0].innerHTML = newsTitle5;
  document.getElementsByClassName("author-5")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-5")[0].src = gatchiProfilePic;
  document.getElementsByClassName("author-profile-5")[0].style.width = "40px";
  document.getElementsByClassName("news-date-5")[0].innerHTML = newsDate5;
  document.getElementsByClassName("news-desc-5")[0].innerHTML = newsDesc5;
  // NEWS6
  document.getElementsByClassName("news-title-6")[0].innerHTML = newsTitle6;
  document.getElementsByClassName("news-img-6")[0].src = newsImgSrc6;
  document.getElementsByClassName("author-6")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-6")[0].src = salinProfilePic;
  document.getElementsByClassName("author-profile-6")[0].style.width = "40px";
  document.getElementsByClassName("news-date-6")[0].innerHTML = newsDate6;
  document.getElementsByClassName("news-desc-6")[0].innerHTML = newsDesc6;

  // document.getElementsByClassName("awit")[0].innerHTML = "Go Back";
  // document.getElementsByClassName("awit")[0].href = "news-index.html";
}
function newsLoad1() {
  document.getElementsByClassName("news-title-1")[0].innerHTML = newsTitle1;
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-1")[0].src = gatchiProfilePic;
  document.getElementsByClassName("news-img-1")[0].src = newsImgSrc1;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-1")[0].style.width = "40px";
  document.getElementsByClassName("news-date-1")[0].innerHTML = newsDate1;
}
function newsLoad2() {
  document.getElementsByClassName("news-title-2")[0].innerHTML = newsTitle2;
  document.getElementsByClassName("author-2")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-2")[0].src = salinProfilePic;
  document.getElementsByClassName("news-img-2")[0].src = newsImgSrc2;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-2")[0].style.width = "40px";
  document.getElementsByClassName("news-date-2")[0].innerHTML = newsDate2;
}
function newsLoad6() {
  document.getElementsByClassName("news-title-6")[0].innerHTML = newsTitle6;
  document.getElementsByClassName("author-6")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-6")[0].src = salinProfilePic;
  document.getElementsByClassName("news-img-6")[0].src = newsImgSrc6;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-6")[0].style.width = "40px";
  document.getElementsByClassName("news-date-6")[0].innerHTML = newsDate6;
}
function aboutLoad() {
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-1")[0].src = gatchiProfilePic;
  document.getElementsByClassName("author-profile-1")[0].style.height = "225px";
  document.getElementsByClassName("author-profile-1")[0].style.width = "555px";
  document.getElementsByClassName("author-2")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-2")[0].src = salinProfilePic;
  document.getElementsByClassName("author-profile-2")[0].style.height = "225px";
  document.getElementsByClassName("author-3")[0].innerHTML = tomoro;
  document.getElementsByClassName("author-profile-3")[0].src = tomoroProfilePic;
  document.getElementsByClassName("author-profile-3")[0].style.height = "225px";
  document.getElementsByClassName("author-4")[0].innerHTML = cayari;
  document.getElementsByClassName("author-profile-4")[0].src = cayariProfilePic;
  document.getElementsByClassName("author-profile-4")[0].style.height = "225px";
}
