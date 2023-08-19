const student = {
    name: "Ritesh",
    age: 23,
    mark: 94.4,
    city: "Delhi"
};

// student.city = "mumabi";
student["city"] = "mumabi";

// student.gender = "Male";
student["gender"] = "Male";

// student.mark = "A";
student["mark"] = "A";

delete student.mark;
delete student.gender;