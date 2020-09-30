$(document).ready(function () { 
    $('table').bootstrapTable({ 
      data: projectData 
    }); 
  });
var projectData=[
    {
     "projectID":"1",
     "Name":"Sepa",
     "Technology":"Java",
     "Department":"Sales",
     "TeamMembers":"10",
     "startdate":"09-20-2018",
     "EndDate":"08-25-2019"
    },
    {
        "projectID":"2",
        "Name":"Traffic Sudharo",
        "Technology":"Java",
        "Department":"Police",
        "TeamMembers":"10",
        "startdate":"07-20-2018",
        "EndDate":"06-25-2019"
    },
    {
        "projectID":"3",
        "Name":"OBS",
        "Technology":"Angular",
        "Department":"HR",
        "TeamMembers":"10",
        "startdate":"06-20-2016",
        "EndDate":"08-25-2017"
    },
    {
        "projectID":"4",
        "Name":"RecruitEx",
        "Technology":"Angular",
        "Department":"Sales",
        "TeamMembers":"10",
        "startdate":"09-20-2017",
        "EndDate":"08-25-2018"
    }
]
document.getElementById('selid').style.display='none';
function loginAction(){
   document.getElementById('selid').style.display='block';
   
}












