

export const apiURL_Base = "http://localhost:8080/common?";

// export const url_version = "short";
export const url_version = "long";


function getURL_1(ver: String, dt: String) {
    let url = apiURL_Base;
    url += "ver=" + ver;
    url += "&" + "dt=" + dt;
    return url;
}

function getURL_2(ver: String, dt: String, fi: number) {
    let url = getURL_1(ver, dt);
    url += "&" + "fi=" + fi;
    // url += "&entities=Maharashtra,Goa";
    // url += "&entities=Goa";
    return url;
}

export function getURL_Metadata(ver: String) {
    return getURL_1(ver, "metadata");
}

export function getURL_AllData(ver: String) {
    return getURL_1(ver, "data");
}

export function getURL_FIData(ver: String, fi:number) {
    return getURL_2(ver, "data", fi);
}

export const apiURL_Metadata = getURL_Metadata(url_version);
export const apiURL_FIData = getURL_FIData(url_version, 0);
export const apiURL_AllData = getURL_AllData(url_version);