var ticket_list = document.getElementById("ticket_list");


// newaccount1622276654516


// var req = new Request("https://newaccount1622276654516.freshdesk.com/api/v2/tickets",myInit);

getdata();

async function getdata(){
    var res = await fetch("https://newaccount1622276654516.freshdesk.com/api/v2/tickets");
    var data = await res.json();
    console.log(data);
}



// 4RFu9e29IgMj3UvTdPD