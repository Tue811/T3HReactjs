import React from "react";
import Student from "./Student";
import Teacher from "./Teacher"

class Classroom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 20
        }
    }
    //Hàm này sẽ tự động chạy sau khi giao diện lần đầu tiên
    // componentDidMount() {
    //     let c=this.state.count
    //     setInterval(()=>{
    //         // c++;
    //         this.setState({
    //             count:c
    //         })
    //     },1000)
    // }

    addStudent(){
        let c=this.state.count;
        c++;
        this.setState({
            count:c
        })
    }

    render(){
        const arr=[{name:"Nguyễn Văn Đức", date:"08/11/2002" ,email:"duc@gmail.com", address:"Hà Nội"},
       {name:"Đào Huy Anh" ,date:"22/04/1999", email:"anh@gmail.com" ,address:"Bắc Giang"}];
       const teacher={
        name: "Trịnh Quang Hòa",
        email: "hoatq@email.com",
        age: 18,
        address: "Hà Nội, Việt Nam"
       }
       const c=this.state.count
        return (
            <div>
            <h2>Lớp Reactjs 202212</h2>
            
            <h3>Số lượng sinh viên: {c}</h3>
            <button onClick={this.addStudent.bind(this)}>Thêm sinh viên</button>
            <h3>Danh sách sinh viên</h3>

            <Teacher teacher={teacher}/>

            {
                arr.map(function(v,k){
                    return <Student data={v} />
                })
            }

        </div>
        )
    }
}

export default Classroom;