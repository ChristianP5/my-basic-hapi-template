const Hapi = require('@hapi/hapi');

const init = async ()=>{
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
    })

    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

process.on('unhandledRejection', (error) =>{
    console.error(error.stack);
    console.error(`Process caugh Error!`);
    process.exit(1);
})

init();