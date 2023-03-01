// / use shortcut RCC or RCE to create
import React, { Component } from 'react'
import TableComponent from './TableComponent'

export default class InputComponent extends Component {
    // / create State in constructor (in constructor have Super keyword)
    constructor() {
        super()
        this.state = {
            // / variable in state is Object 
            ///array object

            newEmail: "null",
            newName: "null",
            newAge: "null",
            newStatus: "Pending",

            userInfo: [
                { id: 1, email: "rotanakkosal03@gmail.com", userName: "Rotanakkosal", age: 21, status: "Pending" }
            ],
            // / empty variable for store
            newInfo: "",
        }
    }

    // / arrow function
    // - to get obj onChange, in function we need a parameter 1
    // - set want you want in newStu (this.setState)
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    onSubmit = () => {
        const newObj = {
            id: this.state.userInfo.length + 1,
            email: this.state.newEmail,
            userName: this.state.newName,
            age: this.state.newAge,
            status: this.state.newStatus,
        }
        this.setState({
            // / spread operator 
            userInfo: [...this.state.userInfo, newObj], newInfo: ""
        })

    }

    clickToChange = (index) => {
        // console.log(index);
        let tmp = this.state.userInfo
        // console.log(tmp);
        tmp.map((haha) => {
            if (haha.id == index.id) {
                index.status = index.status == "Pending" ? "Done" : "Pending"
                console.log(index.status);
            }
        })
        this.setState({
            ...this.state.userInfo
        })
        // console.log(tmp);

    }

    render() {
        return (
            <div className=''>
                <div class="mb-4">
                    <label class="block text-gray-500 font-bold text-5xl pt-10">
                        <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500'><span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>Please Fill Your</span> Information</p>
                    </label>
                </div>
                <div class="mb-4">
                    <form className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <label class="mr-[900px] block text-gray-700 text-lg mb-2" for="email">
                            Your Email
                        </label>
                        <input
                            onChange={this.handleChange}
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[1000px] py-2 px-4 text-gray-700"
                            type="text"
                            id="email"
                            placeholder="name@gmail.com"
                            name='newEmail'
                        />

                        <label class="mr-[900px] block text-gray-700 text-lg mb-2 mt-5" for="username">
                            Username
                        </label>
                        <input
                            onChange={this.handleChange}
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[1000px] py-2 px-4 text-gray-700"
                            type="text"
                            id="username"
                            placeholder="username"
                            name='newName'
                        />

                        <label class="mr-[960px] block text-gray-700 text-lg mb-2 mt-5" for="age">
                            Age
                        </label>
                        <input
                            onChange={this.handleChange}
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[1000px] py-2 px-4 text-gray-700"
                            type="text"
                            id="age"
                            placeholder="age"
                            name='newAge'
                        />


                    </form>
                </div>


                {/* / BUTTON  */}
                <div>
                    <button onClick={this.onSubmit} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Register
                    </button>
                </div>

                {/*  Table for display */}
                <TableComponent data={this.state.userInfo} change={this.clickToChange} />

            </div>
        );
    }
}
