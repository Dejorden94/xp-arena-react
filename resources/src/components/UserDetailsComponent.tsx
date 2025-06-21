import {User} from "@/types";

export default function UserDetailsComponent({user}: { user: User }) {
    return (
        <article className="flex items-center space-x-4">
            <div>
                <img src={user.avatar} alt={user.name}/>
                <h3>{user.name}</h3>
            </div>
            <div>
                <p>{user.level}</p>
                <p>{user.experience}</p>
            </div>
        </article>
    )
}
