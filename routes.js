const { allNotice } = require("./hendlers/RouteHandlers/all-notice.js");
const { allStudents } = require("./hendlers/RouteHandlers/all-students.js");
const { schoolNotice } = require("./hendlers/RouteHandlers/schooleNotice.js");
const { studentLogin } = require("./hendlers/RouteHandlers/studentLogin");
const { teacherLogin } = require("./hendlers/RouteHandlers/teacherLogin");

const routes = {
   "teacher/login": teacherLogin,
   "student/login": studentLogin,
   "all-students": allStudents,
   "notice": schoolNotice,
   "all-notice": allNotice,
};

module.exports = routes;
