import './styles.css'

type MyCardProps = {
    name: string;
    image: string;
    onClick: (event: any) => void;
    item: any;
}

const MyCard = (props: MyCardProps) =>{
    return <>
        <div className="card-conatiner" onClick={() => props.onClick(props.item)}>
            <div className="image-container">
                <img src={props.image}/>
            </div>
            <div className="label-container">
                {props.name}
            </div>
        </div>
    </>
}

export default MyCard;