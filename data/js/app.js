var number;
function loadProfile(index)
{
    number=index;
}
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
    let createDiv = (parentname,parameter, parametername)=>
    {
        div=document.createElement("div");
        if(parameter==1)
            div.setAttribute("class",parametername);
        else
            div.setAttribute("id", paametername);
        parentname.appendChild(div);
        return div;
    }
    let createImage=(parentname,parametername)=>{
        image=document.createElement("img");
        image.src="data/icon.jpeg";
        image.alt="Profile pic not found";
        image.style.width="50%";
        image.style.height = "30%";
        image.setAttribute("id",parametername);
        parentname.appendChild(image,parametername);
        return image;
    }
    createHeading=(parentname,heading_level,content)=>
    {
        heading=document.createElement("h"+String(heading_level));
        heading.innerHTML=content;
        parentname.appendChild(heading);
        return heading;
    }
    let createParagraph=(parentname,content)=>
    {
        para=document.createElement("p");
        para.innerHTML=content;
        parentname.appendChild(para);
        return para;
    }
    let createSpan=(parentname,content)=>
    {
        span=document.createElement("span");
        span.innerHTML=content;
        parentname.appendChild(span);
        return parentname;
    }
    let createTable=(parent,content,heading)=>
    {
        table=document.createElement('table');
        tr1=document.createElement('tr');
        tr1.innerHTML="";
         for(var i in heading)
         {
            tr1.innerHTML+="<th>"+heading[i]+"</th>";
         }
        table.appendChild(tr1);
        for(var row in content)
        {
            data=content[row].split(',');
            tr=document.createElement('tr');
            tr.innerHTML="";
            for(var cols of data)
            {
                tr.innerHTML += "<td>" + cols + "</td>\n";
            }
            table.appendChild(tr);
        }
         parent.appendChild(table);
         return table;
    }
    createList=(parentname,content,parameter)=>
    {
        var list;
        if(parameter==1)
        {
            list=document.createElement("ol");
        }
        else if(parameter==0)
        {
            list = document.createElement("ul");
        }
        list.innerHTML="";
        for(var el=0;el<content.length;el++)
        {
            list.innerHTML+="<li>"+content[el]+"</li>";
        }
        parentname.appendChild(list);
        return list;
    }
    createListandAnchor = (parentname, content, parameter) => {
        var list;
        if (parameter == 1) {
            list = document.createElement("ol");
        }
        else if(parameter == 0)
        {
            list = document.createElement("ul");
        }
        list.innerHTML = "";
        for (var el in content) {
            var anchor=document.createElement("a");
            anchor.innerHTML=el;
            anchor.href=content[el];
            anchor.target="_blank";
            var li=document.createElement('li');
            li.appendChild(anchor);
            list.append(li);
        }
        parentname.appendChild(list);
        return list;
    }
    createHR=(parent)=>
    {
        hr=document.createElement('hr');
        parent.appendChild(hr);
    }
    loadJSON("data/json/data.json", function(text) {
        let data = JSON.parse(text);
        profiles=[data.profile1,data.profile2];
        data=profiles[number];
        body=document.getElementById('root');
        let parent=createDiv(body,1,'parent');
        let visual=createDiv(parent,1,'visual');
        let image_1=createImage(visual,'Image');
        let name_1=createHeading(visual,3,data.name);
        let desig_1 = createHeading(visual, 3, data.designation);
        let contact=createHeading(visual,4,"Contact Me");
        let mobile_1=createParagraph(visual,"Mobile:");
        mobile_1=createSpan(mobile_1,data.phone);
        let email_1 = createParagraph(visual, "Email:<br>");
        email_1 = createSpan(email_1, data.email);
        let address_h=createHeading(visual,3,"Address");
        content=data.location;
        for(var el in content)
        {
            para=createParagraph(visual,el+":");
            span=createSpan(para,content[el]);
        }
        let qualifications=createDiv(parent,1,'qualifications');
        let Objective_h=createHeading(qualifications,3,"Objective");
        let objective=createParagraph(qualifications,"");
        let objective_span=createSpan(objective,data.Objective);
        let Education_h=createHeading(qualifications,3,'Education');
        headings="Institute,Study,Year,Grade /Percent";
        content=data.education;
        let Table_skills=createTable(qualifications,content,headings.split(','));
        let Skills_h=createHeading(qualifications,3,'Skills');
        content=data.skills.split(',');
        let Skills_list=createList(qualifications,content,0);
        content = data.language.split(',');
        let Language_h=createHeading(qualifications,3,"Languages Known");
        let language_list = createList(qualifications,content,1);
        let Certification_h=createHeading(qualifications,3,"Certifications");
        content=data.certifications;
        let certifiction_list = createListandAnchor(qualifications, content, 1);
    });
}
)();

