function fillNull(obj) {

    if (typeof obj !== 'object' || obj === null) {
        return obj ?? null;
    }

    for (const [key, values] of Object.entries(obj)) {

        if (values === undefined) {
            obj[key] = null
        }

        if (Array.isArray(values)) {
            updatedVal = values.map((val) => val === undefined ? null : val)
            obj[key] = updatedVal;
        }

        if (typeof values === 'object') {
            fillNull(values);
        }
    }

    return obj
}


let obj = {
    a: ['BFE.dev', undefined, 'bigfrontend.dev'],
    b: undefined,
    c: 'how',
    x: { v: undefined }
}
let res = fillNull(obj)

console.log(res);