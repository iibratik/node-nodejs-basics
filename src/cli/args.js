const parseArgs = () => {
    const args = process.argv.slice(2);
    const formattedArgs = args.reduce((formatted, arg, index) => {
      if (index % 2 === 0) {
        const argName = arg.slice(2); // Удаляем префикс "--"
        const value = args[index + 1];
        formatted.push(`${argName} is ${value}`);
    }
    return formatted;
    }, []);
    console.log(formattedArgs.join(', '));
};

parseArgs();