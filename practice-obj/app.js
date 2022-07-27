// const course = {
//     lecture: 10,
//     section: 3,
//     title: "Javascript",
//     enroll(){
//         console.log("You are sucessfully enrolled")
//     }
// }

// course.enroll()
// console.log(course.lecture)
// console.log(course)
// course.price = 999
// console.log(course)

// Factory function --> Naming convention with camelcase

// function createCourse(title){
//     return {
//         title: title,
//         enroll(){
//             console.log('You are sucessfully enrolled the course')
//         }
//     }
// }
// const course = createCourse('javascript')
// //console.log(course)
// course.enroll()


// Constructor Function -->Naming convention with pascalcase 

function Course(){
    this.title = 'Javascript'
    this.enroll= function(){
        console.log('You are sucessfully enrolled the course')
    }
}
const course = new Course()
//course.enroll()
delete course.title
//console.log(course)
console.log(course.title)