import React from 'react'
import NewCard from './NewCard'
import './New.css'

const New = () => {
    return (
        <div className='new'>
            <h2 className='header newHeader'>
                What's New?
            </h2>
            <div className='newCardContainer'>
                <NewCard 
                author='John Doe - Aug 1'
                topic='Research'
                title='Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus ante?'
                article='Pellentesque sodales tortor at tristique finibus. Proin eget eros nulla. Curabitur a condimentum augue. Proin viverra dolor quam'
                />
                <NewCard 
                author='Will Moe - Jul 28'
                topic='Achievment'
                title='In vehicula rhoncus felis sed congue.'
                article='Pellentesque sodales tortor at tristique finibus. Proin eget eros nulla. Curabitur a condimentum augue. Proin viverra dolor quam'
                />
                <NewCard 
                author='Rob Maine - Aug 7'
                topic='Event'
                title='Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus ante?'
                article='Quisque id finibus velit. In hac habitasse platea dictumst. Curabitur tempus quam ut tellus pellentesque accumsan. Cras tincidunt augue a nisl aliquet, in luctus velit iaculis. Etiam ac ante diam. Suspendisse eleifend pretium tortor, ac ullamcorper enim rhoncus quis. Aliquam eget fringilla orci. Vivamus sit amet tincidunt ligula, a tempus nunc. Quisque eget purus blandit, tempor nisl id, lobortis diam. Donec ac leo risus. Sed vitae volutpat tortor.'
                />
                <NewCard 
                author='Rob Maine - Aug 7'
                topic='Technology'
                title='Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus ante?'
                article='Pellentesque sodales tortor at tristique finibus. Proin eget eros nulla. Curabitur a condimentum augue. Proin viverra dolor quam'
                />
                <NewCard 
                author='Rob Maine - Aug 7'
                topic='Research'
                title='Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus ante?'
                article='Vestibulum tincidunt nunc in turpis placerat, nec mattis massa consectetur. Pellentesque facilisis diam semper, rhoncus ante non, tempor mi. Morbi porta tellus ex, volutpat tristique nibh auctor eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin luctus tortor mi, tempus euismod nunc sollicitudin id.'
                />
            </div>
        </div>
    )
}

export default New