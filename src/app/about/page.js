async function timeDelay(resolve) {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    })   
}


export default async function About() {
    await timeDelay();
    return ( 
        <div>
            This is about page
        </div>
    )
}