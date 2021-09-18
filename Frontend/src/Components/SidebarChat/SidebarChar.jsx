import { Avatar } from "@material-ui/core";
import React from 'react'
import "./SidebarChat.css";

export const SidebarChat=()=> {
    return (
        <div className="sidebarChat">
            <Avatar src ='' />
            <div className="sidebarChat__info">
                <h3>SOME ONE</h3>
                <p>New message.</p>
            </div>
        </div>
    )
}
