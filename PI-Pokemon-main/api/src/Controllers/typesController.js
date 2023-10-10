// const { Type } = require("../db")
// const axios = require("axios")

// const getTypes = async () => {
//     const typesDb = await Type.findAll()
//     if(!typesDb.length){
//         // no hay nada en la base de datos y ahora traemos la informacion de la api
//         const { data } = await axios.get("https://pokeapi.co/api/v2/type")
//         console.log(data)
//         // const results = data.results
//         let allTypes = [];
//         data.forEach(tipo => allTypes.push(tipo.data))
//         console.log(allTypes)
//         // let typeUnic = new Set(allTypes.flat());
//         // let typeArray = [...typeUnic];
//         // typeArray.forEach(async (t) => {
//         //     await Type.findOrCreate({
//         //         where: {types: t}
//         //     })
//         // })
//         // return typeArray;
//     }
//     return typesDb.map(t => t.name);
// }

// module.exports = {getTypes}

const { Type } = require("../db")
const axios = require("axios")

const getTypes = async () => {
    const typesDb = await Type.findAll()

    if (!typesDb.length) {
        const { data } = await axios.get("https://pokeapi.co/api/v2/type")

        if (data && data.results) {
            const allTypes = data.results.map((type) => type.name);

            allTypes.forEach(async (type) => {
                await Type.findOrCreate({
                    where: { name: type }
                })
            });

            return allTypes;
        }
    }
    return typesDb.map(t => t.name);
}

module.exports = { getTypes }
