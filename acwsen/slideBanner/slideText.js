//*************************유의사항**************************//
// 1. "" 큰따옴표 사용불가(작은 따옴표''는 가능)
// 2. 줄바꿈 불가

// 슬라이드 시작
// 첫번째 슬라이드
$(document).ready(function () {
  // 날짜1
  $("#slideDate1").text(""),
    // 제목1
    $("#slideTitle1").text("Research"),
    // 요약1
    $("#slideSum1").text(
      `Actively produces feminist knowledge based on the postcolonial epistemology with an interdisciplinary approach; and critically analyzes the globally intersectional dynamics of gender, sexuality, race, class, nationality, ethnicity, and so on.
      Currently, a project 'Race and Gender: Global Korea, Neo-Racialization and Intersectionality' is being carried out.`
    ),
    // 링크1
    $(".link1").attr(
      "href",
      "https://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=59020970&siteId=acwsen&menuUIType=sub"
    ),
    // 첫번째 슬라이드 끝
    // 두번째 슬라이드
    //날짜2
    $("#slideDate2").text(""),
    //제목2
    $("#slideTitle2").text("Education"),
    //요약2
    $("#slideSum2").text(
      `Nurtures new generations of feminist experts to engage in research on Women’s Studies while running the Asian Women's Studies(AWS) program;
      and leads the exploration of creative pedagogical approaches to teaching feminism among higher education institutions in Asia and across the globe.`
    ),
    //링크2
    $(".link2").attr(
      "href",
      "https://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=28104000&siteId=acwsen&menuUIType=top"
    ),
    //두번째 슬라이드 끝
    // 세번째 슬라이드
    //날짜3
    $("#slideDate3").text(""),
    //제목3
    $("#slideTitle3").text("Publishing"),
    // 요약3
    $("#slideSum3").text(
      "Publishes the Asian Journal of Women’s Studies(AJWS), a journal in English devoted to critical scholarship across contexts and disciplines, and in doing so contributes to building multi-vocal feminist knowledge about Asia; and publishes books so that research knowledge can reach the public and information can be circulated."
    ),
    //링크3
    $(".link3").attr(
      "href",
      "https://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=28104009&siteId=acwsen&menuUIType=top"
    );
  //세번째 슬라이드 끝
  // 네번째 슬라이드
  //날짜4
  $("#slideDate4").text(""),
    //제목4
    $("#slideTitle4").text("Networking"),
    // 요약4
    $("#slideSum4").text(
      "Collaborates with academic and research institutions, policy-making bodies, and non-governmental organizations without geographical restrictions within and outside of Asias. Through mutually beneficial partnerships, understand different experiences and design creative collaborative projects. Ultimately, build a vibrant exchange and discussion based on transnational feminist networks."
    ),
    //링크4
    $(".link4").attr(
      "href",
      "https://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=28104010&siteId=acwsen&menuUIType=top"
    );
  //네번째 슬라이드 끝
});
// 슬라이드 끝
