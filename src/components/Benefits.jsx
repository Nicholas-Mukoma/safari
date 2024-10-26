import { useState } from "react"


const SectionContent = ( {content} ) => {
    return (
        <div className="ml-24 text-start w-[50vw]">
            <p className="leading-7">{content}</p>
        </div>
    )
}

const Benefits = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [socialActiveTab, setSocialActiveTab] = useState(0);

    const advantageTitles = [
        { 
            title: 'Simplicity And Accessibility', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!' 
        },
        { 
            title: 'Cost Effectiveness', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis' 
        },

        {   title: 'Local Relevance and Adaptability', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!' 
        },

        { 
            title: 'Support For Affordable Housing Program', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!' 
        },
      ];

    const socialtitles = [
        { 
            title: 'Improved Quality Of Life', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!' 
        },
        { 
            title: 'Affordable Housing', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!' 
        },

        {   title: 'Job Creation & Economic Opportunities', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!' 
        },

        { 
            title: 'Education and Awareness', 
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!' 
        },
        {
            title: 'Social Inclusion and Equity',
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!                                                                                                                                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quas inventore modi harum veniam repudiandae ipsam sed esse commodi voluptas sit facilis, tempore sint maiores libero perspiciatis. Perferendis, laudantium esse!",
        }

      ];

    return (
        <div className="flex flex-col items-center mt-24 px-24">
            <h1 className="text-3xl font-bold text-primary">Why Green Buildings</h1>
            <p className="text-lg mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est enim eum quos provident aliquam commodi magni deserunt</p>
            <div className="flex flex-col mr-auto mt-12">
                <h3 className="text-2xl font-bold mr-auto mt-6 mb-3">Competitive Advantage</h3>
                <p className="mb-3 leading-7 w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ea placeat impedit non nesciunt, exercitationem deleniti quos libero error enim illum atque vitae facilis dolores minus id fugit! Facere, commodi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga obcaecati sunt deserunt recusandae voluptate placeat perferendis? Soluta accusamus dolorum ab quia deleniti cum voluptatem, harum earum dolores! Laboriosam, quae quam.</p>
                <div className="flex flex-row w-full mt-3">
                    {/* Subsection Links */}
                    <div className="mr-auto flex flex-col items-start gap-y-4">
                       {advantageTitles.map((item, index) => (
                             <button
                             key={index}
                             onClick={() => setActiveTab(index)}
                             className={`block w-full text-left text-lg font-bold p-2 ${
                               activeTab === index ? 'underline underline-offset-[12px] decoration-2 text-primary' : 'text-gray-500 hover:text-primary hover:underline hover:underline-offset-[12px] hover:decoration-2'
                             }`}
                           >
                             {item.title}
                           </button>
                       ))}
                    </div>
                    {/* Section Content */}
                    <div className="">
                        <SectionContent content={advantageTitles[activeTab].content} />
                    </div>
                </div>
                <hr className="mt-4"/>
                <h3 className="text-2xl font-bold mr-auto mt-3 mb-3">Social Imapct</h3>
                <p className="mb-3 leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ea placeat impedit non nesciunt, exercitationem deleniti quos libero error enim illum atque vitae facilis dolores minus id fugit! Facere, commodi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga obcaecati sunt deserunt recusandae voluptate placeat perferendis? Soluta accusamus dolorum ab quia deleniti cum voluptatem, harum earum dolores! Laboriosam, quae quam.</p>
                <div className="flex flex-row mt-3">
                    {/* Subsection Links */}
                    <div className="mr-auto flex flex-col items-start gap-y-4">
                       {socialtitles.map((item, index) => (
                             <button
                             key={index}
                             onClick={() => setSocialActiveTab(index)}
                             className={`block  text-left text-lg font-bold p-2 w-[27vw] ${
                                socialActiveTab === index ? 'underline underline-offset-[12px] decoration-2 text-primary' : 'text-gray-500 hover:text-primary hover:underline hover:underline-offset-[12px] hover:decoration-2'
                              }`}
                           >
                             {item.title}
                           </button>
                       ))}
                    </div>
                    {/* Section detail */}
                    <div className="ml-auto flex flex-col">
                        <SectionContent content={socialtitles[socialActiveTab].content} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits