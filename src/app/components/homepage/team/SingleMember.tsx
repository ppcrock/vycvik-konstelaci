import Image from 'next/image'

const SingleMember = ({
    creativemind,
}: {
    creativemind: any
}) => {
    const { image, name, position } = creativemind

    return (
        <div
            className='group flex flex-col gap-6 items-start justify-center'>
            <div className='group-hover:grayscale'>
                <Image
                    src={image}
                    alt={name}
                    width={625}
                    height={410}
                    className='rounded-2xl w-full'
                />
            </div>
            <div>
                <p className='font-medium text-20 text-dark dark:text-white mb-1'>{name}</p>
                <p>
                    {position}
                </p>
            </div>
        </div>
    )
}

export default SingleMember
