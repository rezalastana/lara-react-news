import React from "react";

export const List = ({ news }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://placeimg.com/640/480/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {news.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};
