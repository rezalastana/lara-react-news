//buat otomatis dengan rfc
import React from "react";
//jangan lupa import inertia, ambil aja dari Welcome.jsx
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props.news);
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-700 text-white">
            <Head title={props.title} />
            <div>
                <p>{props.description}</p>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div className="p-4 m-2 bg-slate-100 border shadow-md text-black">
                                <p className="text-2xl">{data.title}</p>
                                <p className="pt-2 pb-2">{data.description}</p>
                                <p className="text-sm">{data.category}</p>
                                <p className="text-sm">{data.author}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Data Berita Tidak ada</p>
                )}
            </div>
        </div>
    );
}
