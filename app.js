
let state = {
 employees: [
    {
        id: uuidv4(),
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@mail.com',
        phoneNumber: '90566-7771',
        skill: 'Full Stack Developer',
        img: 'employee1.png'
    },
    {
        id: uuidv4(),
        firstName: 'Ervin',
        lastName: 'O-Brien',
        email: 'ervin@mail.tv',
        phoneNumber: '770-736-8031',
        skill: 'Backend Developer',
        img: 'employee2.png'
    },
    {
        id: uuidv4(),
        firstName: 'Christine',
        lastName: 'Bauch',
        email: 'christina@yesenia.net',
        phoneNumber: '463-123-4447',
        skill: 'Frontend Developer',
        img: 'employee3.png'
    },
    {
        id: uuidv4(),
        firstName: 'Patricia',
        lastName: 'Lebsack',
        email: 'patricia@yahoo.com',
        phoneNumber: '493-170-9623',
        skill: 'Tester',
        img: 'employee4.png'
    },
    {
        id: uuidv4(),
        firstName: 'Chelsey',
        lastName: 'Kamren',
        email: 'c.kamren@annie.ca',
        phoneNumber: '411-889-9553',
        skill: 'Junior Developer',
        img: 'employee5.png'
    },
    {
        id: uuidv4(),
        firstName: 'Nicholas',
        lastName: 'Runolfsdottir',
        email: 'nicholas@rosamond.me',
        phoneNumber: '211-789-7753',
        skill: 'Full Stack Developer',
        img: 'employee7.png'
    },
    {
        id: uuidv4(),
        firstName: 'Curtis',
        lastName: 'Weissnat',
        email: 'W.curtis@billy.biz',
        phoneNumber: '321-785-9553',
        skill: 'Frontend Developer',
        img: 'employee6.png'
    },
    {
        id: uuidv4(),
        firstName: 'Clementina',
        lastName: 'DuBuque',
        email: 'Clem.Padberg@annie.ca',
        phoneNumber: '77454-958-785',
        skill: 'Backend Developer',
        img: 'employee8.png'
    },
    {
        id: uuidv4(),
        firstName: 'Dennis',
        lastName: 'Schulist',
        email: 'dennis_h@jasper.info',
        phoneNumber: '7845-4542-1554',
        skill: 'Tester',
        img: 'employee9.png'
    }

],
closeEditForm: '',
};

// This function controls the dark mode/light mode feature of the webpage.
// When the user clicks on the 'Dark Mode'/'Light Mode' button, the function toggles the dark/light mode.
// The background color and text color of the page are changed based on the mode.
// The color of the 'Add New Employee' button is also changed based on the mode.
darkLight = () => {

    const checkButton = document.getElementById('darkLightBtn');
    
    isOnClick = false;

    checkButton.onclick = () => {

        isOnClick = !isOnClick;

        if (isOnClick) {
            checkButton.innerHTML = `<i class="bi bi-cloud-moon"></i> Dark Mode`;
            checkButton.classList.remove('btn-danger');
            checkButton.classList.add('btn-light');
            document.body.style.backgroundColor = "#0d0d0d";
            document.body.style.color = 'white';
            document.getElementById('root').classList.add('text-black');
            document.getElementById('newEmployeeButton').classList.remove('btn-primary');
            document.getElementById('newEmployeeButton').classList.add('btn-success')
        }

        else {
            checkButton.innerHTML = `<i class="bi bi-brightness-high"></i> Light Mode`;
            checkButton.classList.add('btn-danger');
            checkButton.classList.remove('btn-light');
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
            document.getElementById('newEmployeeButton').classList.remove('btn-success');
            document.getElementById('newEmployeeButton').classList.add('btn-primary')
        }

    }
};

