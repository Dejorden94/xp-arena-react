import {User} from "@/types";

interface UserDetailsComponentProps {
    user: User;
}

export default function UserDetailsComponent({ user }: UserDetailsComponentProps) {
    const profilePictureUrl = user.profile_picture_url;

    return (
        <article className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img
                        src={profilePictureUrl}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{user.name}</h3>
                    <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                            <span className="font-medium">Level:</span> {user.level}
                        </p>
                        <p className="text-sm text-gray-600">
                            <span className="font-medium">Current exp:</span> {user.experience}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}
