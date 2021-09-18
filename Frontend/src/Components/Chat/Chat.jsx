import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "axios";

import { React, useState } from "react";
import "./Chat.css";

export const Chat = ({ messages }) => {
	const [input, setInput] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		await axios.post("http://localhost:8000/messages/new", {
			message: input,
			name: "Divij",
			timestamp: "Just now",
			received: true,
		});

		setInput("");
	};

	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar src="" />

				<div className="chat__headerInfo">
					<h3>Current chat</h3>
					<p>Last seen at 5:55 AM</p>
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				{messages.map((message) => (
					<p
						className={`chat__message ${message.received && "chat__receiver"}`}
					>
						<span className="chat__name">{message.name}</span>
						{message.message}
						<span className="chat__timestamp">{message.timestamp}</span>
					</p>
				))}
			</div>
			<div className="chat__footer">
				<InsertEmoticonIcon />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type a message"
						type="text"
					/>
					<button onClick={sendMessage} type="submit">
						Send a message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
};
