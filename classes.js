// class Academy {
//    constructor(section, totalStudents) {
//       this.section = section;
//       this.totalStudents = totalStudents;
//    }
//    getData() {
//       console.log(`Hello ${this.section} student`);
//    }
// }

// let webClass = new Academy("web", 15);
// webClass.getData();

// // let mobileClass = new Academy("mobile", 2);
// // console.log(mobileClass);

// class studentData {
//    constructor(name, gender, course, YOB) {
//       this.name = name;
//       this.gender = gender;
//       this.course = course;
//       this.YOB = YOB;
//    }
//    studentDetails() {
//       let details = {
//          name: this.name,
//          gender: this.gender,
//          course: this.course,
//          YOB: this.YOB,
//       };
//       console.log(details);
//    }
//    studentAge() {
//       let year = new Date();
//       let cYear = year.getFullYear();
//       let age = cYear - this.YOB;
//       return age;
//    }
//    studentStipend() {
//       let condition =
//          this.studentAge() >= 15 &&
//          this.studentAge() <= 20 &&
//          this.course == "web"
//             ? 10000
//             : this.studentAge() >= 21 &&
//               this.studentAge() <= 30 &&
//               this.course == "android"
//             ? 20000
//             : this.studentAge() >= 21 &&
//               this.studentAge() <= 30 &&
//               this.course == "web"
//             ? 15000
//             : this.studentAge() >= 15 &&
//               this.studentAge() <= 20 &&
//               this.course == "android"
//             ? 15000
//             : this.studentAge() >= 20 && this.studentAge() <= 65
//             ? 50000
//             : "You don't match the condition";
//       console.log(condition);
//    }
// }

// let student1 = new studentData("hhh", "male", "android", 2000);
// student1.studentAge();
// student1.studentStipend();

class checkYuGiOh {
   constructor(n) {
      this.n = n;
      const arr = [];
      for (let i = 1; i <= n; i++) {
         i % 2 == 0 && i % 3 == 0 && i % 5 == 0
            ? arr.push("yu-gi-oh")
            : i % 3 == 0 && i % 5 == 0
            ? arr.push("gi-oh")
            : i % 2 == 0 && i % 5 == 0
            ? arr.push("yu-oh")
            : i % 2 == 0 && i % 3 == 0
            ? arr.push("yu-gi")
            : i % 5 == 0
            ? arr.push("oh")
            : i % 3 == 0
            ? arr.push("gi")
            : i % 2 == 0
            ? arr.push("yu")
            : arr.push(i);
      }
      return arr;
   }
}

const check = new checkYuGiOh(30);
console.log(check);

// function hello(n) {
//    const arr = [];
//    for (let i = 1; i <= n; i++) {
//       arr.push(i);
//    }
//    return arr;
// }
// console.log(hello(10));
