import { getUsers, deleteUser } from './api/userApi';

//Populate table of user via API call
getUser().then(results => {
            let usersBody = "";
            result.forEach(user => {
                usersBody += `<tr>
                  <td><a href="#" data-id="${user.id}" class="deleteUser" >Delete</a></td>
                  <td>${user.id}</td>
                  <td>${user.firstName}</td>
                  <td>${user.lastName}</td>
                  <td>${user.email}</td>
                 </tr>`
            });
            global.document.getElementById('users').innerHTML = usersBody;

            const deleteLinks = global.getElementsByClassName('deleteUser');

            //Must use array. from to create a real array from a DOM collection
            //getElementsByClassname only returns an "array like" object
            Array.from(deleteLinks, links => {
                    link.onclick = function(event) {
                        const element = event.Target;
                        event.preventDefault();
                        deleteUser(element.attributes["data-id"].val
                            const row = element.parentNode.parentNode; row.parentNode.removeChild(row);
                        };
                    });
            });
