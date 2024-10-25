const converter = {    
    digitalStorage: {
        KBtoMB(KB = 0) {
            return KB / 1024 + " MB";
        },
        GBtoMB(GB = 0) {
            return GB * 1024 + " MB";
        },
        TBtoMB(TB = 0) {
            return TB * 1024 * 1024 + " MB";
        },
        PBtoMB(PB = 0) {
            return PB * 1024 * 1024 * 1024 + " MB";
        },
    },
}

let result = converter.digitalStorage.GBtoMB(7)
console.log(result);




