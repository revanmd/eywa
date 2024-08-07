"use client"

import { MdLayers } from "react-icons/md";
import { useState } from "react";
import Map from "../../components/Map";

const ObservationLayer = () => {
    return (
        <div>
            <div className="flex items-center justify-between mt-3 mb-3 text-black">
                <div className="text-xs font-semibold">
                    Vegetation Indices
                </div>
                <div className="text-lg">
                    -
                </div>
            </div>
            <div className="mb-3">
                <div class="flex items-center mb-2">
                    <input type="radio" class="h-3 w-3 border-gray-300 accent-indigo-100" />
                    <label class="text-xs font-light ml-2 block text-black">
                        Normalized Difference Vegetation Index
                    </label>
                </div>
                <div className="flex px-5">
                    <div className="flex-1 py-2 w-full bg-red-800 text-center justify-center text-xs font-semibold">
                        0.2
                    </div>
                    <div className="flex-1 py-2 w-full bg-yellow-500 text-center justify-center text-xs font-semibold">
                        0.5
                    </div>
                    <div className="flex-1 py-2 w-full bg-green-500 text-center justify-center text-xs font-semibold">
                        0.9
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div class="flex items-center mb-2">
                    <input type="radio" class="h-3 w-3 border-gray-300 accent-indigo-100" />
                    <label class="text-xs font-light ml-2 block text-black" >
                        Enhanced Vegetation Index
                    </label>
                </div>
                <div className="flex px-5">
                    <div className="flex-1 py-2 w-full bg-red-800 text-center justify-center text-xs font-semibold">
                        0.2
                    </div>
                    <div className="flex-1 py-2 w-full bg-yellow-500 text-center justify-center text-xs font-semibold">
                        0.5
                    </div>
                    <div className="flex-1 py-2 w-full bg-green-500 text-center justify-center text-xs font-semibold">
                        0.9
                    </div>
                </div>
            </div>
        </div>
    )
}

