// const square = function (x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x   

// console.log(square(6))

// const event = {
//     name: 'Birthday Party',
//     guestList: ['Hitesh','Jen','XYZ'],
//     printGuestList() {
//         const that = this
//         console.log('Guest List For '+this.name)

//         this.guestList.forEach( function(guest){
//             console.log(guest+' is attending '+that.name)
//         })
//     }
// }

    
const event = {
    name: 'Birthday Party',
    guestList: ['Hitesh','Jen','XYZ'],
    printGuestList() {
        console.log('Guest List For '+this.name)

        this.guestList.forEach( (guest)=>{
            console.log(guest+' is attending '+this.name)
        })
    }
}
event.printGuestList()
