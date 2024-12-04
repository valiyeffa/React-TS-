import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface fakeApiType {
    id:number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

interface dummyApiType {
    id:number,
    title: string,
    price: number,
    description: string,
    category: string,
    images: string
}

interface jsonApiType {
    id:number,
    title: string,
    body: string
}

interface contextType {
    fakeApi: fakeApiType[],
    dummyApi: dummyApiType[],
    jsonApi: jsonApiType[]
}

export const DataContext = createContext<contextType | null>(null);

export const DataProvider = ({ children }: React.ReactNode) => {
    const [fakeApi, setFakeApi] = useState<fakeApiType[]>([]);
    const [dummyApi, setDummyApi] = useState<dummyApiType[]>([]);
    const [jsonApi, setJsonApi] = useState<jsonApiType[]>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setFakeApi(res.data));

        axios.get('https://dummyjson.com/products')
            .then((res) => setDummyApi(res.data.products));

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => setJsonApi(res.data));
    }, [])

    const myApis = {
        fakeApi,
        dummyApi,
        jsonApi
    }

    return <DataContext.Provider value={myApis}>{children}</DataContext.Provider>
}
