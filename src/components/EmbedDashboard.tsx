import React, { useCallback } from "react";
import { LookerEmbedSDK } from "@looker/embed-sdk";
import { LoadingSpinner } from "./LoadingSpinner";
import { PageTitle } from "../types/types";

const EmbedDashboard: React.FC<PageTitle> = ({ title }) => {
    const [loading, setLoading] = React.useState<boolean>(true);

    const makeDashboard = useCallback((el: HTMLDivElement | null): void => {
        if (!el) {
            return;
        }
        el.innerHTML = "";

        LookerEmbedSDK.createDashboardWithId(
            "3"
        )
            .appendTo(el)
            .on("dashboard:loaded", () => {
                console.log("LookerEmbedSDK.createDashboardWithId()::Successfully Loaded!");
            })
            .build()
            .connect()
            .then(() => setLoading(false))
            .catch((error: Error) => {
                console.error("An unexpected error occurred", error);
            });
    }, []);

    return (
        <div className="flex flex-col h-full">
            <div className="bg-gray-100 p-4 border-b border-gray-300">
                <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            </div>
            {loading && <LoadingSpinner />}
            <div
                ref={makeDashboard}
                className="w-full h-[calc(100%-30px)] overflow-hidden relative"
            ></div>
        </div>
    );
};




export default EmbedDashboard;
