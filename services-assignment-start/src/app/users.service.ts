export class UsersService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  countTimes=0;
    users= [
        {
            name:'Max', 
            status:'active'
        },
        {
            name:'Anna', 
            status:'active'
        },
        {
            name:'Chris', 
            status:'inactive'
        },
        {
            name:'Manu', 
            status:'inactive'
        }

    ];

//   onSetToInactive(id: number, status:string) {
//     this.inactiveUsers.push(this.activeUsers[id]);
//     this.activeUsers.splice(id, 1);
//   }

//   onSetToActive(id: number) {
//     this.activeUsers.push(this.inactiveUsers[id]);
//     this.inactiveUsers.splice(id, 1);
//   }
  setStatus(id:number,status:string){
      this.users[id].status=status;
    //   this.countTimes++;
  }
}