//Search function
liveSearch = () => {

    let allEmployees = state.employees;
    let searchParameter = document.getElementById('searchbox').value.toLocaleLowerCase().trim();
    let myListPage = document.getElementById('myList');

    //First result onclick hidden result Html!
    searchResultClosed = () => {
    document.getElementById('result').onclick = () => {
    myListPage.innerHTML = "" };
    };

    myListPage.innerHTML = "";
          
    for (let i = 0; i < allEmployees.length; i++) {

        if (allEmployees[i].firstName.toLocaleLowerCase().includes(searchParameter)
            && searchParameter !== "") {

            myListPage.innerHTML += `

            <li class="list-group-item"><a id="result" class="text-decoration-none" 
            href="#${allEmployees[i].id}">${allEmployees[i].firstName} 
            ${allEmployees[i].lastName}</a></li>
            `; 

            searchResultClosed();
        }
           
    }
};

//AlertBox Function
renderAlert = () => {

    document.getElementById("alert").innerHTML = `
  <div class="alert alert-success m-0" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Successful upload</p>
    <p id="closeBtn"class="btn btn-success mt-3">Ok<p>
  </div>
  `;

    closeBtn = document.getElementById("closeBtn")
    closeBtn.onclick = () => {
        if (state.closeEditForm === '') {
            document.getElementById('alert').innerHTML = "";
        }
    }
};

//Render Edit Function
renderEdit = () => {

for (let editBtn of document.querySelectorAll('.edited-button')) {

    editBtn.onclick = (e) => {

        let id = e.target.dataset.employeeid;

        let editFormHtml;

        //Finding the edit form for the selected employee.
        for (singleEmployee of document.querySelectorAll('.editForm')) {
            if (singleEmployee.id === id) {
                editFormHtml = singleEmployee;
                break;
            }
        };

        let editFoundIndex;

        //Finding the selected employee in the state array.
        for (employee of state.employees) {
            if (employee.id === id) {
                editFoundIndex = employee;
                break;
            }
        };

        //Generating the edit form with the selected employee's data.
        editFormHtml.innerHTML = `
        <form id="edit-form" action="submit">
         <h4 class="text-center mt-3">Edit Employee</h4>
         <div class="row p-3">
            <div class="col-md-6">
                <div class="form-group mb-2">
                    <label for="Firstname">First Name</label>
                     <input class="form-control ${editFoundIndex.firstName === "" ? "bg-danger" : "" }" 
                     type="text" 
                     name="firstname" 
                     id="firstname"
                     value=${editFoundIndex.firstName}>
                </div>
             </div>
             <div class="col-md-6">
                <div class="form-group">
                    <label for="Lastname">Last Name</label>
                     <input class="form-control ${editFoundIndex.lastName === "" ? "bg-danger" : "" }"
                     type="text" 
                     name="lastname" 
                     id="lastname" 
                     value=${editFoundIndex.lastName}>
                </div>
             </div>
             <div class="row-md-12">
                <div class="form-group">
                    <label class="mt-3" for="E-mail">E-mail</label>
                     <input class="form-control ${editFoundIndex.email === "" ? "bg-danger" : "" }" 
                     type="email" 
                     name="email" 
                     id="email" 
                     value=${editFoundIndex.email}>
                </div>
             </div>
             <div class="col-md-6">
              <div class="form-group">
                <label class="mt-3" for="Phone number">Phone number</label>
                 <input class="form-control ${editFoundIndex.phoneNumber === "" ? "bg-danger" : "" }" 
                 type="text" 
                 name="phone" 
                 id="phone" 
                 value=${editFoundIndex.phoneNumber}>
              </div>
             </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="mt-3" for="">Skill</label>
                    <select selected class="form-select ${editFoundIndex.skill === "select" ? "bg-danger text-white" : "" }"
                        aria-label="disabled  example name=" skill" id="skill">
                        <option selected>${editFoundIndex.skill}</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="FullStack Developer">Full Stack Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Tester">Tester</option>
                        <option value="Junior Developer">Junior Developer</option>
                    </select>
                </div>
            </div>
         </div>
          </div>
            <div class="m-3">
              <button id="editBtn" type="submit" class="btn btn-success">Submit <i class="bi bi-check"></i></button>
              <button id="editBackBtn" type="submit" class="btn btn-outline-primary">Back</button> 
            </div>
        </form>`;

      //edit  
      document.getElementById('editBackBtn').onclick = () => { document.getElementById('edit-form').innerHTML = "" };

        let editedForm = document.getElementById('edit-form');
        editedForm.onsubmit = (e) => {

            e.preventDefault();

            const employeeFirstName = sanitizeString(e.target.elements.firstname.value);
            const employeeLastName = sanitizeString(e.target.elements.lastname.value);
            const employeeEmail = e.target.elements.email.value;
            const employeePhoneNumber = sanitizeString(e.target.elements.phone.value);
            const employeeSkill = e.target.elements.skill.value;
            const employeeImg = editFoundIndex.img


            for (let i = 0; i < state.employees.length; i++) {
                if (state.employees[i].id === id) {
                    editFoundIndex = i;
                }
            }

            state.employees[editFoundIndex] =
            {
                id: id,
                firstName: employeeFirstName,
                lastName: employeeLastName,
                email: employeeEmail,
                phoneNumber: employeePhoneNumber,
                skill: employeeSkill,
                img: employeeImg
            }

            //render
            renderEmployees();
        }
    }
 }
};

