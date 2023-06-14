const parseEnv = () => {
    Object.entries(process.env)
    .filter(([name]) => name.startsWith('RSS'))
    .reduce((varible,[name, value],index) => {
     console.log(`${name}${index+1} = ${value}${index+1}`);
        return `${name}${index+1} = ${value}${index+1}`
    }, {})
}

parseEnv()
