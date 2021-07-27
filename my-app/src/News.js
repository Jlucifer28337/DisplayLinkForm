import React from 'react'
import { Feed } from './Feed'
import { news } from './moka'

export const News = () => {
    return news.map(item => <Feed feed={item} />)
}