//Render Delete Function
// Function to render 
//the delete modal and handle the deletion of an employee when the "Delete" button is clicked.
renderDelete = () => {

 for (let deletedButton of document.querySelectorAll('.deleted-button')) {
     deletedButton.onclick = (e) => {

        let id = e.target.dataset.employeeid;

        let foundIndex;

        document.getElementById('modalBox').innerHTML = `
        <div class="modal d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger">Attention!</h5>
                    <button id="closeBtn1" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Are you Delete <b> ${state.employees.find((employee) => employee.id === id).firstName}
                            ${state.employees.find((employee) => employee.id === id).lastName}
                        </b> Profile?</p>
                </div>
                <div class="modal-footer">
                    <button id="deleteBtn" type="button" class="btn btn-danger">Delete Employee</button>
                    <button id="closeBtn2" type="button" class="btn btn-outline-success" data-dismiss="modal">Back</button>
                </div>
            </div>
        </div>
        </div>`;

        const closeButton1 = document.getElementById('closeBtn1');
        
        closeButton1.onclick = () => {
         document.getElementById('modalBox').innerHTML = '';
        }

        const closeButton2 = document.getElementById('closeBtn2');

        closeButton2.onclick = () => {
         document.getElementById('modalBox').innerHTML = '';
        }


        deleteEmployee = () => {

            for (let i = 0; i < state.employees.length; i++) {
                if (state.employees[i].id === id) {
                    foundIndex = i;
                    break;
                }
            }
            state.employees.splice(foundIndex, 1);
            renderEmployees();
        }

        const deleteEmployeeBtn = document.getElementById('deleteBtn');

        deleteEmployeeBtn.onclick = () => {
           deleteEmployee();
       }

    }
 }
};

//Remder All Employee Function
renderEmployees = () => {

 let employeesListHtml = '';

  for (let employee of state.employees) {
 
     employeesListHtml += `     
     <div class="col-sm-12 col-md-6 col-lg-4">
     <div class="card mt-2 w-60 m-auto">
        <img src="./img/${employee.img}" class="card-img-top img-fluid"
            alt="${employee.firstName} ${employee.lastName}">
        <div class="card-body">
            <h5 class="card-title mb-2">${employee.firstName} ${employee.lastName}</h5>
            <p><i class="bi bi-envelope-fill"></i> Mail: ${employee.email}</p>
            <p><i class="bi bi-telephone-fill"></i> Phone Number: ${employee.phoneNumber}</p>
            <p><i class="bi bi-bar-chart-fill"></i> Skill: ${employee.skill}</p>
        </div>
        <div>
            <div id="modalBox"></div>
            <button class="btn btn-outline-danger m-2 deleted-button" data-employeeid=${employee.id}><i
                    class="bi bi-trash3" data-employeeid=${employee.id}></i></button>
            <button class="btn btn-success mr-1 edited-button" data-employeeid=${employee.id}><i
                    class="bi bi-pencil-fill" data-employeeid=${employee.id}></i>
            </button>
            <div id=${employee.id} class="editForm"></div>
        </div>
     </div>
     </div>`;
    };

 document.getElementById('root').innerHTML = employeesListHtml;

 document.getElementById('workersNumber').innerHTML = `
 Number of Employees <p class="text-danger"><b>${state.employees.length}</b></p>`;

 renderDelete();
 renderEdit();
 darkLight();
}
//All Employee Render function run -> window.onload event
window.onload = renderEmployees;


