import React from "react";
import VideoItem from "../video-items/video-items";

const VideoList = ({videos, onVideoSelect}) => {

	const renderedList = videos.map((video) => {
		return (
			<VideoItem 
				key={video.id.videoId}
				video={video} 
				onVideoSelect={onVideoSelect}
			/>
		)
	})

	return (
		<div className="ui relax divided list">
			{renderedList}
		</div>
	)
}

export default VideoList;