const ForecastLayer = () => {
    const [isActiveMenu, setIsActiveMenu] = useState("")

    return (
        <div>
            <div className="flex items-center justify-between mt-3 mb-3 text-black cursor-pointer"
                onClick={() => {
                    setIsActiveMenu("komoditas")
                }}
            >
                <div className="text-xs font-semibold">
                    Komoditas
                </div>
                <div className="text-lg">
                    {isActiveMenu == "komoditas" ? "-" : "+"}
                </div>
            </div>

            <div className={
                `overflow-hidden transition-all duration-500 ease-in-out ${isActiveMenu == "komoditas" ? 'max-h-96' : 'max-h-0'}`
            }>
                <label className="text-black text-xs mb-2 block">Pilih Waktu</label>
                <input type="date" className="w-full p-2 rounded bg-gray-200 text-black text-xs mb-2" />
                <label className="text-black text-xs mb-2 block mt-2">Kategori Komoditas</label>
                <div className="mb-5">
                    <div className="flex mb-3">
                        <div className="flex-1 py-2 w-full bg-red-800 text-center justify-center text-xs font-semibold">
                            Non Sawah
                        </div>
                        <div className="flex-1 py-2 w-full bg-green-500 text-center justify-center text-xs font-semibold">
                            Sawah
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-3 text-black cursor-pointer"
                onClick={() => {
                    setIsActiveMenu("umur")
                }}
            >
                <div className="text-xs font-semibold">
                    Umur Tanaman
                </div>
                <div className="text-lg">
                    {isActiveMenu == "umur" ? "-" : "+"}
                </div>
            </div>

            <div className={
                `overflow-hidden transition-all duration-500 ease-in-out ${isActiveMenu == "umur" ? 'max-h-96' : 'max-h-0'}`
            }>
                <label className="text-black text-xs mb-2 block">Pilih Waktu</label>
                <input type="date" className="w-full p-2 rounded bg-gray-200 text-black text-xs mb-2" />
                <div className="mb-3">
                    <label className="text-black text-xs mb-2 block mt-2">Hari Setelah Tanam (HST)</label>
                    <div className="flex">
                        <div className="flex-1 py-2 w-full bg-red-800 text-center justify-center text-xs font-semibold">
                            12
                        </div>
                        <div className="flex-1 py-2 w-full bg-red-600 text-center justify-center text-xs font-semibold">
                            24
                        </div>
                        <div className="flex-1 py-2 w-full bg-yellow-600 text-center justify-center text-xs font-semibold">
                            32
                        </div>
                        <div className="flex-1 py-2 w-full bg-yellow-500 text-center justify-center text-xs font-semibold">
                            48
                        </div>
                        <div className="flex-1 py-2 w-full bg-green-500 text-center justify-center text-xs font-semibold">
                            64
                        </div>
                        <div className="flex-1 py-2 w-full bg-green-600 text-center justify-center text-xs font-semibold">
                            128
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function PageHandler() {
    const [activeLayer, setActiveLayer] = useState("observation")
    const [isToogleLayerOpen, setIsToogleLayerOpen] = useState(true)
    const [isToggleMapSettingOpen, setIsToggleMapSettingOpen] = useState(false)

    const [mapType, setMapType] = useState(0)

    return (
        <main className="min-h-screen">
            <div className="fixed lg:top-10 lg:left-10 top-0 left-0 lg:w-80 w-screen p-4 rounded-lg border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-sm bg-zinc-200/30 from-inherit" style={{ zIndex: 10000, backdropFilter: "blur(3px)" }}>

                <div className="text-sm flex items-center justify-between cursor-pointer text-black"
                    onClick={() => {
                        setIsToogleLayerOpen(!isToogleLayerOpen)
                    }}
                >
                    <div className="flex items-center">
                        <MdLayers className="text-xl" />
                        <div className="ml-2 font-bold text-sm">
                            Layers
                        </div>
                    </div>
                    <div className="text-xl">
                        {isToogleLayerOpen ? "-" : "+"}
                    </div>
                </div>

                <div
                    className={
                        `overflow-hidden transition-all duration-500 ease-in-out ${isToogleLayerOpen ? 'max-h-96' : 'max-h-0'}`
                    }
                >
                    <div className="flex space-x-3 mt-3">
                        <button className="font-semibold select-none rounded text-gray-800 bg-gray-200 hover:bg-gray-300 text-xs px-5 py-2 flex-1"
                            onClick={() => {
                                setActiveLayer('observation')
                            }}
                        >
                            Observation
                        </button>
                        <button className="font-semibold select-none rounded text-gray-800 bg-gray-200 hover:bg-gray-300 text-xs px-5 py-2 flex-1"
                            onClick={() => {
                                setActiveLayer('forecast')
                            }}
                        >
                            Forecast
                        </button>
                    </div>

                    {activeLayer == "observation" ? <ObservationLayer /> : <ForecastLayer />}
                </div>


            </div>

            <Map
                mapType={mapType}
            />

            <div
                className="fixed bottom-5 right-5 w-48 p-3 rounded-lg border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-sm bg-zinc-200/30 from-inherit" style={{ zIndex: 10000, backdropFilter: "blur(3px)" }}>
                <div className="text-sm flex items-center justify-between cursor-pointer text-black"
                    onClick={() => {
                        setIsToggleMapSettingOpen(!isToggleMapSettingOpen);
                    }}
                >
                    <div className="flex items-center">
                        <MdLayers className="text-xl" />
                        <div className="ml-2 font-bold text-sm">
                            Map
                        </div>
                    </div>
                    <div className="text-xl">
                        {isToggleMapSettingOpen ? "-" : "+"}
                    </div>
                </div>
                <div className={
                    `overflow-hidden transition-all duration-500 ease-in-out ${isToggleMapSettingOpen ? 'max-h-96' : 'max-h-0'}`
                }>

                    <div
                        className="mt-3"
                        onClick={() => {
                            setMapType(0)
                        }}
                    >
                        <div className="flex space-x-2 rounded bg-slate-200 px-3 py-1 items-center text-black font-medium cursor-pointer">
                            <img
                                src="/map-02.png"
                                className="w-7"
                            />
                            <div className="text-xs">
                                Map Leaflet
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-2"
                        onClick={() => {
                            setMapType(1)
                        }}
                    >
                        <div className="flex space-x-2 rounded bg-slate-200 px-3 py-1 items-center text-black font-medium cursor-pointer">
                            <img
                                src="/map-01.png"
                                className="w-7"
                            />
                            <div className="text-xs">
                                Google Satellite
                            </div>
                        </div>
                    </div>

                    <div className="text-xs text-black font-semibold mt-3">
                        Overlay

                        <div className="flex block items-center mt-3">
                            <input type="checkbox"/>
                            <div className="inline ml-3">
                                Topografi
                            </div>
                        </div>

                        <div className="flex block items-center mt-2">
                            <input type="checkbox"/>
                            <div className="inline ml-3">
                                Wilayah Administrasi
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </main>
    )
}