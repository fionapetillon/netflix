import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
    const { data: user } = useCurrentUser();

    if (!visible){
        return null;
    }
    return(
        <div className="text-white bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-300">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img src="/images/default-red.png" alt="profile" className="w-8 rounded-sm" />
                    <p className="text-sm group-hover/item:underline">
                        {user?.name}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div onClick={() => signOut()} className="px-3 text-center">
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;