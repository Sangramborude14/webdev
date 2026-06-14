import {FixedSizeList as List} from 'react-window';

//Define Row Renderer
const Row = ({index, style}) => (
    <div className={index % 2 === 0 ? 'row-even': 'row-odd'}>
        Row Item { index + 1}
    </div>
);


const VirtualList = () => {
    return (
        <List height={500} width={400} itemCount={50000} itemSize={50}>
            {Row}
        </List>
    )
}

export default VirtualList;

 