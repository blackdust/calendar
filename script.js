jQuery(document).ready(function(){
  //首页找到现在的时间进行加载
   

   var myDate = new Date();
   //以下三行是调试代码
   // myDate.setYear(2015);
   //myDate.setMonth(8);
   //myDate.setDate(1);

   $('h2').text(myDate.toLocaleDateString());

   var time=myDate.toLocaleDateString();
   var currentdate=myDate.getDate();
   var currentyear= time[0]+time[1]+time[2]+time[3];
   var currentmonth2=myDate.getMonth();//用于计算
   var currentmonth=currentmonth2+1;//用于显示
  //设置表头 
   jQuery("#head >#year").text(currentyear)
   jQuery("#head >#month").text(currentmonth)
  //getfirstday方法能输入一个年份和月份返回一号的星期数
  //var d=new Date();
  var currentmonth1stday;

  var getfirstday=function(year,month)
  {
    myDate.setYear(year);
    myDate.setMonth(month);
    myDate.setDate(1);
    currentmonth1stday=myDate.getDay();
    //datestring=myDate.toLocaleDateString()
    return currentmonth1stday
  }

   //这个变量currentfirstday得到了月份一号的星期数(即时月份的一号)
  var currentfirstday=getfirstday(currentyear,currentmonth2);

   //$('h2').text(currentmonth1stday);
   //周一是一 但是行元素的起始为0 position得到了table里第一行的位置。
   //这几行代码用于设置第一行1的位置
  var position=currentfirstday-1;  
  /*if(currentfirstday==0)
  {
   $("td:eq(6)").text(1);
  }
  else
  {
   $("td:eq("+position+")").text(1);
  }*/



 // 。。bug区域：

  //下面几行代码用于循环设置1之后和1之前的日期
  // 如果是周日的话  要在之前六个位置设置天数(这个还需要修改)
   
  var date2=new Date();
  //这个方法将通过表头的年月为基准再通过输入往里面设置日期。
  //之所以这样是因为点击按钮后将表头改变 再执行代码
  var dayscount= function(num)

  {
   $headyear=$('#year').text();
   $headmonth=$('#month').text();
   date2.setYear($headyear);
   date2.setMonth($headmonth-1)
   date2.setYear(currentyear);
   //date2.setMonth(currentmonth2)
   //date2.setYear(2015);
   //date2.setMonth(8)
   date2.setDate(num);
   return date2.toLocaleDateString();
  }


  if(currentfirstday==0)
  {
     var m;
     var x=1;
     var y=1;

     for(var i=6;i>-1;i=i-1)
     { 
       m=dayscount(x);
       $("td:eq("+i+")").text(m);
       x=x-1;
     }

     for(var i=6;i<42;i=i+1)
     { 
       m=dayscount(y);
       $("td:eq("+i+")").text(m);
       y++;
     }
    // 不是周日的话 就获得position并且对1号之前和之后的位置进行循环赋值
  }
  else
  {
    var x=1;
    var y=1;
    var m;

    for(var i=position;i>-1;i=i-1)
    { 
      m=dayscount(x);
      $("td:eq("+i+")").text(m);
      x--;
    }

    for(var i=position;i<42;i=i+1)
    {
      m=dayscount(y);
      $("td:eq("+i+")").text(m);
      y++;
    }
  };








//遍历所有td元素  这一片感觉没什么问题
//遍历所有元素 把它们从xxxx/xx/xx转换到最后的xx日期，并且通过与现在的时间对比来决定添加css的种类
//
$('td').each(function()
{
 
 var $a=$(this).text()
 var array=[];
 array=$a.split("/"); 
 if(currentmonth==array[1]&&array[0]==currentyear)
  {//$(this).text(array[2])
    if(array[2]==currentdate)
    {
     $(this).css('color','red')
     $(this).css('background-color','rgb(255,130,150)')
    }
  }
  else
  {//$(this).text(array[2]);
   $(this).css('color','#C0C0C0')
  }

});

/*var returnlastmonth=function(){
  var d=new Date();
  var u=d.getDate();
  d.setDate(u-42);
  return d.getDate()

}*/

/*var now=myDate.getMonth();
 var lastmonth=now-1;
 myDate.setMonth(lastmonth);*/
 //location.reload();






//点击触发jquery效果的实现代码
//点击完后 -》
 year=parseInt($('#year').text());
 month=parseInt($('#month').text())-1;
 
$("button:eq(0)").click(function()
{
 //var month;
 //var year;
 month--;
 var currentfirstday2 = getfirstday(year,month);
 var position2 = getfirstday(year,month)-1;

 $('h1').text(month);
 var date3 = new Date();

 var dayscount2 = function(num)
  {
   date3.setYear(year);
   date3.setMonth(month);
   //date3.setYear(currentyear);
   date3.setDate(num);
   return date3.toLocaleDateString();
  }


  if(currentfirstday2==0)
  {
     var m;
     var x = 1;
     var y = 1;

     for(var i=6;i>-1;i=i-1)
     { 
       m=dayscount2(x);
       $("td:eq("+i+")").text(m);
       x=x-1;
     }

     for(var i=6;i<42;i=i+1)
     { 
       m=dayscount2(y);
       $("td:eq("+i+")").text(m);
       y++;
     }

  }
  else
  {
    var x=1;
    var y=1;
    var m;

    for(var i=position2;i>-1;i=i-1)
    { 
      m=dayscount2(x);
      $("td:eq("+i+")").text(m);
      x--;
    }

    for(var i=position2;i<42;i=i+1)
    {
      m=dayscount2(y);
      $("td:eq("+i+")").text(m);
      y++;
    }
  };

$('td').each(function()
{
 
 var $a=$(this).text()
 var array=[];
 array=$a.split("/"); 
 if(currentmonth==array[1]&&array[0]==currentyear)
  {//$(this).text(array[2])
    if(array[2]==currentdate)
    {
     $(this).css('color','red')
     $(this).css('background-color','rgb(255,130,150)')
    }
  }
  else
  {//$(this).text(array[2]);
   $(this).css('color','#C0C0C0')
  }
  

});





 /*year2=parseInt($('#year').text());
 month2=parseInt($('#month').text())-1;

$("button:eq(1)").click(function()
{
 //var month;
 //var year;
 month2++;
 var currentfirstday2 = getfirstday(year2,month2);
 var position3 = getfirstday(year2,month2)-1;

 $('h1').text(month2);
 var date3 = new Date();

 var dayscount3 = function(num)
  {
   date3.setYear(year2);
   date3.setMonth(month2);
   //date3.setYear(currentyear);
   date3.setDate(num);
   return date3.toLocaleDateString();
  }


  if(currentfirstday2==0)
  {
     var m;
     var x = 1;
     var y = 1;

     for(var i=6;i>-1;i=i-1)
     { 
       m=dayscount3(x);
       $("td:eq("+i+")").text(m);
       x=x-1;
     }

     for(var i=6;i<42;i=i+1)
     { 
       m=dayscount3(y);
       $("td:eq("+i+")").text(m);
       y++;
     }

  }
  else
  {
    var x=1;
    var y=1;
    var m;

    for(var i=position3;i>-1;i=i-1)
    { 
      m=dayscount3(x);
      $("td:eq("+i+")").text(m);
      x--;
    }

    for(var i=position3;i<42;i=i+1)
    {
      m=dayscount3(y);
      $("td:eq("+i+")").text(m);
      y++;
    }
  };

$('td').each(function()
{
 
 var $a=$(this).text()
 var array=[];
 array=$a.split("/"); 
 if(currentmonth==array[1]&&array[0]==currentyear)
  {//$(this).text(array[2])
    if(array[2]==currentdate)
    {
     $(this).css('color','red')
     $(this).css('background-color','rgb(255,130,150)')
    }
  }
  else
  {//$(this).text(array[2]);
   $(this).css('color','#C0C0C0')
  }
  

*/
 
});   


});