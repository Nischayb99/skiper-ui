import React from 'react'
import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from '../ui/minimal-card'
import BadgeButton from '../ui/badge-button'

const TemplateCard = () => {
    const cards = [
        {
            title: "Sick title",
            description:
                "How to design with gestures and motion that feel intuitive and natural.",
            src: "https://pbs.twimg.com/media/GgMiuRpa4AAoW2y?format=jpg&name=medium",
        },
        {
            title: "Sick title",
            description:
                "How to design with gestures and motion that feel intuitive and natural.",
            src: "https://pbs.twimg.com/media/GgHZJN0aoAA__92?format=jpg&name=medium",
        },
        {
            title: "Sick title",
            description:
                "How to design with gestures and motion that feel intuitive and natural.",
            src: "https://pbs.twimg.com/media/GgCPjsQacAAWvm3?format=jpg&name=medium",
        },
    ]
    return (
        <div>
            <div className='w-[61.5%] p-2 my-20 rounded-3xl shadow bg-white mx-auto'>
                <div className='h-full p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto'>
                    <BadgeButton>Template</BadgeButton>
                    <div className='flex justify-between items-center'>
                        
                                    {cards.map((card, index) => (
                                        <MinimalCard className="m-2 w-[460px] " key={index}>
                                            <MinimalCardImage
                                                className="h-[160px]"
                                                src={card.src}
                                                alt={card.title}
                                            />
                                            <MinimalCardTitle>{card.title}</MinimalCardTitle>
                                            <MinimalCardDescription>
                                                {card.description}
                                            </MinimalCardDescription>
                                        </MinimalCard>
                                    ))}
                                
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TemplateCard