import { useEffect, useState } from "react";
import MyInput from "../../components/MyInput";
import MyToggleButton from "../../components/MyToggleButton";
import MyFromItem from "../../components/MyFormItem";
import MyForm from "../../components/MyFrom";
import MyCard from "../../components/MyCard";

import './styles.css';
import RelicDetails from "./relicdetail";

const imageUrl = "https://cdn.warframestat.us/img/"
const relicUrl = "https://api.warframestat.us/items/search/Radiant/"

const Home = () => {
    const [defaultRelic, setDefaultRelic] = useState([]);
    const [error, setError] = useState(null);
    const [filterName, setFilterName] = useState<string>('');
    const [vaulted, setVaulted] = useState<boolean>(false);
    const [relics, setRelics] = useState([]);
    const [relic, setRelic] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(relicUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let result = await response.json();
                result = result.filter((res: any) => res.rewards).sort(
                    (a:any, b: any)=>{
                        if (a.vaulted !== b.vaulted) {
                            return a.vaulted ? 1 : -1; 
                        }

                        return a.name.localeCompare(b.name);
                    }
                )

                setDefaultRelic(result);
                setRelics(result.filter((relic:any)=>{
                    return (relic.vaulted == vaulted) && relic?.name.toUpperCase().includes(filterName.toUpperCase())
                }));
                
            } catch (error:any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    useEffect(()=>{
        setRelics(defaultRelic.filter((relic:any)=>{
            return (relic.vaulted == vaulted) && relic?.name.toUpperCase().includes(filterName.toUpperCase())
        }))
    },[vaulted, filterName])

    if (error) return <div>Error: {error}</div>;
    if (!relics) return <div>Loading...</div>;



    return <>
        <div className="home-container">
            {/* form */}
            <MyForm>
                <MyFromItem label = {"Filter name"}>
                    <MyInput value={filterName} onChange={setFilterName}/>
                </MyFromItem>
                <MyFromItem label = {"Vaulted"}>
                    <MyToggleButton initialState={vaulted} onChange={setVaulted}/>
                </MyFromItem>
            </MyForm>

            {/* card */}
            <div className="card-container">
                <div className="card">
                    {
                        relics.map((relic: any, index: number) =>{
                            return <MyCard onClick={setRelic} item={relic} key={`${index}${relic}`} name={relic.name} image={`${imageUrl}${relic.imageName}`}/>;
                        })
                    }
                </div>
                <div className="relic-info">
                    {
                        relic ? 
                            <>
                                <RelicDetails relic={relic}/>
                            </> 
                        :
                            <h2>No selected relic</h2>
                    }
                </div>
            </div>
        </div>
    </>
}

export default Home;
