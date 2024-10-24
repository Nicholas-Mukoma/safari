import { useState } from "react"


const SectionDetail = ( {detail} ) => {
    return (
        <div>
            <p>{detail}</p>
        </div>
    )
}

const Benefits = () => {

    const [simplicity, setSimplicityOpen] = useState(true)
    const [cost, setCostOpen] = useState(false)
    const [affordable, setAffordableOpen] = useState(false)
    const [relevance, setRelevanceOpen] = useState(false)
    
    // const handleSimplicity = () => (
    //     setSimplicityOpen(true)
    // )
    const handleCost = () => (
        setCost(true)
    )
    const handleAffordable = () => (
        setAffordableOpen(true)
    )
    const handleRelevance = () => (
        setRelevanceOpen(true)
    )

    return (
        <div className="flex flex-col items-center mt-36 px-24">
            <h1 className="text-3xl font-bold">Better for business people and the environment</h1>
            <p className="text-lg mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est enim eum quos provident aliquam commodi magni deserunt</p>
            <div className="flex flex-col mr-auto ml-">
                <h3 className="text-2xl font-bold mr-auto">Advantage</h3>
                <div className="flex flex-row">
                    {/* Subsection Links */}
                    <div className="mr-auto flex flex-col items-start">
                        <ul className="flex flex-col items-start">
                            <button>
                                Simplicity and Accessibility
                            </button>
                            <button onClick={handleCost}>
                                Cost Effectiveness
                            </button>
                            <button onClick={handleRelevance}>
                                Local Relevance and Adaptability
                            </button>
                            <button onClick={handleAffordable}>
                                Support for Affordable Housing Program
                            </button>
                        </ul>
                    </div>
                    {/* Section detail */}
                    <div className="ml-auto flex flex-col">
                        {simplicity && <SectionDetail detail={"Simple"}/>}
                        {cost && <SectionDetail detail={"Cost Effective"}/>}
                        {relevance && <SectionDetail detail={"Local relevance"}/>}
                        {affordable && <SectionDetail detail={"Affordable Housing"}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits