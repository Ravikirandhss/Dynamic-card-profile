(function () {

    function loadJSON(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    let createDiv = (parentname, parameter, parametername) => {
        div = document.createElement("div");
        if (parameter == 1)
            div.setAttribute("class", parametername);
        else
            div.setAttribute("id", parametername);
        parentname.appendChild(div);
        return div;
    }
    let createImage = (parentname,source,alt,width,height, parametername) => {
        image = document.createElement("img");
        image.src = source;
        image.alt = alt;
        image.style.width = width;
        image.style.height = height;
        image.setAttribute("id", parametername);
        parentname.appendChild(image, parametername);
        return image;
    }
    createHeading = (parentname, heading_level, content) => {
        heading = document.createElement("h" + String(heading_level));
        heading.innerHTML = content;
        parentname.appendChild(heading);
        return heading;
    }
    let createParagraph = (parentname, content) => {
        para = document.createElement("p");
        para.innerHTML = content;
        parentname.appendChild(para);
        return para;
    }
    let createSpan = (parentname, content) => {
        span = document.createElement("span");
        span.innerHTML = content;
        parentname.appendChild(span);
        return parentname;
    }
    createList = (parentname, content, parameter) => {
        var list;
        if (parameter == 1) {
            list = document.createElement("ol");
        }
        else if (parameter == 0) {
            list = document.createElement("ul");
        }
        list.innerHTML = "";
        for (var el = 0; el < content.length; el++) {
            list.innerHTML += "<li>" + content[el] + "</li>";
        }
        parentname.appendChild(list);
        return list;
    }
    createHR = (parent) => {
        hr = document.createElement('hr');
        parent.appendChild(hr);
    }
    let createBR = (parentname) => {
        br = document.createElement('br');
        parentname.appendChild(br);
        return br;
    }
    let createAnchors=(parent,anchor_data,img_src,alt,target,Idname)=>
    {
        for (var index=0; index<anchor_data.length;index++)
        {
            anchor=document.createElement("a");
            anchor.href=anchor_data[index];
            anchor.target=target;
            image=createImage(anchor,img_src[index],alt,"40px","40px",Idname);
            parent.appendChild(anchor);
        }
        return parent;
    }
    createanchor=(parent,href,innerHTML,target,Id="")=>{
        a=document.createElement('a');
        a.href=href;
        a.target=target;
        a.innerHTML=innerHTML;
        if(Id!="")
        {
            a.setAttribute("id",Id);
        }
        parent.appendChild(a);
    }
    createProfile=(profiles,parent,Id,SubId_1,SubId_2,SubId_3,img_src,anchor_data,alt,profilelink)=>
    {
        let Id_1 = createDiv(parent, 1, Id);
        let image_1 = createImage(Id_1, "data/icon.jpeg", "Picture Cannot be Loaded", "50%", "50%", "Image");
        let br_1 = createBR(Id_1);
        let SubId1 = createDiv(Id_1, 0, SubId_1);
        let p_name = createParagraph(SubId1, "Name:");
        let span_name = createSpan(p_name, profiles.name);
        let p_email = createParagraph(SubId1, "Email:<br>");
        let span_email = createSpan(p_email, profiles.email);
        let p_phonenumber = createParagraph(SubId1, "Phone Number:");
        let span_phonenumber = createSpan(p_phonenumber, profiles.phone);
        let hr_1 = createHR(SubId1);
        let SubId2 = createDiv(Id_1, 0, SubId_2);
        SubId2 = createAnchors(SubId2, anchor_data, img_src, alt, "_blank", "icon");
        profile = createDiv(Id_1, 0, SubId_3);
        anchor = createanchor(profile, profilelink, "View My Profile", "_blank");
        parent.appendChild(Id_1);
        return Id_1;
    }
    loadJSON("data/json/data.json", function (text) {
        let data = JSON.parse(text);
        profiles = [data.profile1, data.profile2];
        index=0;
        body = document.getElementById('root');
        let ID = createDiv(body, 1, 'ID');
        // let Id1 = createDiv(ID, 1, "Id1");
        // let image_1 = createImage(Id1, "data/icon.jpeg", "Picture Cannot be Loaded", "50%", "50%", "Image");
        // let br_1 = createBR(Id1);
        // let Id11 = createDiv(Id1, 0, "Id11");
        // let p_name = createParagraph(Id11, "Name:");
        // let span_name = createSpan(p_name, profiles[index].name);
        // let p_email = createParagraph(Id11, "Email:<br>");
        // let span_email = createSpan(p_email, profiles[index].email);
        // let p_phonenumber = createParagraph(Id11, "Phone Number:");
        // let span_phonenumber = createSpan(p_phonenumber, profiles[index].phone);
        // let hr_1=createHR(Id1);
        // let Id12 = createDiv(Id1, 0, "Id12");
        let img_src = ["data/github-icon.png", "data/facebook-icon.png", "data/twitter-icon.png","data/linkedin-icon.png"];
        let anchor_data = ["https://github.com/Ravikirandhss", "https://www.facebook.com", "https://www.twitter.com", "https://www.linkedin.com/in/ravikiran-dusanapudi-57a46618a/"];
        let alt = "No image can be displayed";
        // Id12=createAnchors(Id12,anchor_data,img_src,alt,"_blank","icon");
        // profile_1=createDiv(Id1,0,"profile");
        // anchor=createanchor(profile_1,"index.html","View My Profile","_blank","Profile");
        Id1 = createProfile(profiles[0], ID, "Id1", "Id11", "Id12", "profile", img_src, anchor_data, alt, "main.html");
        Id2 = createProfile(profiles[1], ID, "Id2", "Id21", "Id22", "profile", img_src, anchor_data, alt, "main2.html");
        


    });
}
)();