import React from 'react'
import { StyleSheet} from 'react-native'
import HorizontalList from './HorizontalList'

const BreakingNews = ({data}) => {
    return (
       <HorizontalList title='Breaking News' data={data} />
    )
}

const styles = StyleSheet.create({})

export default BreakingNews


