/* eslint-disable react/prop-types */

const PresentationHeader = ({ practitioner }) => {
    return <div className="bg-cyan-900 py-5 w-full">
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <img className="h-20 w-20 rounded-lg" src={practitioner.photo.profilePicture} alt="Profile" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-white text-2xl font-bold">
                            {practitioner.practitioner}
                            
                        </h1>
                        <span className="text-white text-sm">
                            {practitioner.subTitle}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
};

export default PresentationHeader;