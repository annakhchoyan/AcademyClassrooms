// const courses = [
//     { course: 'Math', lecturer: 'John Doe', group: 'A' },
//     { course: 'Physics', lecturer: 'Jane Smith', group: 'B' },
//     { course: 'English', lecturer: 'David Johnson', group: 'A' },
//     // Mock data for courses
//   ];
  
//   function displayCourses(filteredCourses) {
//     const tableBody = document.getElementById('courseTableBody');
//     tableBody.innerHTML = '';
  
//     filteredCourses.forEach(course => {
//       const row = document.createElement('tr');
//       row.innerHTML = `
//         <td>${course.course}</td>
//         <td>${course.lecturer}</td>
//         <td>${course.group}</td>
//       `;
//       tableBody.appendChild(row);
//     });
//   }
  
//   function searchCourses() {
//     const searchInput = document.getElementById('searchInput').value;
//     const regex = new RegExp(searchInput, 'i');
//     const filteredCourses = courses.filter(course => {
//       return regex.test(course.lecturer) || regex.test(course.group);
//     });
//     displayCourses(filteredCourses);
//   }
  
//   // Initial display of all courses
//   displayCourses(courses);
  