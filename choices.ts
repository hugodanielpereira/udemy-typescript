// enum Role {
//   Admin,
//   Editor,
//   Guest
// }

//let userRole: Role = 0; // Role.Admin
//userRole = Role.Editor;
//userRole = 'Admin'; //error

let userRole: 'Admin' | 'Editor' | 'Guest' = 'Admin';
userRole = 'Editor';
//userRole = 'SuperAdmin'; //error

type Role = 'Admin' | 'Editor' | 'Guest';
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: 'read' | 'write' | 'execute';
};