//Add New Employee FORM
const addNewEmployee = document.getElementById('newEmployeeButton');
addNewEmployee.onclick = () => {

 const addNewEmployeeFormHtml = `
 <form id="create-form" action="submit" class="m-3">
 <h4 class="text-center p-3">New Employee</h4>
 <div class="row">

    <div class="col-md-6">
        <div class="form-group">
            <label for="Firstname">First Name</label>
            <input class="form-control" type="text" name="firstname" id="firstname">
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label for="Lastname">Last Name</label>
            <input class="form-control" type="text" name="lastname" id="lastname">
        </div>
    </div>
    <div class="row-md-12">
        <div class="form-group">
            <label class="mt-3" for="E-mail">E-mail</label>
            <input class="form-control" type="email" name="email" id="email">
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label class="mt-3" for="Phone number">Phone number</label>
            <input class="form-control" type="text" name="phone" id="phone">
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label class="mt-3" for="">Skill</label>
            <select class="form-select" aria-label="Default select example name=" skill" id="skill">
                <option selected disabled value="select">Select Skill</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Tester">Tester</option>
                <option value="Junior Developer">Junior Developer</option>
            </select>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label class="mt-3" for="Profile Image">Profile Image</label>
            <input class="form-control" type="file" name="image" id="image">
        </div>
    </div>
 </div>
 </div>
     <button id="submitBtn" type="submit" class="btn btn-success mt-5">Submit <i class="bi bi-check"></i></button>
     <button id="submitBackBtn" type="submit" class="btn btn-outline-primary mt-5">Back</button>
 </form>`;

 document.getElementById('newEmployeeForm').innerHTML = addNewEmployeeFormHtml;
 document.getElementById('submitBackBtn').onclick = () => 
 {document.getElementById('create-form').innerHTML = "" };
}

//Onsubmit event -> New Employee Form
const newEmployeeFormSubmit = document.getElementById('newEmployeeForm');
newEmployeeFormSubmit.onsubmit = (e) => {

 e.preventDefault();

  const employeeFirstName = sanitizeString(e.target.elements.firstname.value);
  const employeeLastName = sanitizeString(e.target.elements.lastname.value);
  const employeeEmail = e.target.elements.email.value;
  const employeePhoneNumber = sanitizeString(e.target.elements.phone.value);
  const employeeSkill = e.target.elements.skill.value;
  const profileImg = e.target.image.value.replace("C:\\fakepath\\", "") 
  //image upload from only img folder!

  state.employees.push({
    id: uuidv4(),
    firstName: employeeFirstName,
    lastName: employeeLastName,
    email: employeeEmail,
    phoneNumber: employeePhoneNumber,
    skill: employeeSkill,
    img: profileImg
  });

 //render 
 renderEmployees();
 //alert
 renderAlert();
 if (state.closeEditForm === '') {
    document.getElementById('create-form').innerHTML = '';
    return;
 };
}
//uniq id
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
}
//sanitize
function sanitizeString(str){
    str = str.replace(/([^a-z0-9áéíóúñü_-\s\.,]|[\t\n\f\r\v\0])/gim,"");
    return str.trim();
}


