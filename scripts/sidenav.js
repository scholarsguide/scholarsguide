function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
    document.getElementById("main").style.marginLeft = "30%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function toggleBanner1() {
    if (document.getElementById("bannerContent1").style.width === "30%") {
        document.getElementById("bannerContent1").style.width = "0%";
        document.getElementById("banner").style.width = "100%";
        document.getElementById("banner").style.marginLeft = "0%";
        document.getElementById("bannerLabel1").innerHTML = "UPLOAD RESOURCES";
    }
    else {
        document.getElementById("bannerContent1").style.width = "30%";
        document.getElementById("banner").style.width = "70%";
        document.getElementById("banner").style.marginLeft = "30%";
        document.getElementById("bannerLabel1").innerHTML = "CLOSE";
        document.getElementById("bannerContent2").style.width = "0%";
        document.getElementById("bannerLabel2").innerHTML = "VIEW RESOURCES";
    }
}

function toggleBanner2() {
    if (document.getElementById("bannerContent2").style.width === "30%") {
        document.getElementById("bannerContent2").style.width = "0%";
        document.getElementById("banner").style.width = "100%";
        document.getElementById("banner").style.marginLeft = "0%";
        document.getElementById("bannerLabel2").innerHTML = "VIEW RESOURCES";
    }
    else {
        document.getElementById("bannerContent2").style.width = "30%";
        document.getElementById("banner").style.width = "70%";
        document.getElementById("banner").style.marginLeft = "30%";
        document.getElementById("bannerLabel2").innerHTML = "CLOSE";
        document.getElementById("bannerContent1").style.width = "0%";
        document.getElementById("bannerLabel1").innerHTML = "UPLOAD RESOURCES";
    }
}