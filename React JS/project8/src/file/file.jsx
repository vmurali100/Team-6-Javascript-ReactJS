<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table {
        width: 100%;
      }
      ul#pagination li {
        border: 1px solid;
        list-style: none;
        float: left;
        padding: 5px;
        cursor: pointer;
      }
      img {
        width: 25px;
        cursor: pointer;
      }
      div#modal {
        width: 400px;
        height: 300px;
        border: 1px solid;
        position: absolute;
        background: white;
        margin-left: 30%;
        display: none;
      }
      #close{
          width: 15px;
          cursor: pointer;
          float: right;
      }
    </style>
  </head>
  <body>
    <div id="modal">
        <div id="close" onclick="closeModal()">
            X
        </div>
       <table border="1">
           <tr>
               <th style="width: 50%;">User ID</th> <td id="userId"></td>
           </tr>
           <tr>
            <th>ID</th> <td id="id"></td>
        </tr>
        <tr>
            <th>Title</th> <td id="title"></td>
        </tr>
        <tr>
            <th>Body</th> <td id="body"></td>
        </tr>
       </table>
    </div>
    <table border="1">
      <thead>
        <tr>
          <th>
            <input type="checkbox" name="" id="" />
          </th>
          <th>User Id</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="posts"></tbody>
    </table>
    <br>
    <br>
    <hr><hr>

    <table border="1">
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>User Id</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="seletedPosts"></tbody>
      </table>
    <ul id="pagination"></ul>
    <script>
      var allPosts = [];
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          allPosts = response;
          var totalNoOfPages = response.length / 10;
          var initialRows = response.slice(0, 10);
          displayData(initialRows,"#posts");
          createPagination(totalNoOfPages);
        });

      function createPagination(totalNoOfPages) {
        for (i = 1; i <= totalNoOfPages; i++) {
          var myLi = document.createElement("li");
          myLi.innerHTML = i;
          myLi.setAttribute("onclick", "gotoPage(" + i + ")");
          document.querySelector("ul").appendChild(myLi);
        }
      }

      function gotoPage(page) {
        console.log(page);
        var startIndex = page * 10 - 10;
        var newData = allPosts.slice(startIndex, startIndex + 10);
        displayData(newData,"#posts");
      }

      function displayData(data,tableName) {
        document.querySelector(tableName).innerHTML = "";
        data.forEach(function (post) {
          var myTr = document.createElement("tr");
          var myTd1 = document.createElement("td");
          var myCBox = document.createElement("input");
          myCBox.setAttribute("type", "checkbox");
          myCBox.setAttribute("onclick","selectRow("+post.id+")")
          myTd1.appendChild(myCBox);
          myTr.appendChild(myTd1);

          for (a in post) {
            var myTd = document.createElement("td");
            myTd.innerHTML = post[a];
            myTr.appendChild(myTd);
          }

          var actionTd = document.createElement("td");
          myTr.appendChild(actionTd);
          var img1 = document.createElement("img");
          img1.setAttribute("src", "./eye.png");
          img1.setAttribute("onclick","showPostDetails("+post.id+")")
          var img2 = document.createElement("img");
          img2.setAttribute("onclick","deletePost("+post.id+")")
          img2.setAttribute("src", "./delete.png");

          actionTd.appendChild(img1);
          actionTd.appendChild(img2);
          document.querySelector(tableName).appendChild(myTr);
        });
      }

      function showPostDetails (id){
          console.log(id)
          var clickedPost = allPosts.find((post)=> id == post.id)
          for(a in clickedPost){
              document.getElementById(a).innerHTML = clickedPost[a]
          }
          console.log(clickedPost)
          document.getElementById("modal").style.display="block";

      }

      function closeModal(){
        document.getElementById("modal").style.display="none"

      }

      function deletePost(id){
            allPosts = allPosts.filter((post)=> post.id !== id);
            var latestRows = allPosts.slice(0, 10);
            displayData(latestRows,"#posts");

      }
      var selectedPosts = []
      function selectRow(id){
        var selectedRow = allPosts.find((post)=> post.id == id);

        if(selectedPosts.length == 0){
            selectedPosts.push(selectedRow)
            displayData(selectedPosts,"#seletedPosts")
        }else{
            let check = selectedPosts.find((sp)=> sp.id == selectedRow.id)
            if(!check){
                selectedPosts.push(selectedRow);
                displayData(selectedPosts,"#seletedPosts")

            }else{
                selectedPosts=  selectedPosts.filter((sp)=>sp.id !== selectedRow.id)
                displayData(selectedPosts,"#seletedPosts")

            }
        }
      }
    </script>
  </body>
</html>