var menu_items=[];
function add(){
    var item=document.getElementById("New_Item").value;
    menu_items.push(item);
    document.getElementById("all").style.display="inline-block";
    console.log(menu_items);
    menu_items.sort();
    document.getElementById("xyz").innerHTML=menu_items;
}
function show_list(){
    var s=document.getElementById("xyz").innerHTML;
document.getElementById("xyz").style.display="inline-block";
}