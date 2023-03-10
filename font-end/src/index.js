showHome()
function showList() {
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/products",
        headers: {
            'Content-Type': 'application/json',
        },
        success : (products) => {
            let html = ''
            products.map(item => {
                html += `<tr>
                             <th scope="row">${item.id}</th>                          
                             <td>${item.name}</td>
                             <td>${item.price}</td>
                             <td><img src="${item.image}" alt="" style="width: 100px; height: 100px"></td>
                             <td>${item.nameCategory}</td>
                             <td>
                                 <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${item.id}">Delete</button>
                        <div class="modal fade" id="deleteModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Delete ${item.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to delete???
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="remove(${item.id})">Yes</button>
                            </div>
                            </div>
                        </div>
                        </div>
</td>
                             <td><button onclick="showFormEdit(${item.id})" type="button" class="btn btn-success">Edit</button></td>                       
                         </tr>`
            })
            $("#tbody").html(html)
        }
    })
}
function showFormAdd() {
    $("#body").html(`
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">price</label>
    <input type="text" class="form-control" id="price" aria-describedby="price" placeholder="price">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">image</label>
    <input type="file" id="image" onchange="uploadImage(event)">
  </div>
   <div class="form-group">
     <div id="imgDiv"></div>
  </div>
   <div class="form-group">
    <label for="exampleFormControlSelect1">Lo???i</label>
    <select class="form-control" id="category" name="category">
    <option selected></option>
    </select>
   </div>
  <button class="btn btn-primary" onclick="add()">Th??m M???i</button>
`)
    showCategory()
}
function showHome() {
    $("#body").html(`
  <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">image</th>
      <th scope="col">Lo???i</th>
      <th scope="col" colspan="2" style="text-align: center">Action</th>
    </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
</table>
    `)
    showList()
}
function add() {
    let name = $("#name").val();
    let price = $("#price").val();
    let image = localStorage.getItem('image');
    let category = $('#category').val()
    let product = {
        name: name,
        image: image,
        price: price,
        category: category
    }
    console.log(product)
    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/products",
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(product),
        success : () => {
            showHome()
        }
    })
}
function showFormEdit(id) {
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        success : (products) => {
            console.log(products)
            $("#body").html(`
<div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="name" value="${products[0].name}">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">price</label>
    <input type="text" class="form-control" id="price" aria-describedby="price" placeholder="price" value="${products[0].price}">
  </div>
  <div class="form-group" id="imgDiv">
      <label for="exampleInputPassword1">image</label>
    <img src="${products[0].image}" alt="" style="width: 100px; height: 100px">  
  </div>
  <div class="form-group">
     <input type="file" id="image" onchange="editFile(${products[0].id},event)">
  </div>
   <div class="form-group">
    <label for="exampleFormControlSelect1">Lo???i</label>
    <select class="form-control" id="category" name="category">
        <option selected>${products[0].nameCategory}</option>
        
    </select>
   </div>
  <button class="btn btn-primary" onclick="edit(${products[0].id})">Ch???nh S???a</button>
`)
        }
    })
    showCategory()
}
function edit(id) {
    let name = $("#name").val();
    let price = $("#price").val();
    let image = localStorage.getItem('image');
    let category = $("#category").val()
    let product = {
        name: name,
        image: image,
        price: price,
        category: category
    }
    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(product),
        success : () => {
            showHome()
        }
    })
}
function remove(id) {
        $.ajax({
            type: 'DELETE',
            url: `http://localhost:3000/products/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
            success : () => {
                showHome()
            }
        })
}

const firebaseConfig = {
    apiKey: "AIzaSyA0Hq3Fg4xb3uM2O3u1UDF4DacNqAewiJY",
    authDomain: "fir-b76ef.firebaseapp.com",
    projectId: "fir-b76ef",
    storageBucket: "fir-b76ef.appspot.com",
    messagingSenderId: "775131288750",
    appId: "1:775131288750:web:7e23408e9497610e63493f"
};
firebase.initializeApp(firebaseConfig);
function uploadImage(e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" alt="">`
            localStorage.setItem('image', downloadURL);
        });
}
function editFile(id, e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" alt="">`
            localStorage.setItem('image', downloadURL);
        });
}
function showCategory() {
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/category",
        headers: {
            'Content-Type': 'application/json',
        },
        success : (category) => {
            let html = ''
            category.map(item => {
                html += `<option value="${item.id}">${item.nameCategory}</option>`
            })
            $("#category").html(html)
        }
    })
}
function searchProduct(value) {
    let name = value.toLowerCase()
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/find-by-name?name=${name}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(name),
        success : (products) => {
            $("#body").html(`
  <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">image</th>
      <th scope="col">Lo???i</th>
      <th scope="col" colspan="2" style="text-align: center">Action</th>
    </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
</table>
    `)
            let html = ''
            products.map(item => {
                html += `<tr>
                             <th scope="row">${item.id}</th>                          
                             <td>${item.name}</td>
                             <td>${item.price}</td>
                             <td><img src="${item.image}" alt="" style="width: 100px; height: 100px"></td>
                             <td>${item.nameCategory}</td>
                             <td>
                                 <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${item.id}">Delete</button>
                        <div class="modal fade" id="deleteModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Delete ${item.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to delete???
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="remove(${item.id})">Yes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        </td>
                             <td><button onclick="showFormEdit(${item.id})" type="button" class="btn btn-success">Edit</button></td>                       
                         </tr>`
            })
            $("#tbody").html(html)
        }
    })
}