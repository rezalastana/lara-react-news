//buat otomatis dengan rfc
import React from "react";
//jangan lupa import inertia, ambil aja dari Welcome.jsx
import { Link, Head } from "@inertiajs/react";
//import Navbar
import { Navbar } from "@/Components/Navbar";
//import List
import List from "@/Components/Homepage/List";

export default function Homepage(props) {
    console.log(props.news);
    return (
        <div className="min-h-screen bg-neutral-700 text-white">
            <Head title={props.title} />
            <Navbar />
            <div className="m-3">
                <List news={props.news} />
            </div>
        </div>
    );
}
