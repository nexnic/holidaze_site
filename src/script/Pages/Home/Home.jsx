import ChangeHead from "../../Components/Head/ChangeHead"



function Home () {

    const meta = {
        title:'Holidaze | Home',
        description: 'Discover the perfect holiday venue for your festive celebrations at Holidaze Venues',
        keywords: 'Holidaze, holiday, parties, gatherings, events', 
    }
    ChangeHead(meta)



    return (
        <>
            <h1 style={{color: 'white'}}>test</h1>
        </>
    )
}

export default Home