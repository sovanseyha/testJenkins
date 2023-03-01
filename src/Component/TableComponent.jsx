import React, { Component } from 'react'
import Swal from 'sweetalert2';
export default class TableComponent extends Component {
    showInfo = (data) => {
        Swal.fire({
            title: (`ID: ${data.id} \n Email: ${data.email} \n Name: ${data.userName} \n Age: ${data.age}`),
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                left top
                no-repeat
            `
        })
    }

    render() {
        return (
            <div>
                <div class="">
                    <table class="w-full text-gray-500  mt-10">
                        <thead class="text-lg text-gray-500 uppercase bg-[#E5D1FA]">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Username
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Age
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((item) => (
                                <tr class="odd:bg-white even:bg-[#E3DFFD] border-b">
                                    <td class="px-6 py-4">{item.id}</td>
                                    <td class="px-6 py-4">{item.email}</td>
                                    <td class="px-6 py-4">{item.userName}</td>
                                    <td class="px-6 py-4">{item.age}</td>
                                    <td class="px-6 py-4 ml-8">
                                        <button onClick={() => this.props.change(item)} class={item.status == "Pending" ? " bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded w-[100px]"
                                         : " bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-[100px]"}>
                                            {item.status}
                                        </button>
                                        &nbsp; &nbsp;
                                        <button onClick={() => { this.showInfo(item) }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Show More
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
