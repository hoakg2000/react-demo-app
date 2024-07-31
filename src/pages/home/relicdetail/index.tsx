import { useEffect, useState } from "react";
import MySpinner from "../../../components/MySpinner";

type RelicDetailsProps ={
    relic: any
}

const RelicDetails = ({relic}: RelicDetailsProps) =>{

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log(relic)
        setLoading(true);
        const getMarketInfo = async (relic: any) => {
            const fetchPromises = relic.rewards?.map(async (reward: any) => {
                const urlName = reward.item.warframeMarket?.urlName;
                if (!urlName) {
                    return null;
                }
                
                const response = await fetch(`https://api.warframe.market/v1/items/${urlName}/orders`);
                let marketInfo = {
                    itemname: reward.item.name,
                    price: 0,
                    username: "",
                };
                
                if (response.ok) {
                    const data = await response.json();
                    data.payload.orders.sort((a: any, b: any) => {
                        if (a.user.status !== b.user.status) {
                            return a.user.status == "offline" ? 1 : -1;
                        }
                        if (a.order_type !== b.order_type) {
                            return a.order_type == "sell" ? -1 : 1;
                        }
                        return a.platinum > b.platinum ? 1 : -1;
                    });
                    marketInfo.price = data.payload.orders[0]?.platinum || 0;
                    marketInfo.username = data.payload.orders[0]?.user?.ingame_name || "";
                }
                
                return marketInfo;
            });
            const result:any = await Promise.all(fetchPromises);
            console.log(result)
            setItems(result.filter((r:any)=>r!==null));
            setLoading(false);
        }

        getMarketInfo(relic);
    },[relic])

    // if (loading){
    //     return <h1>load</h1>
    // }

    return <>
        {
            relic ?
            (
                loading ? 
                    <MySpinner/>
                :
                items.map((item:any)=>{
                    return  <div key={`${item.iteamname}-${item.price}-${item.username}`} >
                            <h2>{item.itemname} - {item.price}</h2>
                            <h3>{item.username}</h3>
                        </div>
                })
            )
            :
            <h1>No selected relic</h1>
        }
    </>
}

export default RelicDetails;