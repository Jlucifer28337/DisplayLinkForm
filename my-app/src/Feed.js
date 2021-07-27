import React from 'react'
import './Feed.css'

export const Feed = ({feed}) => {
    return (
        <div className="feed-wrapper"> 
            <div className="feed">
                <h3 className="feed__community-name"> {feed.communityName}</h3>
                <div className="feed__theme"> {feed.theme} </div>
                <div className="feed__text"> {feed.text} </div>
                <div className="feed__date"> {feed.date} </div>
            </div>
        </div>
    )
}