import React from "react";

export default function Gallery() {
    return (
        <div className="container grid grid-cols-2 gap-4 lg:grid-cols-4">
            <img
                src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/d7faaf42-4749-4403-66ec-ae2238196e00/public"
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:col-start-3 lg:row-start-1"
            />
            <img
                className="w-full h-full"
                src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/07a99c41-5a03-40e3-dab2-22278a6af700/Tissue"
            />
            <img
                className="w-full h-full"
                src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/571a8439-08a8-4d69-2b6f-9979f6995b00/public"
            />
            <img
                className="w-full h-full"
                src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
            />
            <img
                className="w-full h-full"
                src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
            />
        </div>
    );
}